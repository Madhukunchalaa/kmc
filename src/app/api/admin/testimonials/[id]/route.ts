import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import Testimonial from '@/models/Testimonial';
import { testimonialInputSchema, zodErrorMessage } from '@/lib/validators';

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, props: Ctx) {
  const params = await props.params;
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }

  const parsed = testimonialInputSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });

  try {
    await connectMongoose();
    const doc = await Testimonial.findByIdAndUpdate(params.id, parsed.data, { new: true });
    if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}

// Soft delete — moves to trash
export async function DELETE(req: Request, props: Ctx) {
  const params = await props.params;
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  try {
    await connectMongoose();
    const doc = await Testimonial.findByIdAndUpdate(params.id, { isDeleted: true }, { new: true });
    if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}

// Restore from trash OR permanent delete (action: 'restore' | 'delete')
export async function PATCH(req: Request, props: Ctx) {
  const params = await props.params;
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  let body: { action: string };
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }

  try {
    await connectMongoose();
    if (body.action === 'restore') {
      const doc = await Testimonial.findByIdAndUpdate(params.id, { isDeleted: false }, { new: true });
      if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
      return NextResponse.json({ ok: true });
    }
    if (body.action === 'delete') {
      const doc = await Testimonial.findByIdAndDelete(params.id);
      if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, reason: 'invalid action' }, { status: 400 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
