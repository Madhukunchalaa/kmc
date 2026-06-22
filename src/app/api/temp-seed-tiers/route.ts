import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import mongoose from 'mongoose';
import { SERVICE_TIERS } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectMongoose();
    const col = mongoose.connection.db!.collection('services');
    const services = await col.find({ isDeleted: { $ne: true } }).toArray();
    
    let updated = 0;
    for (const svc of services) {
      const tiers = SERVICE_TIERS[svc.slug];
      if (!tiers) continue;
      
      await col.updateOne(
        { _id: svc._id },
        { $set: { tiers, updatedAt: new Date() } }
      );
      updated++;
    }
    
    return NextResponse.json({ ok: true, message: `Successfully updated ${updated} service tiers in the database!` });
  } catch (err) {
    console.error('Failed to seed tiers via API', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
