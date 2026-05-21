import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { contactSchema, zodErrorMessage } from '@/lib/validators';

export async function POST(req: Request) {
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });

  const data = {
    ...parsed.data,
    email: parsed.data.email.toLowerCase(),
    createdAt: new Date(),
  };
  try {
    const db = await getDb();
    await db.collection('contact_messages').insertOne(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact POST failed', err);
    return NextResponse.json({ ok: false, reason: 'db-error' }, { status: 500 });
  }
}
