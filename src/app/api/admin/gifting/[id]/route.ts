import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import GiftingRecipient from '@/models/GiftingRecipient';

export const dynamic = 'force-dynamic';

export async function PUT(req: Request, ctx: RouteContext<'/api/admin/gifting/[id]'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  try {
    const body = await req.json();
    await connectMongoose();
    const item = await GiftingRecipient.findByIdAndUpdate(id, body, { new: true });
    if (!item) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    return NextResponse.json({ ok: true, item: JSON.parse(JSON.stringify(item)) });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'server-error';
    return NextResponse.json({ ok: false, reason: msg }, { status: 400 });
  }
}

export async function DELETE(_req: Request, ctx: RouteContext<'/api/admin/gifting/[id]'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  await connectMongoose();
  await GiftingRecipient.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
