import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

import mongoose from 'mongoose';
import { Product } from '../src/models/Product';

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Error: MONGODB_URI missing');
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log('✓ Connected to MongoDB');

  const products = await Product.find({ active: true });
  console.log(`Loaded ${products.length} active products from database.\n`);

  for (const p of products) {
    console.log(`- "${p.name}" (slug: ${p.slug}):`);
    console.log(`  Image Path: "${p.image}"`);
  }

  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
