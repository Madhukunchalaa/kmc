import '@/lib/mongoDns';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('Missing MONGODB_URI');

declare global {
  var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;
}

const cached = global._mongoose ?? (global._mongoose = { conn: null, promise: null });

export async function connectMongoose(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri!, { bufferCommands: false, dbName: 'krissmaagiic' })
      .then((m) => m);
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
