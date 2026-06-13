import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { isRazorpayConfigured, verifyPaymentSignature } from '@/lib/razorpay';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

const bookingVerifySchema = z.object({
  bookingId: z.string().min(1, 'Booking ID is required'),
  razorpay_order_id: z.string().min(1, 'Missing Razorpay Order ID'),
  razorpay_payment_id: z.string().min(1, 'Missing Razorpay Payment ID'),
  razorpay_signature: z.string().min(1, 'Missing Razorpay Signature'),
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

  const { bookingId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

  if (!verifyPaymentSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)) {
    return NextResponse.json({ ok: false, reason: 'invalid-signature' }, { status: 400 });
  }

  await connectMongoose();
  const booking = await Booking.findOne({
    _id: bookingId,
    user: session.user.id,
    razorpayOrderId: razorpay_order_id,
  });

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
  booking.razorpayPaymentId = razorpay_payment_id;
  await booking.save();

  return NextResponse.json({
    ok: true,
    bookingNumber: booking.bookingNumber,
    bookingId: String(booking._id),
  });
}
