/**
 * Non-destructive sync: pushes src/data/products.ts -> MongoDB.
 * - Updates existing products (matched by slug) with latest content.
 * - Inserts products that don't exist yet.
 * - Does NOT delete anything; preserves stock / active / isDeleted on existing docs.
 *
 * Run with:  npx tsx scripts/sync-products.ts
 */
import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import '../src/lib/mongoDns';
import mongoose from 'mongoose';
import { products as productSeed } from '../src/data/products';

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI missing');
  await mongoose.connect(uri);
  console.log('✓ connected');

  const col = mongoose.connection.db!.collection('products');

  const existingSlugs = new Set(
    (await col.find({}).project({ slug: 1 }).toArray()).map((d) => d.slug),
  );

  const now = new Date();
  const ops = productSeed.map((p) => ({
    updateOne: {
      filter: { slug: p.id },
      update: {
        $set: {
          name: p.name,
          category: p.category,
          subcategory: p.subcategory,
          price: p.price,
          originalPrice: p.originalPrice ?? null,
          image: p.image,
          images: p.images ?? [],
          usdPrice: p.usdPrice ?? 0,
          originalUsdPrice: p.originalUsdPrice ?? null,
          badge: p.badge,
          desc: p.desc,
          longDesc: p.longDesc ?? '',
          chakras: p.chakras,
          variants: p.variants ?? [],
          updatedAt: now,
        },
        $setOnInsert: {
          slug: p.id,
          stock: 99,
          active: true,
          isDeleted: false,
          createdAt: now,
          __v: 0,
        },
      },
      upsert: true,
    },
  }));

  const res = await col.bulkWrite(ops, { ordered: false });
  const inserted = res.upsertedCount;
  const matched = res.matchedCount;
  const modified = res.modifiedCount;

  console.log(`✓ sync complete`);
  console.log(`  matched (already existed): ${matched}`);
  console.log(`  modified (content updated): ${modified}`);
  console.log(`  inserted (new products):   ${inserted}`);

  // Report which ones were newly inserted
  const newOnes = productSeed.filter((p) => !existingSlugs.has(p.id)).map((p) => p.id);
  if (newOnes.length) {
    console.log(`  new product slugs:`);
    newOnes.forEach((s) => console.log(`    + ${s}`));
  }

  await mongoose.disconnect();
  console.log('✓ done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
