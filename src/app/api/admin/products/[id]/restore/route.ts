import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export async function POST(_req: Request, ctx: RouteContext<'/api/admin/products/[id]/restore'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  try {
    await connectMongoose();
    await Product.findByIdAndUpdate(id, { isDeleted: false });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
