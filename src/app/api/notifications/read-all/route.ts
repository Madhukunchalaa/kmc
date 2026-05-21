import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Notification } from '@/models/Notification';

export async function POST() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });
  await connectMongoose();
  await Notification.updateMany({ user: session.user.id, read: false }, { read: true });
  return NextResponse.json({ ok: true });
}
