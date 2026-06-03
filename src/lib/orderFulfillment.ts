import { cookies } from 'next/headers';
import { Product } from '@/models/Product';
import { Notification } from '@/models/Notification';
import type { OrderDoc } from '@/models/Order';
import { CART_COOKIE } from '@/lib/cartSession';
import { getDb } from '@/lib/mongodb';
import { sendEmail, orderPaidEmail } from '@/lib/email';

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
    Notification.create({
      user: order.user,
      type: 'order',
      title: `Order ${order.orderNumber} confirmed`,
      message: `Payment received — ₹${order.subtotal.toLocaleString('en-IN')}. We're preparing your crystals.`,
      link: `/dashboard/orders/${order._id}`,
    }).catch(() => {});
  }

  sendEmail({
    ...orderPaidEmail(order.customer.name, order.orderNumber, order.subtotal),
    to: order.customer.email,
  }).catch(() => {});
}
