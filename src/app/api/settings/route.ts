import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { Setting } from '@/models/Setting';

export const dynamic = 'force-dynamic';

const DEFAULT_SETTINGS: Record<string, string> = {
  founderImageUrl: 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/uploads/founder-1781446863195.webp',
};

export async function GET() {
  try {
    await connectMongoose();
    const docs = await Setting.find({}).lean();
    
    const settings = { ...DEFAULT_SETTINGS };
    for (const doc of docs) {
      settings[doc.key] = doc.value;
    }

    return NextResponse.json({ ok: true, settings });
  } catch (err) {
    console.error('Failed to get settings:', err);
    return NextResponse.json({ ok: false, settings: DEFAULT_SETTINGS });
  }
}
