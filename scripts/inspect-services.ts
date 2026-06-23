import dotenv from 'dotenv';
import path from 'path';

// Load env before importing mongoose modules
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function run() {
  const { connectMongoose } = await import('../src/lib/mongoose');
  const { Service } = await import('../src/models/Service');

  await connectMongoose();
  const services = await Service.find().lean();
  console.log('Total services found:', services.length);
  for (const s of services) {
    console.log(`- ID: ${s._id}, Title: ${s.title}, Slug: ${s.slug}`);
    console.log('  Tiers:', JSON.stringify((s as any).tiers, null, 2));
  }
  process.exit(0);
}

run().catch(console.error);
