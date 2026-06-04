import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { CART_COOKIE } from '@/lib/cartSession';
import { resolveOrderLines } from '@/lib/orderLines';
import { isRazorpayConfigured } from '@/lib/razorpay';
import { createOrderSchema, zodErrorMessage } from '@/lib/validators';

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

  if (!session?.user?.id) {
    return NextResponse.json({ ok: false, reason: 'login-required' }, { status: 401 });
  }

  if (!isRazorpayConfigured()) {
    return NextResponse.json({ ok: false, reason: 'razorpay-not-configured' }, { status: 503 });
  }

  await connectMongoose();

  const { lines, subtotal, stockError } = await resolveOrderLines(items);
  if (stockError) {
    const status = stockError === 'no-valid-items' ? 400 : 409;
    return NextResponse.json({ ok: false, reason: stockError }, { status });
  }

  const orderNumber = 'KMC-' + Date.now().toString(36).toUpperCase();

  try {
    const order = await Order.create({
      orderNumber,
      user: session.user.id,
      sessionId: sid,
      items: lines.map((l) => ({
        productId: /^[a-f0-9]{24}$/i.test(l.productId) ? l.productId : null,
        productSlug: l.productSlug,
        name: l.name,
        price: l.price,
        qty: l.qty,
        lineTotal: l.lineTotal,
      })) as never,
      subtotal,
      currency: 'INR',
      status: 'pending',
      paymentStatus: 'unpaid',
      customer,
    });

    return NextResponse.json({
      ok: true,
      orderNumber,
      orderId: String(order._id),
      subtotal,
      requiresPayment: true,
    });
  } catch (err) {
    console.error('order create failed', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
