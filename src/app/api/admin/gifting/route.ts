import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import GiftingRecipient from '@/models/GiftingRecipient';

export const dynamic = 'force-dynamic';

export async function GET() {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  await connectMongoose();
  const items = await GiftingRecipient.find({}).sort({ order: 1, createdAt: 1 }).lean();
  return NextResponse.json({ ok: true, items });
}

export async function POST(req: Request) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  try {
    const body = await req.json();
    await connectMongoose();
    const count = await GiftingRecipient.countDocuments();
    const item = await GiftingRecipient.create({ ...body, order: body.order ?? count });
    return NextResponse.json({ ok: true, item: JSON.parse(JSON.stringify(item)) }, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'server-error';
    return NextResponse.json({ ok: false, reason: msg }, { status: 400 });
  }
}
