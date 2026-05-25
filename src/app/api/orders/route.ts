import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Product } from '@/models/Product';
import { Notification } from '@/models/Notification';
import { products as seedProducts } from '@/data/products';
import { CART_COOKIE } from '@/lib/cartSession';
import { getDb } from '@/lib/mongodb';
import { createOrderSchema, zodErrorMessage } from '@/lib/validators';
import { sendEmail, orderEmail } from '@/lib/email';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const parsed = createOrderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  const { items, customer } = parsed.data;
  const sid = (await cookies()).get(CART_COOKIE)?.value ?? null;
  const session = await auth();

  await connectMongoose();

  // Resolve products from DB (or fall back to seed for resilience).
  const dbProducts = await Product.find({ slug: { $in: items.map((i) => i.productId) }, active: true }).lean();
  const productMap = new Map<string, { _id: string; slug: string; name: string; price: number; stock: number | null }>();
  for (const p of dbProducts) {
    productMap.set(p.slug, { _id: String(p._id), slug: p.slug, name: p.name, price: p.price, stock: p.stock ?? null });
  }
  for (const sp of seedProducts) {
    if (!productMap.has(sp.id)) {
      productMap.set(sp.id, { _id: sp.id, slug: sp.id, name: sp.name, price: sp.price, stock: null });
    }
  }

  // Stock validation — only for DB products (seed products have no tracked stock).
  for (const it of items) {
    const p = productMap.get(it.productId);
    if (p && p.stock !== null && p.stock < it.qty) {
      const label = p.stock === 0 ? 'out of stock' : `only ${p.stock} left`;
      return NextResponse.json(
        { ok: false, reason: `"${p.name}" is ${label}` },
        { status: 409 },
      );
    }
  }

  const lines = items
    .map((it) => {
      const p = productMap.get(it.productId);
      if (!p) return null;
      return {
        productId: p._id,
        productSlug: p.slug,
        name: p.name,
        price: p.price,
        qty: it.qty,
        lineTotal: p.price * it.qty,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  if (lines.length === 0) {
    return NextResponse.json({ ok: false, reason: 'no-valid-items' }, { status: 400 });
  }
  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  const orderNumber = 'KMC-' + Date.now().toString(36).toUpperCase();

  try {
    const order = await Order.create({
      orderNumber,
      user: session?.user?.id ?? null,
      sessionId: sid,
      items: lines.map((l) => ({
        ...l,
        productId: /^[a-f0-9]{24}$/i.test(l.productId) ? l.productId : null,
      })) as never,
      subtotal,
      currency: 'INR',
      status: 'pending',
      customer,
    });

    // Decrement stock for DB-tracked products.
    const stockUpdates = lines
      .filter((l) => /^[a-f0-9]{24}$/i.test(l.productId))
      .map((l) => ({
        updateOne: {
          filter: { _id: l.productId },
          update: { $inc: { stock: -l.qty } },
        },
      }));
    if (stockUpdates.length > 0) {
      Product.bulkWrite(stockUpdates).catch(() => {});
    }

    // Clear cart — by userId for logged-in users, by sessionId for guests.
    try {
      const db = await getDb();
      if (session?.user?.id) {
        await db.collection('carts').deleteOne({ userId: session.user.id });
      } else if (sid) {
        await db.collection('carts').deleteOne({ sessionId: sid });
      }
    } catch {/* non-fatal */}

    // Notify the user in-app if logged in.
    if (session?.user?.id) {
      Notification.create({
        user: session.user.id,
        type: 'order',
        title: `Order ${orderNumber} received`,
        message: `Thank you! Your order of ₹${subtotal.toLocaleString('en-IN')} is being processed.`,
        link: `/dashboard/orders/${order._id}`,
      }).catch(() => {});
    }

    sendEmail({ ...orderEmail(customer.name, orderNumber, subtotal), to: customer.email }).catch(() => {});

    return NextResponse.json({ ok: true, orderNumber, orderId: String(order._id), subtotal });
  } catch (err) {
    console.error('order create failed', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
