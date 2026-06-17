import { cookies } from 'next/headers';
import { Product } from '@/models/Product';
import { Notification } from '@/models/Notification';
import type { OrderDoc } from '@/models/Order';
import { CART_COOKIE } from '@/lib/cartSession';
import { getDb } from '@/lib/mongodb';
import { sendEmail, orderPaidEmail, adminOrderReceivedEmail } from '@/lib/email';
import { resolveProductImage } from '@/lib/resolveProductImage';
import { formatMoney } from '@/lib/money';

export async function fulfillPaidOrder(order: OrderDoc): Promise<void> {
  const stockUpdates = order.items
    .filter((l) => l.productId && /^[a-f0-9]{24}$/i.test(String(l.productId)))
    .map((l) => ({
      updateOne: {
        filter: { _id: l.productId },
        update: { $inc: { stock: -l.qty } },
      },
    }));
  if (stockUpdates.length > 0) {
    Product.bulkWrite(stockUpdates).catch(() => {});
  }

  const sid = order.sessionId ?? (await cookies()).get(CART_COOKIE)?.value ?? null;
  try {
    const db = await getDb();
    if (order.user) {
      await db.collection('carts').deleteOne({ userId: String(order.user) });
    } else if (sid) {
      await db.collection('carts').deleteOne({ sessionId: sid });
    }
  } catch {
    /* non-fatal */
  }

  if (order.user) {
    const cur = order.currency || 'INR';
    Notification.create({
      user: order.user,
      type: 'order',
      title: `Order ${order.orderNumber} confirmed`,
      message: `Payment received — ${formatMoney(order.subtotal, cur)}. We're preparing your crystals.`,
      link: `/dashboard/orders/${order._id}`,
    }).catch(() => {});
  }

  // Fetch product images and details to pass to emails
  let itemsWithImages: any[] = [];
  try {
    const slugs = order.items.map(i => i.productSlug);
    const dbProducts = await Product.find({ slug: { $in: slugs } }).select('slug image category name').lean();
    const productMap = new Map(dbProducts.map(p => [p.slug, p]));
    
    itemsWithImages = order.items.map(i => {
      const p = productMap.get(i.productSlug);
      let imgUrl = '';
      if (p) {
        const resolved = resolveProductImage(p.image, p.category, p.name);
        if (resolved.startsWith('http')) {
          imgUrl = resolved;
        } else {
          imgUrl = `${process.env.NEXTAUTH_URL || ''}${resolved}`;
        }
      }
      return {
        name: i.name,
        qty: i.qty,
        price: i.price,
        lineTotal: i.lineTotal,
        image: imgUrl
      };
    });
  } catch (err) {
    console.error('[email:fulfillment:prepare-items-error]', err);
  }

  // Send email to customer and admin, awaiting both
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'krissmaagiicrystals@gmail.com';
  const cur = order.currency || 'INR';
  await Promise.allSettled([
    sendEmail({
      ...orderPaidEmail(order.customer.name, order.orderNumber, order.subtotal, itemsWithImages, cur, order.international ?? false),
      to: order.customer.email,
    }),
    sendEmail({
      ...adminOrderReceivedEmail(order.orderNumber, order.customer.name, order.customer.email, order.customer.phone, order.subtotal, itemsWithImages, cur, order.international ?? false),
      to: adminEmail,
    }),
  ]).then((results) => {
    results.forEach((r, idx) => {
      const type = idx === 0 ? 'customer' : 'admin';
      if (r.status === 'rejected') {
        console.error(`[email:fulfillment:${type}:error]`, r.reason);
      } else if (r.value && !r.value.sent) {
        console.warn(`[email:fulfillment:${type}:warn]`, r.value.reason);
      }
    });
  });
}
