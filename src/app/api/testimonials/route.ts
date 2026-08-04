import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import Testimonial from '@/models/Testimonial';
import { testimonialInputSchema, zodErrorMessage } from '@/lib/validators';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectMongoose();
    const items = await Testimonial.find({ isDeleted: { $ne: true } }).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ ok: true, testimonials: items });
  } catch (err) {
    console.error('Failed to get testimonials', err);
    return NextResponse.json({ ok: false, testimonials: [], reason: 'server-error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const name = body.name?.trim() || '';
  const text = body.text?.trim() || '';
  const rating = Number(body.rating);
  const role = body.role?.trim() || 'Client';
  const avatar = name.charAt(0).toUpperCase() || 'C';

  const parsed = testimonialInputSchema.safeParse({ name, text, rating, role, avatar });
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  try {
    await connectMongoose();
    const doc = await Testimonial.create(parsed.data);
    return NextResponse.json({ ok: true, id: String(doc._id) });
  } catch (err) {
    console.error('Failed to create testimonial:', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
