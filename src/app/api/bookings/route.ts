import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { Service } from '@/models/Service';
import { Notification } from '@/models/Notification';
import { createBookingSchema, zodErrorMessage } from '@/lib/validators';
import { sendEmail, bookingReceivedEmail } from '@/lib/email';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });

  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = createBookingSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });

  const { serviceId, date, timeSlot, notes, tierLabel, tierPrice, customer } = parsed.data;

  await connectMongoose();
  // Accept either ObjectId or slug
  const isObjectId = /^[a-f0-9]{24}$/i.test(serviceId);
  const service = await (isObjectId
    ? Service.findById(serviceId).lean()
    : Service.findOne({ slug: serviceId }).lean());
  if (!service) return NextResponse.json({ ok: false, reason: 'service-not-found' }, { status: 404 });

  // Conflict check (use the resolved service _id, not the slug).
  const clash = await Booking.findOne({
    service: service._id,
    date,
    timeSlot,
    status: { $in: ['pending', 'approved'] },
  });
  if (clash) return NextResponse.json({ ok: false, reason: 'slot-already-taken' }, { status: 409 });

  const bookingNumber = 'BKG-' + Date.now().toString(36).toUpperCase();
  const finalTitle = tierLabel ? `${service.title} (${tierLabel})` : service.title;
  const finalPrice = typeof tierPrice === 'number' ? tierPrice : service.price;
  const booking = await Booking.create({
    bookingNumber,
    user: session.user.id,
    service: service._id,
    serviceTitle: finalTitle,
    servicePrice: finalPrice,
    date,
    timeSlot,
    notes: notes || '',
    customer,
    status: 'pending',
  });

  Notification.create({
    user: session.user.id,
    type: 'booking',
    title: `Booking ${bookingNumber} received`,
    message: `Your ${service.title} session on ${date} at ${timeSlot} is awaiting confirmation.`,
    link: `/dashboard/bookings/${booking._id}`,
  }).catch(() => {});

  sendEmail({
    ...bookingReceivedEmail(customer.name, service.title, date, timeSlot),
    to: customer.email,
  }).catch(() => {});

  return NextResponse.json({ ok: true, bookingNumber, bookingId: String(booking._id) });
}
