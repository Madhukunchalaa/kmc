import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import Reel from '@/models/Reel';

export const dynamic = 'force-dynamic';

// GET /api/reels — public route used by the homepage SpiritualReels component
export async function GET(_req: Request) {
  try {
    await connectMongoose();
    const reels = await Reel.find({ active: true }).sort({ order: 1, createdAt: 1 }).lean();
    return NextResponse.json(
      { ok: true, reels },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        },
      }
    );
  } catch (err) {
    console.error('GET /api/reels error:', err);
    return NextResponse.json(
      { ok: false, reels: [] },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        },
      }
    );
  }
}
