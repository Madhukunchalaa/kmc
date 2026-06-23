import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import Reel from '@/models/Reel';

type Ctx = { params: Promise<{ id: string }> };

// PUT /api/admin/reels/[id] — update a reel
export async function PUT(req: Request, ctx: Ctx) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  await connectMongoose();
  const { id } = await ctx.params;
  const body = await req.json();

  const reel = await Reel.findByIdAndUpdate(id, body, { new: true });
  if (!reel) return NextResponse.json({ ok: false, reason: 'Not found' }, { status: 404 });

  return NextResponse.json({ ok: true, reel });
}

// DELETE /api/admin/reels/[id] — delete a reel
export async function DELETE(_req: Request, ctx: Ctx) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  await connectMongoose();
  const { id } = await ctx.params;

  const reel = await Reel.findByIdAndDelete(id);
  if (!reel) return NextResponse.json({ ok: false, reason: 'Not found' }, { status: 404 });

  return NextResponse.json({ ok: true });
}
