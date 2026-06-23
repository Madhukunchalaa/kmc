/**
 * Seed the 'reels' collection with the 7 default spiritual reels.
 * Run with:  npx tsx scripts/seed-reels.ts
 */
import 'dotenv/config';
import mongoose from 'mongoose';
import Reel from '../src/models/Reel';

const BASE = 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/videos';

const REELS = [
  {
    title: 'Candle Spell Rituals',
    caption: 'Watch a real candle spell designed to manifest alignment and positivity.',
    src: `${BASE}/Video%202.mp4`,
    image: '/service-candle.png',
    order: 0,
    active: true,
  },
  {
    title: 'Welcome to KrissMaagiic',
    caption: 'Discover healing energy, sacred rituals, and certified authentic crystals.',
    src: `${BASE}/Video%201.mp4`,
    image: '/about-hero.png',
    order: 1,
    active: true,
  },
  {
    title: 'Intuitively Chosen Tarot',
    caption: 'Receive personalized spiritual guidance and clear answers to life questions.',
    src: `${BASE}/Video%203.mp4`,
    image: '/service-tarot.png',
    order: 2,
    active: true,
  },
  {
    title: 'Spell Jars & Energy',
    caption: 'Handcrafted with moonlight-charged crystals, oils, and focused intentions.',
    src: `${BASE}/Video%204.mp4`,
    image: '/service-spelljar.png',
    order: 3,
    active: true,
  },
  {
    title: 'Pure Crystal Energy',
    caption: 'Handpicked and ritually cleansed stones to invite harmony into your home.',
    src: `${BASE}/Video%205.mp4`,
    image: '/crystal-hero.png',
    order: 4,
    active: true,
  },
  {
    title: 'Numerology & Birth Charts',
    caption: 'Understand the hidden patterns and cosmic alignments behind your numbers.',
    src: `${BASE}/Video%206.mp4`,
    image: '/service-numerology.png',
    order: 5,
    active: true,
  },
  {
    title: 'Crystal Packing Process',
    caption: 'Watch how we carefully pack and wrap your crystals with love and positive energy.',
    src: `${BASE}/Video%207.mp4`,
    image: '/crystal-hero.png',
    order: 6,
    active: true,
  },
];

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set in .env');

  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

  // Clear existing reels
  await Reel.deleteMany({});
  console.log('Cleared existing reels');

  // Insert all default reels
  const inserted = await Reel.insertMany(REELS);
  console.log(`Inserted ${inserted.length} reels`);

  await mongoose.disconnect();
  console.log('Done!');
}

main().catch((e) => { console.error(e); process.exit(1); });
