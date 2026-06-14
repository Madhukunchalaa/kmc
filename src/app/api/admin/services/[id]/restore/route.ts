import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Service } from '@/models/Service';

export async function POST(_req: Request, ctx: RouteContext<'/api/admin/services/[id]/restore'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  try {
    await connectMongoose();
    await Service.findByIdAndUpdate(id, { isDeleted: false });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
