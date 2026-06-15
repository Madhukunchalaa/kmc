import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import Testimonial from '@/models/Testimonial';
import { testimonialInputSchema, zodErrorMessage } from '@/lib/validators';

export async function POST(req: Request) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const parsed = testimonialInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  try {
    await connectMongoose();
    const doc = await Testimonial.create(parsed.data);
    return NextResponse.json({ ok: true, id: String(doc._id) });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
