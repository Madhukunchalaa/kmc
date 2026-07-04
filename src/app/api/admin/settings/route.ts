import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Setting } from '@/models/Setting';

export async function POST(req: Request) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  try {
    const body = await req.json();
    await connectMongoose();

    const serialize = (v: unknown): string =>
      typeof v === 'string' ? v : JSON.stringify(v);

    if (body.key !== undefined && body.value !== undefined) {
      await Setting.findOneAndUpdate(
        { key: body.key },
        { value: serialize(body.value) },
        { upsert: true, new: true }
      );
    } else if (body.settings && typeof body.settings === 'object') {
      for (const [k, v] of Object.entries(body.settings)) {
        await Setting.findOneAndUpdate(
          { key: k },
          { value: serialize(v) },
          { upsert: true, new: true }
        );
      }
    } else {
      return NextResponse.json({ ok: false, reason: 'Invalid request body' }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Failed to update settings:', err);
    return NextResponse.json({ ok: false, reason: 'Server error' }, { status: 500 });
  }
}
