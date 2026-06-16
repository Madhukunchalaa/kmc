import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import Blog from '@/models/Blog';
import { blogInputSchema, zodErrorMessage } from '@/lib/validators';

export async function PUT(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const parsed = blogInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  try {
    await connectMongoose();
    // Check slug collision
    const existing = await Blog.findOne({ slug: parsed.data.slug, _id: { $ne: params.id } });
    if (existing) return NextResponse.json({ ok: false, reason: 'slug-exists' }, { status: 409 });

    const doc = await Blog.findByIdAndUpdate(params.id, parsed.data, { new: true });
    if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  
  try {
    await connectMongoose();
    // Soft-delete: mark isDeleted and unpublish so it can be restored
    const doc = await Blog.findByIdAndUpdate(params.id, { isDeleted: true, published: false }, { new: true });
    if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
