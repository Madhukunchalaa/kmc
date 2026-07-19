import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import Reel from '@/models/Reel';
import { revalidatePath } from 'next/cache';

// GET /api/admin/reels — list all reels sorted by order
export async function GET() {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  await connectMongoose();
  const reels = await Reel.find({}).sort({ order: 1, createdAt: 1 }).lean();
  return NextResponse.json({ ok: true, reels });
}

// PATCH /api/admin/reels — bulk reorder: body = { ids: string[] } (ordered)
export async function PATCH(req: Request) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  await connectMongoose();
  const { ids } = await req.json() as { ids: string[] };
  if (!Array.isArray(ids)) return NextResponse.json({ ok: false, reason: 'ids array required' }, { status: 400 });

  await Promise.all(ids.map((id, i) => Reel.findByIdAndUpdate(id, { order: i })));
  
  // Revalidate home page and public reels API cache
  revalidatePath('/');
  revalidatePath('/api/reels');

  return NextResponse.json({ ok: true });
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

  // Revalidate home page and public reels API cache
  revalidatePath('/');
  revalidatePath('/api/reels');

  return NextResponse.json({ ok: true, reel }, { status: 201 });
}
