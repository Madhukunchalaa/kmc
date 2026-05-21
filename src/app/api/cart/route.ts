import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getDb } from '@/lib/mongodb';
import { CART_COOKIE } from '@/lib/cartSession';
import { updateCartSchema, zodErrorMessage } from '@/lib/validators';

interface CartItem {
  productId: string;
  qty: number;
}

async function getSessionId(): Promise<string | null> {
  const store = await cookies();
  return store.get(CART_COOKIE)?.value ?? null;
}

export async function GET() {
  const sid = await getSessionId();
  if (!sid) return NextResponse.json({ items: [] });

  try {
    const db = await getDb();
    const doc = await db.collection('carts').findOne({ sessionId: sid });
    return NextResponse.json({ items: (doc?.items as CartItem[]) ?? [] });
  } catch (err) {
    console.error('cart GET failed', err);
    return NextResponse.json({ items: [] });
  }
}

export async function PUT(req: Request) {
  const sid = await getSessionId();
  if (!sid) return NextResponse.json({ ok: false, reason: 'no-session' }, { status: 400 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }
  const parsed = updateCartSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }
  const items: CartItem[] = parsed.data.items;

  try {
    const db = await getDb();
    await db.collection('carts').updateOne(
      { sessionId: sid },
      { $set: { sessionId: sid, items, updatedAt: new Date() } },
      { upsert: true },
    );
    return NextResponse.json({ ok: true, items });
  } catch (err) {
    console.error('cart PUT failed', err);
    return NextResponse.json({ ok: false, reason: 'db-error' }, { status: 500 });
  }
}

export async function DELETE() {
  const sid = await getSessionId();
  if (!sid) return NextResponse.json({ ok: true });
  try {
    const db = await getDb();
    await db.collection('carts').deleteOne({ sessionId: sid });
  } catch (err) {
    console.error('cart DELETE failed', err);
  }
  return NextResponse.json({ ok: true });
}
