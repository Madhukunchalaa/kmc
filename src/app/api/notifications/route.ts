import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Notification } from '@/models/Notification';

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });

  await connectMongoose();

  const [notifications, unreadCount] = await Promise.all([
    Notification.find({ user: session.user.id })
      .sort({ createdAt: -1 })
      .limit(20)
      .lean(),
    Notification.countDocuments({ user: session.user.id, read: false }),
  ]);

  return NextResponse.json({ ok: true, notifications, unreadCount });
}
