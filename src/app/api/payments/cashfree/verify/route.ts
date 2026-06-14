import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { fulfillPaidOrder } from '@/lib/orderFulfillment';
import { isCashfreeConfigured, getCashfreeOrderStatus, getCashfreePaymentId } from '@/lib/cashfree';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

const schema = z.object({
  orderId: z.string().min(1, 'Order ID required'),
  cfOrderId: z.string().min(1, 'CF Order ID required'),
});

export async function POST(req: Request) {
  if (!isCashfreeConfigured()) {
    return NextResponse.json({ ok: false, reason: 'cashfree-not-configured' }, { status: 503 });
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try { body = await req.json(); }
  catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  const { orderId, cfOrderId } = parsed.data;

  // Verify payment status with Cashfree
  let orderStatus: string;
  let cfPaymentId: string | undefined;
  try {
    const result = await getCashfreeOrderStatus(cfOrderId);
    orderStatus = result.orderStatus;
    cfPaymentId = result.cfPaymentId ?? await getCashfreePaymentId(cfOrderId);
  } catch (err) {
    console.error('[cashfree] status check failed', err);
    return NextResponse.json({ ok: false, reason: 'cashfree-status-error' }, { status: 502 });
  }

  if (orderStatus !== 'PAID') {
    return NextResponse.json(
      { ok: false, reason: `payment-not-confirmed (status: ${orderStatus})` },
      { status: 400 },
    );
  }

  await connectMongoose();
  const order = await Order.findOne({
    _id: orderId,
    user: session.user.id,
    cfOrderId,
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
  order.cfPaymentId = cfPaymentId ?? null;
  await order.save();

  await fulfillPaidOrder(order);

  return NextResponse.json({
    ok: true,
    orderNumber: order.orderNumber,
    orderId: String(order._id),
  });
}
