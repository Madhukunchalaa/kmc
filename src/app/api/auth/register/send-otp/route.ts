import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { RegistrationOtp } from '@/models/RegistrationOtp';
import { sendEmail, otpEmail } from '@/lib/email';

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, reason: 'Invalid email' }, { status: 400 });
    }

    await connectMongoose();
    const normalizedEmail = email.trim().toLowerCase();

    // Check if user already exists and has a password hash
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser && existingUser.passwordHash) {
      return NextResponse.json({ ok: false, reason: 'email-already-registered' }, { status: 409 });
    }

    const otp = generateOTP();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    // Upsert OTP
    await RegistrationOtp.findOneAndUpdate(
      { email: normalizedEmail },
      { otp, expires },
      { upsert: true, new: true }
    );

    // Send email
    const msg = otpEmail(name || 'there', otp);
    msg.to = normalizedEmail;
    const sentRes = await sendEmail(msg);

    if (!sentRes.sent) {
      return NextResponse.json({ ok: false, reason: 'Failed to send OTP email' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Register Send OTP error:', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
