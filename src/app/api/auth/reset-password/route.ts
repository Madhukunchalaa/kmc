import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const { email, otp, password } = body as { email?: string; otp?: string; password?: string };

  if (!email || !otp || !password) {
    return NextResponse.json({ ok: false, reason: 'email, otp and password are required' }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ ok: false, reason: 'password-too-short' }, { status: 400 });
  }

  try {
    await connectMongoose();
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
      resetToken: otp.trim(),
      resetTokenExpires: { $gt: new Date() },
      active: true,
    });
    if (!user) {
      return NextResponse.json({ ok: false, reason: 'invalid-or-expired-otp' }, { status: 400 });
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
