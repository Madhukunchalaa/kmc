import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import Reel from '@/models/Reel';

// GET /api/admin/reels — list all reels sorted by order
export async function GET() {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  await connectMongoose();
  const reels = await Reel.find({}).sort({ order: 1, createdAt: 1 }).lean();
  return NextResponse.json({ ok: true, reels });
}

// POST /api/admin/reels — create a new reel
export async function POST(req: Request) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  await connectMongoose();
  const body = await req.json();
  const { title, caption, src, image, order, active } = body;

  if (!title || !src) {
    return NextResponse.json({ ok: false, reason: 'title and src are required' }, { status: 400 });
  }

  const count = await Reel.countDocuments();
  const reel = await Reel.create({
    title,
    caption: caption ?? '',
    src,
    image: image ?? '',
    order: order ?? count,
    active: active !== false,
  });

  return NextResponse.json({ ok: true, reel }, { status: 201 });
}
