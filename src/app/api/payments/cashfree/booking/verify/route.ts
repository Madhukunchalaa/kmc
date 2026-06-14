import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { isCashfreeConfigured, getCashfreeOrderStatus, getCashfreePaymentId } from '@/lib/cashfree';
import { fulfillPaidBooking } from '@/lib/bookingFulfillment';
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

  await connectMongoose();
  let booking = null;

  if (bookingId) {
    booking = await Booking.findOne({
      _id: bookingId,
      user: session.user.id,
    });
  }

  if (!booking && merchantOrderId) {
    let bookingNumber = merchantOrderId;
    if (bookingNumber.startsWith('KMCB-')) {
      bookingNumber = bookingNumber.substring(5);
    }
    if (bookingNumber.startsWith('KMCB-')) {
      bookingNumber = bookingNumber.substring(5);
    }
    booking = await Booking.findOne({
      bookingNumber: `KMCB-${bookingNumber}`,
      user: session.user.id,
    });
  }

  if (!booking && cfOrderId) {
    let bookingNumber = cfOrderId;
    if (bookingNumber.startsWith('KMCB-')) {
      bookingNumber = bookingNumber.substring(5);
    }
    if (bookingNumber.startsWith('KMCB-')) {
      bookingNumber = bookingNumber.substring(5);
    }
    booking = await Booking.findOne({
      $or: [
        { cfOrderId: cfOrderId },
        { bookingNumber: `KMCB-${bookingNumber}` },
      ],
      user: session.user.id,
    });
  }

  if (!booking) {
    return NextResponse.json({ ok: false, reason: 'booking-not-found' }, { status: 404 });
  }

  // Construct the correct merchant order ID reference sent to Cashfree for booking
  const merchantOrderRef = `KMCB-${booking.bookingNumber}`;

  // Verify payment status with Cashfree using correct reference
  let orderStatus: string;
  let cfPaymentId: string | undefined;
  try {
    const result = await getCashfreeOrderStatus(merchantOrderRef);
    orderStatus = result.orderStatus;
    cfPaymentId = result.cfPaymentId ?? await getCashfreePaymentId(merchantOrderRef);
  } catch (err) {
    console.error('[cashfree] booking status check failed', err);
    const errMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, reason: `cashfree-status-error: ${errMsg}` }, { status: 502 });
  }

  if (orderStatus !== 'PAID') {
    return NextResponse.json(
      { ok: false, reason: `payment-not-confirmed (status: ${orderStatus})` },
      { status: 400 },
    );
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

  await fulfillPaidBooking(booking);

  return NextResponse.json({
    ok: true,
    bookingNumber: booking.bookingNumber,
    bookingId: String(booking._id),
  });
}
