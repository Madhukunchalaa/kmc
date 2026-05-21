import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

export async function POST(req: Request) {
  let body: { email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, reason: 'invalid-email' }, { status: 400 });
  }

  try {
    const db = await getDb();
    await db
      .collection('subscribers')
      .updateOne(
        { email },
        { $setOnInsert: { email, createdAt: new Date() } },
        { upsert: true },
      );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('newsletter POST failed', err);
    return NextResponse.json({ ok: false, reason: 'db-error' }, { status: 500 });
  }
}
