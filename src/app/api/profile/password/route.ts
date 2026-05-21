import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { passwordChangeSchema, zodErrorMessage } from '@/lib/validators';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = passwordChangeSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });

  await connectMongoose();
  const user = await User.findById(session.user.id);
  if (!user) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
  const ok = await bcrypt.compare(parsed.data.currentPassword, user.passwordHash);
  if (!ok) return NextResponse.json({ ok: false, reason: 'wrong-current-password' }, { status: 400 });
  user.passwordHash = await bcrypt.hash(parsed.data.newPassword, 12);
  await user.save();
  return NextResponse.json({ ok: true });
}
