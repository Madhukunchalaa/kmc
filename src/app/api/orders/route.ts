import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { CART_COOKIE } from '@/lib/cartSession';
import { resolveOrderLines } from '@/lib/orderLines';
import { computeOrderShipping } from '@/lib/shipping';
import { isCashfreeConfigured } from '@/lib/cashfree';
import { isRazorpayConfigured, getActivePaymentGatewayFromDb } from '@/lib/razorpay';
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

  const { items, customer, currency, customizationDetails } = parsed.data;
  const sid = (await cookies()).get(CART_COOKIE)?.value ?? null;
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ ok: false, reason: 'login-required' }, { status: 401 });
  }

  const gateway = await getActivePaymentGatewayFromDb();
  if (gateway === 'razorpay') {
    if (!isRazorpayConfigured()) {
      return NextResponse.json({ ok: false, reason: 'razorpay-not-configured' }, { status: 503 });
    }
  } else if (gateway === 'cashfree') {
    if (!isCashfreeConfigured()) {
      return NextResponse.json({ ok: false, reason: 'cashfree-not-configured' }, { status: 503 });
    }
  }

  await connectMongoose();

  const { lines, subtotal, stockError } = await resolveOrderLines(items, currency);
  if (stockError) {
    const status = stockError === 'no-valid-items' ? 400 : 409;
    return NextResponse.json({ ok: false, reason: stockError }, { status });
  }

  // Shipping: India = highest item rate (free ≥ ₹4,500); international = settled separately by admin.
  const { shipping, international } = computeOrderShipping(lines, {
    country: customer.country,
    currency,
    subtotal,
  });
  const total = subtotal + shipping;

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
        size: (l as any).size || null,
      })) as never,
      subtotal,
      shipping,
      total,
      international,
      shippingPayment: { status: international ? 'pending' : 'not-required' },
      currency,
      status: 'pending',
      paymentStatus: 'unpaid',
      customer,
      customizationDetails: customizationDetails || null,
    });

    // Save phone number to user profile if not already set
    try {
      const { User } = await import('@/models/User');
      const userDoc = await User.findById(session.user.id);
      if (userDoc && !userDoc.phone && customer.phone) {
        userDoc.phone = customer.phone;
        await userDoc.save();
      }
    } catch (err) {
      console.error('Failed to update user phone profile from order:', err);
    }

    return NextResponse.json({
      ok: true,
      orderNumber,
      orderId: String(order._id),
      subtotal,
      shipping,
      total,
      international,
      requiresPayment: true,
      gateway,
    });
  } catch (err) {
    console.error('order create failed', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
