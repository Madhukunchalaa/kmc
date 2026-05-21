import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { resetPasswordSchema, zodErrorMessage } from '@/lib/validators';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }
  const parsed = resetPasswordSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  const { token, password } = parsed.data;

  try {
    await connectMongoose();
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpires: { $gt: new Date() },
      active: true,
    });
    if (!user) {
      return NextResponse.json({ ok: false, reason: 'invalid-or-expired-token' }, { status: 400 });
    }
    user.passwordHash = await bcrypt.hash(password, 12);
    user.resetToken = null;
    user.resetTokenExpires = null;
    await user.save();
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('reset-password failed', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
