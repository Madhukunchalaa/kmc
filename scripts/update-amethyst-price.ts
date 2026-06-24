import { config as loadEnv } from 'dotenv';
loadEnv({ path: 'production.env' });
loadEnv({ path: '.env.local' });
loadEnv();

import mongoose from 'mongoose';
import { Product } from '../src/models/Product';

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  const slug = 'amethyst-bracelet-design';
  const before = await Product.findOne({ slug }).lean() as any;
  if (!before) { console.log('NOT FOUND'); process.exit(1); }
  console.log(`BEFORE  ${slug}: price=${before.price} usd=${before.usdPrice} orig=${before.originalPrice} origUsd=${before.originalUsdPrice}`);

  await Product.findByIdAndUpdate(before._id, {
    price: 1750,
    usdPrice: 35,
    originalPrice: 2100,
    originalUsdPrice: 42,
  });

  const after = await Product.findOne({ slug }).lean() as any;
  console.log(`AFTER   ${slug}: price=${after.price} usd=${after.usdPrice} orig=${after.originalPrice} origUsd=${after.originalUsdPrice}`);
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
