/**
 * Seed the hardcoded SERVICE_TIERS into each Service document's `tiers` field
 * so they show up — and become editable — in the admin panel.
 *
 * Non-destructive: only fills `tiers` when a service currently has none.
 * Pass --force to overwrite existing tiers from the hardcoded source.
 *
 * Run:  npx tsx scripts/seed-service-tiers.ts          (fill empties only)
 *       npx tsx scripts/seed-service-tiers.ts --force  (reset all from code)
 */
import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

import mongoose from 'mongoose';

const FORCE = process.argv.includes('--force');

// Mirror of SERVICE_TIERS in src/lib/catalog.ts (inlined to avoid importing the
// mongoose wrapper before dotenv loads). One-time seed → DB becomes source of truth.
const SERVICE_TIERS: Record<string, { label: string; price: number; usdPrice: number }[]> = {
  tarot: [
    { label: 'SINGLE READING (YES/NO)', price: 199, usdPrice: 8 },
    { label: 'SINGLE DETAILED READING', price: 299, usdPrice: 10 },
    { label: 'SITUATIONAL READINGS', price: 399, usdPrice: 50 },
    { label: 'MARRIAGE ANALYSIS', price: 499, usdPrice: 60 },
    { label: 'RELATIONSHIP READINGS', price: 599, usdPrice: 60 },
    { label: 'SET OF 3 QUESTIONS', price: 666, usdPrice: 30 },
    { label: 'SET OF 5 QUESTIONS', price: 999, usdPrice: 40 },
    { label: 'FUTURE SPOUSE READING', price: 999, usdPrice: 40 },
    { label: 'ANNUAL READING (WHOLE YEAR)', price: 1299, usdPrice: 100 },
    { label: 'Audio Call (30 min)', price: 1499, usdPrice: 30 },
    { label: 'Audio Call (1 hour)', price: 2999, usdPrice: 60 },
    { label: 'Audio Call (2 hours - only one slot)', price: 5999, usdPrice: 120 },
  ],
  candle: [
    { label: 'Travel Safety / Safe Journeys', price: 1800, usdPrice: 35 },
    { label: 'Psychic / Intuition / Spiritual', price: 2200, usdPrice: 40 },
    { label: 'Luck / Job / Career / Promotion', price: 2900, usdPrice: 45 },
    { label: 'Reconciliation / "Bring Back"', price: 3200, usdPrice: 50 },
    { label: 'Abundance / Wealth / Money / Prosperity', price: 3600, usdPrice: 55 },
    { label: 'Remove Obstacles (Financial/Relationship)', price: 3800, usdPrice: 60 },
    { label: 'Bindings (Fidelity / Loyalty)', price: 4200, usdPrice: 65 },
    { label: 'Fertility & Family Spells', price: 4200, usdPrice: 65 },
    { label: 'Success / Grand Success', price: 4500, usdPrice: 70 },
    { label: 'Love / Attraction / Soulmate', price: 4800, usdPrice: 70 },
    { label: 'Protection (Personal/Home/Business)', price: 5200, usdPrice: 75 },
    { label: 'Cleansing / Purification / House Blessing', price: 6300, usdPrice: 75 },
  ],
  spelljar: [
    { label: 'Mini Spell Jar', price: 2200, usdPrice: 45 },
    { label: 'Medium Spell Jar (100ml)', price: 4800, usdPrice: 95 },
    { label: 'Large Spell Jar (500ml)', price: 7300, usdPrice: 145 },
  ],
  numerology: [
    { label: 'Vehicle Number Numerology', price: 1999, usdPrice: 30 },
    { label: 'Date of Birth Numerology', price: 2499, usdPrice: 45 },
    { label: 'Mobile Number Numerology', price: 3999, usdPrice: 55 },
    { label: 'Name Numerology', price: 4999, usdPrice: 75 },
    { label: 'Any Other Specific Numerology', price: 4999, usdPrice: 85 },
    { label: 'Business / Brand Numerology', price: 9999, usdPrice: 150 },
  ],
};

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI missing');
  await mongoose.connect(uri);
  console.log('✓ connected' + (FORCE ? ' (FORCE mode)' : ''));

  const col = mongoose.connection.db!.collection('services');
  const services = await col.find({ isDeleted: { $ne: true } }).toArray();
  console.log(`found ${services.length} services\n`);

  let updated = 0;
  for (const svc of services) {
    const tiers = SERVICE_TIERS[svc.slug];
    if (!tiers) {
      console.log(`  – ${svc.slug}: no hardcoded tiers, skipped`);
      continue;
    }
    const hasTiers = Array.isArray(svc.tiers) && svc.tiers.length > 0;
    if (hasTiers && !FORCE) {
      console.log(`  – ${svc.slug}: already has ${svc.tiers.length} tiers, kept (use --force to reset)`);
      continue;
    }
    await col.updateOne(
      { _id: svc._id },
      { $set: { tiers, updatedAt: new Date() } },
    );
    updated++;
    console.log(`  ✓ ${svc.slug}: seeded ${tiers.length} tiers`);
  }

  console.log(`\n✓ done — ${updated} service(s) updated`);
  await mongoose.disconnect();
}

main().catch((err) => { console.error(err); process.exit(1); });
