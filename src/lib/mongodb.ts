import '@/lib/mongoDns';
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'krissmaagiic';

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable');
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Don't cache a rejected connection promise — if the first connect fails
// (e.g. transient SRV/DNS ECONNREFUSED), clear it so the next call retries
// instead of re-throwing the same poisoned promise forever.
function connect(): Promise<MongoClient> {
  const p = new MongoClient(uri!).connect();
  p.catch(() => {
    if (global._mongoClientPromise === p) global._mongoClientPromise = undefined;
  });
  return p;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  clientPromise = global._mongoClientPromise ??= connect();
} else {
  clientPromise = connect();
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(dbName);
}

export default clientPromise;
