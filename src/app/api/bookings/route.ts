import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { Service } from '@/models/Service';
import { createBookingSchema, zodErrorMessage } from '@/lib/validators';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });

  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = createBookingSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });

  const { serviceId, date = 'N/A', timeSlot = 'N/A', question, intention, dob, notes, tierLabel, tierPrice, customer } = parsed.data;

  await connectMongoose();
  // Accept either ObjectId or slug
  const isObjectId = /^[a-f0-9]{24}$/i.test(serviceId);
  const service = await (isObjectId
    ? Service.findOne({ _id: serviceId, isDeleted: { $ne: true } }).lean()
    : Service.findOne({ slug: serviceId, isDeleted: { $ne: true } }).lean());
  if (!service) return NextResponse.json({ ok: false, reason: 'service-not-found' }, { status: 404 });

  // Conflict check only if a specific time is requested.
  if (date !== 'N/A' && timeSlot !== 'N/A') {
    const clash = await Booking.findOne({
      service: service._id,
      date,
      timeSlot,
      status: { $in: ['pending', 'approved'] },
    });
    if (clash) return NextResponse.json({ ok: false, reason: 'slot-already-taken' }, { status: 409 });
  }

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
    question: question || '',
    intention: intention || '',
    dob: dob || '',
    notes: notes || '',
    customer,
    status: 'pending',
    paymentStatus: 'unpaid',
  });


  return NextResponse.json({ ok: true, bookingNumber, bookingId: String(booking._id) });
}
