import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';

export async function PATCH(req: Request, ctx: RouteContext<'/api/admin/users/[id]'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  let body: { active?: boolean };
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  // Role changes are intentionally not supported — admin promotion is done
  // directly in the database only, never from the panel.
  if (typeof body.active !== 'boolean') {
    return NextResponse.json({ ok: false, reason: 'no-update' }, { status: 400 });
  }
  try {
    await connectMongoose();
    const updates: Record<string, unknown> = { active: body.active };
    const doc = await User.findByIdAndUpdate(id, updates);
    if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
