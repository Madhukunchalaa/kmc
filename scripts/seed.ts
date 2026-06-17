import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv(); // fall through to .env if .env.local missed anything

import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { User } from '../src/models/User';
import { Product } from '../src/models/Product';
import { Service } from '../src/models/Service';
import Testimonial from '../src/models/Testimonial';
import { products as productSeed } from '../src/data/products';
import { testimonials as testimonialSeed } from '../src/data/testimonials';

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI missing');
  await mongoose.connect(uri);
  console.log('✓ connected');

  // --- Admin user ---
  const adminEmail = (process.env.SEED_ADMIN_EMAIL || 'admin@krissmaagiic.com').toLowerCase();
  const adminPw = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe@2026';
  const adminName = process.env.SEED_ADMIN_NAME || 'Kriss Admin';
  let admin = await User.findOne({ email: adminEmail });
  if (!admin) {
    admin = await User.create({
      name: adminName,
      email: adminEmail,
      passwordHash: await bcrypt.hash(adminPw, 12),
      role: 'admin',
      active: true,
    });
    console.log(`✓ admin user created — ${adminEmail} / ${adminPw}`);
  } else {
    if (admin.role !== 'admin') {
      admin.role = 'admin';
      await admin.save();
      console.log(`✓ promoted ${adminEmail} to admin`);
    } else {
      console.log(`• admin user already exists — ${adminEmail}`);
    }
  }

  // --- Products ---
  await Product.deleteMany({});
  console.log('✓ cleared existing products');
  
  for (const p of productSeed) {
    const existing = await Product.findOne({ slug: p.id });
    const payload = {
      slug: p.id,
      name: p.name,
      category: p.category,
      subcategory: p.subcategory,
      price: p.price,
      originalPrice: p.originalPrice ?? null,
      image: p.image,
      badge: p.badge,
      desc: p.desc,
      longDesc: p.longDesc ?? '',
      chakras: p.chakras,
      variants: p.variants,
      stock: 99,
      active: true,
    };
    if (existing) {
      await Product.updateOne({ slug: p.id }, { $set: payload });
    } else {
      await Product.create(payload);
    }
  }
  console.log(`✓ products seeded (${productSeed.length})`);

  // --- Services ---
  const services = [
    {
      slug: 'tarot',
      title: 'Tarot Reading — Voice Chat & Audio Call',
      tagline: "Clarity for the questions you can't answer alone",
      desc: 'Delivered via WhatsApp voice notes or live audio calls. Receive detailed, highly personalized responses to your questions and immediate spiritual guidance.',
      image: '/service-tarot.png',
      icon: 'fa-solid fa-headphones',
      price: 199,
      durationMins: 30,
      bullets: ['Voice notes or live 1-on-1 audio', 'Audio recorded directly by the founder', 'Ask unlimited questions during live sessions'],
      active: true,
    },
    {
      slug: 'candle',
      title: 'Bespoke Spell Casting Ritual',
      tagline: 'Fire magic, lit with intention',
      desc: 'Each ritual is uniquely crafted around your intention using candles, crystals, herbs, and focused energy work. Performed personally by our founder, with ritual updates and photo or video shared upon completion.',
      image: '/service-candle.png',
      icon: 'fa-solid fa-fire-flame-curved',
      price: 1800,
      durationMins: 45,
      bullets: ['Custom-dressed candle', 'Spell performed on your behalf', 'Burn photo + ritual notes sent'],
      active: true,
    },
    {
      slug: 'spelljar',
      title: 'Spell Jars',
      tagline: 'A sealed wish, alive in your home',
      desc: 'Custom spell jars created with herbs, crystals, oils and your written intention.',
      image: '/service-spelljar.png',
      icon: 'fa-solid fa-jar',
      price: 2200,
      durationMins: 60,
      bullets: ['Tailored to your intention', 'Includes care + activation guide', 'Mini, Medium, and Large sizes'],
      active: true,
    },
    {
      slug: 'numerology',
      title: 'Numerology Services',
      tagline: 'Every session sent as PDF + WhatsApp explanation',
      desc: 'Personally prepared and customized readings for your name, business, brand, or birth chart. Delivered digitally via WhatsApp or email within 3–5 business days.',
      image: '/service-numerology.png',
      icon: 'fa-solid fa-infinity',
      price: 1999,
      durationMins: 40,
      bullets: ['Detailed PDF chart report', '5-10 mins WhatsApp explanation', 'Tailored crystal recommendations'],
      active: true,
    },
    {
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
    },
  ];
  for (const s of services) {
    const existing = await Service.findOne({ slug: s.slug });
    if (existing) {
      await Service.updateOne({ slug: s.slug }, { $set: s });
    } else {
      await Service.create(s);
    }
  }
  console.log(`✓ services seeded (${services.length})`);

  // --- Testimonials ---
  const tCount = await Testimonial.countDocuments();
  if (tCount === 0) {
    for (const t of testimonialSeed) {
      await Testimonial.create(t);
    }
    console.log(`✓ testimonials seeded (${testimonialSeed.length})`);
  } else {
    console.log(`• testimonials collection already populated (${tCount} items)`);
  }

  await mongoose.disconnect();
  console.log('✓ done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
