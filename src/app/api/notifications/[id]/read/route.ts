import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Notification } from '@/models/Notification';

export async function PATCH(_req: Request, ctx: RouteContext<'/api/notifications/[id]/read'>) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });

  const { id } = await ctx.params;

  await connectMongoose();
  await Notification.updateOne({ _id: id, user: session.user.id }, { read: true });

  return NextResponse.json({ ok: true });
}
