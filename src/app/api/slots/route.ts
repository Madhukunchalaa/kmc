import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { DEFAULT_SLOTS } from '@/lib/slots';

// GET /api/slots?serviceId=...&date=YYYY-MM-DD
export async function GET(req: Request) {
  const url = new URL(req.url);
  const serviceId = url.searchParams.get('serviceId');
  const date = url.searchParams.get('date');
  if (!serviceId || !date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ ok: false, reason: 'invalid-params' }, { status: 400 });
  }
  await connectMongoose();
  const booked = await Booking.find(
    { service: serviceId, date, status: { $in: ['pending', 'approved'] } },
    { timeSlot: 1 },
  ).lean();
  const takenSet = new Set(booked.map((b) => b.timeSlot));

  const slots = DEFAULT_SLOTS.map((t) => ({ time: t, available: !takenSet.has(t) }));
  return NextResponse.json({ ok: true, date, slots });
}
