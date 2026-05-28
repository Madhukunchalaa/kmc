import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv(); // fall through to .env if .env.local missed anything

import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { User } from '../src/models/User';
import { Product } from '../src/models/Product';
import { Service } from '../src/models/Service';
import { products as productSeed } from '../src/data/products';

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
      title: 'Tarot Reading',
      tagline: "Clarity for the questions you can't answer alone",
      desc: 'A personalised tarot session with Kriss to receive guidance on love, career, relationships and life path.',
      image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Tarrot-Reading.webp',
      icon: 'fa-solid fa-star-and-crescent',
      price: 1100,
      durationMins: 30,
      bullets: ['One major life-area focus', 'Live audio/video session', 'Written summary shared after'],
      active: true,
    },
    {
      slug: 'candle',
      title: 'Candle Spell Session',
      tagline: 'Fire magic, lit with intention',
      desc: 'Harness the power of fire magic with ritually crafted candle spells tailored to your intention.',
      image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Candle.webp',
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
      image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Spell-Jar.webp',
      icon: 'fa-solid fa-jar',
      price: 1400,
      durationMins: 60,
      bullets: ['Tailored to your intention', 'Includes care + activation guide', 'Shipped pan-India'],
      active: true,
    },
    {
      slug: 'numerology',
      title: 'Numerology Reading',
      tagline: 'The blueprint hidden in your name and birth date',
      desc: 'Unlock the patterns of your life-path number, destiny number and personal year.',
      image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Numerology.webp',
      icon: 'fa-solid fa-infinity',
      price: 1200,
      durationMins: 40,
      bullets: ['Detailed numerology chart', 'Personal year forecast', 'Recommended crystals for the year'],
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

  await mongoose.disconnect();
  console.log('✓ done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
