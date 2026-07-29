import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { fulfillPaidBooking } from '@/lib/bookingFulfillment';
import { isRazorpayConfigured, verifyPaymentSignature } from '@/lib/razorpay';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

const bookingVerifySchema = z.object({
  bookingId: z.string().min(1, 'Booking ID is required'),
  merchantOrderId: z.string().optional(),
  razorpay_order_id: z.string().optional(),
  razorpay_payment_id: z.string().optional(),
  razorpay_signature: z.string().optional(),
});

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

  const parsed = bookingVerifySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  const { bookingId, merchantOrderId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

  await connectMongoose();
  let booking = null;

  // Try finding booking by bookingId
  const isObjectId = /^[a-f0-9]{24}$/i.test(bookingId);
  if (isObjectId) {
    booking = await Booking.findOne({ _id: bookingId, user: session.user.id });
  } else if (bookingId.startsWith('order_')) {
    booking = await Booking.findOne({ razorpayOrderId: bookingId, user: session.user.id });
  } else {
    let bookingNumber = bookingId;
    if (bookingNumber.startsWith('KMCB-')) {
      bookingNumber = bookingNumber.substring(5);
    }
    booking = await Booking.findOne({ bookingNumber, user: session.user.id });
  }

  // Fallback to merchantOrderId (which can be KMCB-bookingNumber or razorpayOrderId)
  if (!booking && merchantOrderId) {
    let bookingNumber = merchantOrderId;
    if (bookingNumber.startsWith('KMCB-')) {
      bookingNumber = bookingNumber.substring(5);
    }
    booking = await Booking.findOne({
      $or: [
        { bookingNumber },
        { razorpayOrderId: merchantOrderId }
      ],
      user: session.user.id
    });
  }

  if (!booking) {
    return NextResponse.json({ ok: false, reason: 'booking-not-found' }, { status: 404 });
  }

  if (razorpay_order_id && razorpay_payment_id && razorpay_signature) {
    // Signature-based verification (checkout callback verification)
    if (!verifyPaymentSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)) {
      return NextResponse.json({ ok: false, reason: 'invalid-signature' }, { status: 400 });
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
    booking.razorpayPaymentId = razorpay_payment_id;
    if (!booking.razorpayOrderId) {
      booking.razorpayOrderId = razorpay_order_id;
    }
    await booking.save();
    await fulfillPaidBooking(booking);

    return NextResponse.json({
      ok: true,
      bookingNumber: booking.bookingNumber,
      bookingId: String(booking._id),
    });
  } else {
    // Status-lookup based verification (success redirection page check)
    if (booking.paymentStatus === 'paid') {
      return NextResponse.json({
        ok: true,
        bookingNumber: booking.bookingNumber,
        bookingId: String(booking._id),
        alreadyPaid: true,
      });
    }

    if (!booking.razorpayOrderId) {
      return NextResponse.json({ ok: false, reason: 'no-online-payment-started' }, { status: 400 });
    }

    const { getRazorpayOrderStatus } = await import('@/lib/razorpay');
    let orderStatus: string;
    let razorpayPaymentId: string | undefined;
    try {
      const result = await getRazorpayOrderStatus(booking.razorpayOrderId);
      orderStatus = result.orderStatus;
      razorpayPaymentId = result.razorpayPaymentId;
    } catch (err) {
      console.error('[razorpay booking] status check failed', err);
      const errMsg = err instanceof Error ? err.message : String(err);
      return NextResponse.json({ ok: false, reason: `razorpay-status-error: ${errMsg}` }, { status: 502 });
    }

    if (orderStatus !== 'paid') {
      return NextResponse.json(
        { ok: false, reason: `payment-not-confirmed (status: ${orderStatus})` },
        { status: 400 }
      );
    }

    booking.paymentStatus = 'paid';
    booking.status = 'booked';
    booking.razorpayPaymentId = razorpayPaymentId || undefined;
    await booking.save();
    await fulfillPaidBooking(booking);

    return NextResponse.json({
      ok: true,
      bookingNumber: booking.bookingNumber,
      bookingId: String(booking._id),
    });
  }
}
