import '@/lib/mongoDns';
import mongoose from 'mongoose';
import { Service } from '@/models/Service';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('Missing MONGODB_URI');

declare global {
  var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;
}

const cached = global._mongoose ?? (global._mongoose = { conn: null, promise: null });

async function syncMissingTiers() {
  try {
    const tarot = await Service.findOne({ slug: 'tarot', isDeleted: { $ne: true } });
    if (tarot) {
      const hasYesNo = tarot.tiers.some((t) => t.label.toUpperCase() === 'SINGLE READING (YES/NO)');
      const hasDetailed = tarot.tiers.some((t) => t.label.toUpperCase() === 'SINGLE DETAILED READING');
      
      let updated = false;
      const newTiers = [...tarot.tiers];
      
      if (!hasDetailed) {
        newTiers.unshift({ label: 'SINGLE DETAILED READING', price: 299, usdPrice: 10 });
        updated = true;
      }
      if (!hasYesNo) {
        newTiers.unshift({ label: 'SINGLE READING (YES/NO)', price: 199, usdPrice: 8 });
        updated = true;
      }
      
      if (updated) {
        tarot.tiers = newTiers;
        tarot.markModified('tiers');
        await tarot.save();
        console.log('✓ Synced missing tarot tiers to database');
      }
    }
  } catch (err) {
    console.error('Error syncing missing tarot tiers:', err);
  }
}

export async function connectMongoose(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri!, { bufferCommands: false, dbName: 'krissmaagiic' })
      .then(async (m) => {
        await syncMissingTiers();
        return m;
      });
  }
  try {
    cached.conn = await cached.promise;
  } catch (err) {
    // Don't keep a rejected promise cached — let the next call retry.
    cached.promise = null;
    throw err;
  }
  return cached.conn;
}
