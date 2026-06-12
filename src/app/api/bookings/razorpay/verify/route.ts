import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { isRazorpayConfigured, verifyPaymentSignature } from '@/lib/razorpay';
import { Notification } from '@/models/Notification';
import { sendEmail, bookingReceivedEmail } from '@/lib/email';
import { z } from 'zod';

const verifySchema = z.object({
  bookingId: z.string().min(1, "Booking ID is required"),
  razorpay_order_id: z.string().min(1, "Razorpay Order ID is required"),
  razorpay_payment_id: z.string().min(1, "Razorpay Payment ID is required"),
  razorpay_signature: z.string().min(1, "Razorpay Signature is required"),
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

  const parsed = verifySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: 'invalid-input' }, { status: 400 });
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

  // Send customer notifications
  Notification.create({
    user: session.user.id,
    type: 'booking',
    title: `Booking ${booking.bookingNumber} confirmed`,
    message: `Your payment was successful. Your ${booking.serviceTitle} session on ${booking.date} at ${booking.timeSlot} is booked. Kriss will reach out to you via WhatsApp.`,
    link: `/dashboard/bookings/${booking._id}`,
  }).catch(() => {});

  sendEmail({
    ...bookingReceivedEmail(booking.customer.name, booking.serviceTitle, booking.date, booking.timeSlot),
    to: booking.customer.email,
  }).catch(() => {});

  // Notify admin
  // Assuming admin reads notifications via some admin notification model or email
  // Let's send an email to the admin.
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@krissmaagiic.com';
  sendEmail({
    to: adminEmail,
    subject: `New Paid Booking: ${booking.bookingNumber}`,
    html: `
      <h2>New Booking Received!</h2>
      <p>A customer has successfully booked and paid for a service.</p>
      <ul>
        <li><strong>Service:</strong> ${booking.serviceTitle}</li>
        <li><strong>Date:</strong> ${booking.date}</li>
        <li><strong>Time:</strong> ${booking.timeSlot}</li>
        <li><strong>Customer Name:</strong> ${booking.customer.name}</li>
        <li><strong>Customer Phone:</strong> ${booking.customer.phone}</li>
        <li><strong>Customer Email:</strong> ${booking.customer.email}</li>
      </ul>
      <p>Please reach out to the customer via WhatsApp to coordinate.</p>
    `
  }).catch(() => {});

  return NextResponse.json({
    ok: true,
    bookingNumber: booking.bookingNumber,
    bookingId: String(booking._id),
  });
}
