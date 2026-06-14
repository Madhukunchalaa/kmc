import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import { productInputSchema, zodErrorMessage } from '@/lib/validators';

export async function PUT(req: Request, ctx: RouteContext<'/api/admin/products/[id]'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = productInputSchema.partial().safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  try {
    await connectMongoose();
    const doc = await Product.findByIdAndUpdate(id, parsed.data, { new: true });
    if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, ctx: RouteContext<'/api/admin/products/[id]'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  try {
    await connectMongoose();
    await Product.findByIdAndUpdate(id, { isDeleted: true });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
