import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(
  req: Request,
  props: { params: Promise<{ id: string }> }
) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  const { id } = await props.params;

  try {
    const db = await getDb();
    const result = await db
      .collection('contact_messages')
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Failed to delete contact message', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
