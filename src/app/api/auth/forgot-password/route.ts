import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { forgotPasswordSchema, zodErrorMessage } from '@/lib/validators';
import { sendEmail, passwordResetEmail } from '@/lib/email';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }
  const parsed = forgotPasswordSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  const email = parsed.data.email.toLowerCase().trim();

  try {
    await connectMongoose();
    const user = await User.findOne({ email, active: true });
    // Always respond OK to avoid leaking which emails are registered.
    if (!user) return NextResponse.json({ ok: true });

    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.resetTokenExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    await user.save();

    const base = process.env.NEXTAUTH_URL || '';
    const resetUrl = `${base}/reset-password?token=${token}`;
    sendEmail({ ...passwordResetEmail(user.name, resetUrl), to: user.email }).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('forgot-password failed', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
