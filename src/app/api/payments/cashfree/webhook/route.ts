import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Booking } from '@/models/Booking';
import { fulfillPaidOrder } from '@/lib/orderFulfillment';
import { verifyCashfreeWebhook } from '@/lib/cashfree';

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-webhook-signature') ?? '';
  const timestamp = req.headers.get('x-webhook-timestamp') ?? '';

  if (!verifyCashfreeWebhook(rawBody, signature, timestamp)) {
    console.warn('[cashfree webhook] invalid signature');
    return NextResponse.json({ ok: false, reason: 'invalid-signature' }, { status: 401 });
  }

  let event: {
    type: string;
    data: {
      order: { order_id: string; order_status: string; cf_order_id: string };
      payment: { cf_payment_id: string; payment_status: string };
    };
  };

  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  // Only handle PAYMENT_SUCCESS events
  if (event.type !== 'PAYMENT_SUCCESS_WEBHOOK') {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const cfOrderId = String(event.data.order.cf_order_id);
  const cfPaymentId = String(event.data.payment.cf_payment_id);
  const cashfreeOrderId = event.data.order.order_id; // our order ID prefix e.g. KMC-ORD-xxx

  await connectMongoose();

  // Try shop order first
  const order = await Order.findOne({ cfOrderId });
  if (order && order.paymentStatus !== 'paid') {
    order.paymentStatus = 'paid';
    order.status = 'confirmed';
    order.cfPaymentId = cfPaymentId;
    await order.save();
    await fulfillPaidOrder(order);
    console.log('[cashfree webhook] order fulfilled', cashfreeOrderId);
    return NextResponse.json({ ok: true });
  }

  // Try booking
  const booking = await Booking.findOne({ cfOrderId });
  if (booking && booking.paymentStatus !== 'paid') {
    booking.paymentStatus = 'paid';
    booking.status = 'booked';
    booking.cfPaymentId = cfPaymentId;
    await booking.save();
    console.log('[cashfree webhook] booking fulfilled', cashfreeOrderId);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true, skipped: true });
}
