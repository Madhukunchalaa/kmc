import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import Review from '@/models/Review';

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  
  try {
    await connectMongoose();
    const doc = await Review.findByIdAndDelete(params.id);
    if (!doc) {
      return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Failed to delete review', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
