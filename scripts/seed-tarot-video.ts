import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

import mongoose from 'mongoose';
import { Service } from '../src/models/Service';

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI missing');
  await mongoose.connect(uri);
  console.log('✓ connected');

  const data = {
    slug: 'tarot-video',
    title: 'Live Tarot Reading — Video Call',
    tagline: "See every card as it's drawn — face to face",
    desc: 'A live, face-to-face tarot session via WhatsApp Video Call. Witness every card reveal in real time and dive deep into the messages the cards hold for you.',
    image: '/service-tarot.png',
    icon: 'fa-solid fa-video',
    price: 3499,
    usdPrice: 70,
    durationMins: 30,
    bullets: ['Live WhatsApp Video Call', 'See every card drawn in real time', '30 min or 60 min sessions available'],
    tiers: [
      { label: 'Video Call (30 min)', price: 3499, usdPrice: 70 },
      { label: 'Video Call (1 hour)', price: 6999, usdPrice: 140 },
    ],
    active: true,
  };

  const existing = await Service.findOne({ slug: 'tarot-video' });
  if (existing) {
    await Service.updateOne({ slug: 'tarot-video' }, { $set: data });
    console.log('✓ tarot-video service updated');
  } else {
    await Service.create(data);
    console.log('✓ tarot-video service created');
  }

  await mongoose.disconnect();
  console.log('✓ done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
