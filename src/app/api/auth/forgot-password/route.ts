import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { forgotPasswordSchema, zodErrorMessage } from '@/lib/validators';
import { sendEmail, passwordResetOtpEmail } from '@/lib/email';

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

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

    const otp = generateOTP();
    user.resetToken = otp;
    user.resetTokenExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
    await user.save();

    const msg = passwordResetOtpEmail(user.name, otp);
    msg.to = user.email;
    await sendEmail(msg).catch((err) => {
      console.error('[forgot-password-otp-email-error]', err);
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('forgot-password failed', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
