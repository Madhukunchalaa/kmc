import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { fulfillPaidOrder } from '@/lib/orderFulfillment';
import { isRazorpayConfigured, verifyPaymentSignature } from '@/lib/razorpay';
import { razorpayVerifySchema, zodErrorMessage } from '@/lib/validators';

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

  const parsed = razorpayVerifySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  const { orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

  if (!verifyPaymentSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)) {
    return NextResponse.json({ ok: false, reason: 'invalid-signature' }, { status: 400 });
  }

  await connectMongoose();
  const order = await Order.findOne({
    _id: orderId,
    user: session.user.id,
    razorpayOrderId: razorpay_order_id,
  });

  if (!order) {
    return NextResponse.json({ ok: false, reason: 'order-not-found' }, { status: 404 });
  }

  if (order.paymentStatus === 'paid') {
    return NextResponse.json({
      ok: true,
      orderNumber: order.orderNumber,
      orderId: String(order._id),
      alreadyPaid: true,
    });
  }

  order.paymentStatus = 'paid';
  order.status = 'confirmed';
  order.razorpayPaymentId = razorpay_payment_id;
  await order.save();

  await fulfillPaidOrder(order);

  return NextResponse.json({
    ok: true,
    orderNumber: order.orderNumber,
    orderId: String(order._id),
  });
}
