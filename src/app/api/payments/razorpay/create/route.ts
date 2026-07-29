import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { getRazorpayClient, getRazorpayKeyId, isRazorpayConfigured, toPaise } from '@/lib/razorpay';
import { razorpayCreateSchema, zodErrorMessage } from '@/lib/validators';

export async function POST(req: Request) {
  if (!isRazorpayConfigured()) {
    return NextResponse.json({ ok: false, reason: 'razorpay-not-configured' }, { status: 503 });
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const parsed = razorpayCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  const razorpay = getRazorpayClient();
  const keyId = getRazorpayKeyId();
  if (!razorpay || !keyId) {
    return NextResponse.json({ ok: false, reason: 'razorpay-not-configured' }, { status: 503 });
  }

  await connectMongoose();
  const order = await Order.findOne({
    _id: parsed.data.orderId,
    user: session.user.id,
    paymentStatus: 'unpaid',
    status: { $ne: 'cancelled' },
  });

  if (!order) {
    return NextResponse.json({ ok: false, reason: 'order-not-found' }, { status: 404 });
  }

  let amount = order.total && order.total > 0 ? order.total : order.subtotal;
  let currency = order.currency || 'INR';

  if (currency !== 'INR') {
    // Reverse the client-side display division of 50 to get the original INR value
    amount = amount * 50;
    currency = 'INR';
  }

  const amountInPaise = toPaise(amount);
  if (amountInPaise < 100) {
    return NextResponse.json({ ok: false, reason: 'amount-too-low', message: 'The minimum payable amount is ₹1.00.' }, { status: 400 });
  }

  try {
    let razorpayOrderId = order.razorpayOrderId;
    if (!razorpayOrderId) {
      const rpOrder = await razorpay.orders.create({
        amount: amountInPaise,
        currency,
        receipt: order.orderNumber,
        notes: {
          kmcOrderId: String(order._id),
          orderNumber: order.orderNumber,
        },
      });
      razorpayOrderId = rpOrder.id;
      order.razorpayOrderId = razorpayOrderId;
      await order.save();
    }

    return NextResponse.json({
      ok: true,
      keyId,
      razorpayOrderId,
      amount: amountInPaise,
      currency,
      orderNumber: order.orderNumber,
      customer: {
        name: order.customer.name,
        email: order.customer.email,
        phone: order.customer.phone,
      },
    });
  } catch (err: any) {
    console.error('razorpay order create failed', err);
    return NextResponse.json({
      ok: false,
      reason: 'razorpay-error',
      message: err.message || 'Razorpay order creation failed',
      description: err.description || ''
    }, { status: 502 });
  }
}
