import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

import mongoose from 'mongoose';
import { Product } from '../src/models/Product';
import fs from 'fs';

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Error: MONGODB_URI missing');
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log('✓ Connected to MongoDB');

  const products = await Product.find({ active: true });
  console.log(`Loaded ${products.length} active products from database.`);
  
  const formatted = products.map(p => ({
    id: p._id,
    slug: p.slug,
    name: p.name,
    category: p.category,
    subcategory: p.subcategory,
    price: p.price,
    image: p.image
  }));

  fs.writeFileSync('scripts/db-products-dump.json', JSON.stringify(formatted, null, 2), 'utf-8');
  console.log('Saved dump to scripts/db-products-dump.json');

  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
