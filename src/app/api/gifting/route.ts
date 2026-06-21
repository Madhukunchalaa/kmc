import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import GiftingRecipient from '@/models/GiftingRecipient';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectMongoose();
    const items = await GiftingRecipient.find({}).sort({ order: 1, createdAt: 1 }).lean();
    return NextResponse.json(items);
  } catch {
    return NextResponse.json([]);
  }
}
