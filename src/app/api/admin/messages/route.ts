import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { getDb } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  try {
    const db = await getDb();
    const messages = await db
      .collection('contact_messages')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ ok: true, messages });
  } catch (err) {
    console.error('Failed to get contact messages', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
