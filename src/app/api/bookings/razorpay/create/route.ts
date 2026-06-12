import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { getRazorpayClient, getRazorpayKeyId, isRazorpayConfigured, toPaise } from '@/lib/razorpay';
import { z } from 'zod';

const createSchema = z.object({
  bookingId: z.string().min(1, "Booking ID is required"),
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

  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: 'invalid-input' }, { status: 400 });
  }

  const razorpay = getRazorpayClient();
  const keyId = getRazorpayKeyId();
  if (!razorpay || !keyId) {
    return NextResponse.json({ ok: false, reason: 'razorpay-not-configured' }, { status: 503 });
  }

  await connectMongoose();
  const booking = await Booking.findOne({
    _id: parsed.data.bookingId,
    user: session.user.id,
    paymentStatus: 'unpaid',
    status: { $ne: 'cancelled' },
  });

  if (!booking) {
    return NextResponse.json({ ok: false, reason: 'booking-not-found' }, { status: 404 });
  }

  try {
    let razorpayOrderId = booking.razorpayOrderId;
    if (!razorpayOrderId) {
      const rpOrder = await razorpay.orders.create({
        amount: toPaise(booking.servicePrice),
        currency: 'INR',
        receipt: booking.bookingNumber,
        notes: {
          kmcBookingId: String(booking._id),
          bookingNumber: booking.bookingNumber,
        },
      });
      razorpayOrderId = rpOrder.id;
      booking.razorpayOrderId = razorpayOrderId;
      await booking.save();
    }

    return NextResponse.json({
      ok: true,
      keyId,
      razorpayOrderId,
      amount: toPaise(booking.servicePrice),
      currency: 'INR',
      bookingNumber: booking.bookingNumber,
      customer: {
        name: booking.customer.name,
        email: booking.customer.email,
        phone: booking.customer.phone,
      },
    });
  } catch (err) {
    console.error('razorpay booking create failed', err);
    return NextResponse.json({ ok: false, reason: 'razorpay-error' }, { status: 502 });
  }
}
