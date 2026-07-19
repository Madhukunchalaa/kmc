import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import Reel from '@/models/Reel';

const BASE = 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/videos';

const DEFAULT_REELS = [
  { title: 'Candle Spell Rituals',      caption: 'Watch a real candle spell designed to manifest alignment and positivity.',                          src: `${BASE}/Video%202.mp4`, image: '/service-candle.png',     order: 0 },
  { title: 'Welcome to KrissMaagiic',   caption: 'Discover healing energy, sacred rituals, and certified authentic crystals.',                        src: `${BASE}/Video%201.mp4`, image: '/about-hero.png',         order: 1 },
  { title: 'Intuitively Chosen Tarot',  caption: 'Receive personalized spiritual guidance and clear answers to life questions.',                       src: `${BASE}/Video%203.mp4`, image: '/service-tarot.png',      order: 2 },
  { title: 'Spell Jars & Energy',       caption: 'Handcrafted with moonlight-charged crystals, oils, and focused intentions.',                         src: `${BASE}/Video%204.mp4`, image: '/service-spelljar.png',   order: 3 },
  { title: 'Pure Crystal Energy',       caption: 'Handpicked and ritually cleansed stones to invite harmony into your home.',                          src: `${BASE}/Video%205.mp4`, image: '/crystal-hero.png',       order: 4 },
  { title: 'Numerology & Birth Charts', caption: 'Understand the hidden patterns and cosmic alignments behind your numbers.',                          src: `${BASE}/Video%206.mp4`, image: '/service-numerology.png', order: 5 },
  { title: 'Crystal Packing Process',   caption: 'Watch how we carefully pack and wrap your crystals with love and positive energy.',                   src: `${BASE}/Video%207.mp4`, image: '/crystal-hero.png',       order: 6 },
];

// POST /api/admin/seed-reels  — one-time seeder (admin-only)
export async function POST() {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  await connectMongoose();

  const existing = await Reel.countDocuments();
  if (existing > 0) {
    return NextResponse.json({ ok: false, reason: `Reels already seeded (${existing} found). Delete them first from the admin panel if you want to re-seed.` });
  }

  const inserted = await Reel.insertMany(
    DEFAULT_REELS.map((r) => ({ ...r, active: true }))
  );

  return NextResponse.json({ ok: true, inserted: inserted.length });
}
