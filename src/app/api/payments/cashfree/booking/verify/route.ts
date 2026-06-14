import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { isCashfreeConfigured, getCashfreeOrderStatus, getCashfreePaymentId } from '@/lib/cashfree';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

const schema = z.object({
  bookingId: z.string().optional(),
  cfOrderId: z.string().optional(),
  merchantOrderId: z.string().optional(),
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

  const { bookingId, cfOrderId, merchantOrderId } = parsed.data;
  const targetCfOrderId = cfOrderId || merchantOrderId;

  if (!targetCfOrderId) {
    return NextResponse.json({ ok: false, reason: 'missing-order-id' }, { status: 400 });
  }

  // Verify with Cashfree
  let orderStatus: string;
  let cfPaymentId: string | undefined;
  try {
    const result = await getCashfreeOrderStatus(targetCfOrderId);
    orderStatus = result.orderStatus;
    cfPaymentId = result.cfPaymentId ?? await getCashfreePaymentId(targetCfOrderId);
  } catch (err) {
    console.error('[cashfree] booking status check failed', err);
    return NextResponse.json({ ok: false, reason: 'cashfree-status-error' }, { status: 502 });
  }

  if (orderStatus !== 'PAID') {
    return NextResponse.json(
      { ok: false, reason: `payment-not-confirmed (status: ${orderStatus})` },
      { status: 400 },
    );
  }

  await connectMongoose();
  let booking;
  if (bookingId) {
    booking = await Booking.findOne({
      _id: bookingId,
      user: session.user.id,
    });
  } else if (merchantOrderId) {
    let bookingNumber = merchantOrderId;
    if (bookingNumber.startsWith('KMCB-')) {
      bookingNumber = bookingNumber.substring(5);
    }
    booking = await Booking.findOne({
      bookingNumber,
      user: session.user.id,
    });
  }

  if (!booking) {
    return NextResponse.json({ ok: false, reason: 'booking-not-found' }, { status: 404 });
  }

  if (booking.paymentStatus === 'paid') {
    return NextResponse.json({
      ok: true,
      bookingNumber: booking.bookingNumber,
      bookingId: String(booking._id),
      alreadyPaid: true,
    });
  }

  booking.paymentStatus = 'paid';
  booking.status = 'booked';
  booking.cfPaymentId = cfPaymentId;
  // Make sure to preserve Cashfree numeric ID in booking record if not set
  if (!booking.cfOrderId && cfOrderId) {
    booking.cfOrderId = cfOrderId;
  }
  await booking.save();

  return NextResponse.json({
    ok: true,
    bookingNumber: booking.bookingNumber,
    bookingId: String(booking._id),
  });
}
