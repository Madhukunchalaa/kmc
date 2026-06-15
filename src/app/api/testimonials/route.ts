import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import Testimonial from '@/models/Testimonial';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectMongoose();
    const items = await Testimonial.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ ok: true, testimonials: items });
  } catch (err) {
    console.error('Failed to get testimonials', err);
    return NextResponse.json({ ok: false, testimonials: [], reason: 'server-error' }, { status: 500 });
  }
}
