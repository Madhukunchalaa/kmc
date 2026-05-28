import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { Service } from '@/models/Service';
import { DEFAULT_SLOTS } from '@/lib/slots';

// GET /api/slots?serviceId=...&date=YYYY-MM-DD
// serviceId can be a Mongo ObjectId OR a slug like "tarot".
export async function GET(req: Request) {
  const url = new URL(req.url);
  const serviceId = url.searchParams.get('serviceId');
  const date = url.searchParams.get('date');
  if (!serviceId || !date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ ok: false, reason: 'invalid-params' }, { status: 400 });
  }
  await connectMongoose();

  const isObjectId = /^[a-f0-9]{24}$/i.test(serviceId);
  let resolvedId = serviceId;
  if (!isObjectId) {
    const svc = await Service.findOne({ slug: serviceId }, { _id: 1 }).lean();
    if (!svc) {
      // Service doesn't exist yet — return all slots as available rather than 404
      return NextResponse.json({
        ok: true,
        date,
        slots: DEFAULT_SLOTS.map((t) => ({ time: t, available: true })),
      });
    }
    resolvedId = String(svc._id);
  }

  const booked = await Booking.find(
    { service: resolvedId, date, status: { $in: ['pending', 'approved'] } },
    { timeSlot: 1 },
  ).lean();
  const takenSet = new Set(booked.map((b) => b.timeSlot));

  const slots = DEFAULT_SLOTS.map((t) => ({ time: t, available: !takenSet.has(t) }));
  return NextResponse.json({ ok: true, date, slots });
}
