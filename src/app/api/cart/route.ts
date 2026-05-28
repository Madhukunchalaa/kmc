import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth } from '@/auth';
import { getDb } from '@/lib/mongodb';
import { CART_COOKIE } from '@/lib/cartSession';
import { updateCartSchema, zodErrorMessage } from '@/lib/validators';

interface CartItem {
  productId: string;
  qty: number;
}

// Authenticated users: cart keyed by userId.
// Guests: cart keyed by kmc_sid session cookie.
async function cartKey(): Promise<
  | { type: 'user'; filter: { userId: string }; doc: { userId: string } }
  | { type: 'session'; filter: { sessionId: string }; doc: { sessionId: string } }
  | null
> {
  const session = await auth();
  if (session?.user?.id) {
    const f = { userId: session.user.id };
    return { type: 'user', filter: f, doc: f };
  }
  const store = await cookies();
  const sid = store.get(CART_COOKIE)?.value ?? null;
  if (!sid) return null;
  const f = { sessionId: sid };
  return { type: 'session', filter: f, doc: f };
}

export async function GET() {
  const key = await cartKey();
  if (!key) return NextResponse.json({ items: [] });

  try {
    const db = await getDb();
    const doc = await db.collection('carts').findOne(key.filter);
    return NextResponse.json({ items: (doc?.items as CartItem[]) ?? [] });
  } catch (err) {
    console.error('cart GET failed', err);
    return NextResponse.json({ items: [] });
  }
}

export async function PUT(req: Request) {
  const key = await cartKey();
  if (!key) return NextResponse.json({ ok: false, reason: 'no-session' }, { status: 400 });

  let body: unknown;
  try { body = await req.json(); } catch {
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
      key.filter,
      { $set: { ...key.doc, items, updatedAt: new Date() } },
      { upsert: true },
    );
    return NextResponse.json({ ok: true, items });
  } catch (err) {
    console.error('cart PUT failed', err);
    return NextResponse.json({ ok: false, reason: 'db-error' }, { status: 500 });
  }
}

export async function DELETE() {
  const key = await cartKey();
  if (!key) return NextResponse.json({ ok: true });
  try {
    const db = await getDb();
    await db.collection('carts').deleteOne(key.filter);
  } catch (err) {
    console.error('cart DELETE failed', err);
  }
  return NextResponse.json({ ok: true });
}
