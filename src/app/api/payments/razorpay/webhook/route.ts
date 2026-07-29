import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Booking } from '@/models/Booking';
import { fulfillPaidOrder } from '@/lib/orderFulfillment';
import { fulfillPaidBooking } from '@/lib/bookingFulfillment';
import { verifyRazorpayWebhook } from '@/lib/razorpay';

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-razorpay-signature') ?? '';

  if (process.env.RAZORPAY_WEBHOOK_SECRET && !verifyRazorpayWebhook(rawBody, signature)) {
    console.warn('[razorpay webhook] invalid signature');
    return NextResponse.json({ ok: false, reason: 'invalid-signature' }, { status: 401 });
  }

  let event: {
    event: string;
    payload: {
      order?: { entity: { id: string; status: string } };
      payment?: { entity: { id: string; status: string; order_id: string } };
    };
  };

  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  if (event.event !== 'order.paid' && event.event !== 'payment.captured') {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const razorpayOrderId = event.payload.order?.entity?.id || event.payload.payment?.entity?.order_id;
  const razorpayPaymentId = event.payload.payment?.entity?.id;

  if (!razorpayOrderId) {
    return NextResponse.json({ ok: false, reason: 'missing-order-id' }, { status: 400 });
  }

  await connectMongoose();

  // Try shop order first
  const order = await Order.findOne({ razorpayOrderId });
  if (order) {
    if (order.paymentStatus !== 'paid') {
      order.paymentStatus = 'paid';
      order.status = 'confirmed';
      order.razorpayPaymentId = razorpayPaymentId || null;
      await order.save();
      await fulfillPaidOrder(order);
      console.log('[razorpay webhook] order fulfilled', order.orderNumber);
      return NextResponse.json({ ok: true });
    } else if (!order.razorpayPaymentId && razorpayPaymentId) {
      order.razorpayPaymentId = razorpayPaymentId;
      await order.save();
      console.log('[razorpay webhook] order payment ID updated', order.orderNumber);
      return NextResponse.json({ ok: true });
    }
  }

  // Try booking
  const booking = await Booking.findOne({ razorpayOrderId });
  if (booking) {
    if (booking.paymentStatus !== 'paid') {
      booking.paymentStatus = 'paid';
      booking.status = 'booked';
      booking.razorpayPaymentId = razorpayPaymentId;
      await booking.save();
      await fulfillPaidBooking(booking);
      console.log('[razorpay webhook] booking fulfilled', booking.bookingNumber);
      return NextResponse.json({ ok: true });
    } else if (!booking.razorpayPaymentId && razorpayPaymentId) {
      booking.razorpayPaymentId = razorpayPaymentId;
      await booking.save();
      console.log('[razorpay webhook] booking payment ID updated', booking.bookingNumber);
      return NextResponse.json({ ok: true });
    }
  }

  return NextResponse.json({ ok: true, skipped: true });
}
