import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { RegistrationOtp } from '@/models/RegistrationOtp';
import { registerSchema, zodErrorMessage } from '@/lib/validators';
import { sendEmail, welcomeEmail } from '@/lib/email';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, reason: zodErrorMessage(parsed.error) },
      { status: 400 },
    );
  }

  const { name, email, phone, password, country, otp } = parsed.data;
  const normEmail = email.toLowerCase().trim();

  if (!otp) {
    return NextResponse.json({ ok: false, reason: 'otp-required' }, { status: 400 });
  }

  try {
    await connectMongoose();
    const existing = await User.findOne({ email: normEmail });
    if (existing && existing.passwordHash) {
      return NextResponse.json(
        { ok: false, reason: 'email-already-registered' },
        { status: 409 },
      );
    }

    // Verify OTP
    const otpRecord = await RegistrationOtp.findOne({ email: normEmail, otp });
    if (!otpRecord) {
      return NextResponse.json(
        { ok: false, reason: 'invalid-otp' },
        { status: 400 },
      );
    }
    if (otpRecord.expires < new Date()) {
      return NextResponse.json(
        { ok: false, reason: 'expired-otp' },
        { status: 400 },
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);
    let user;
    if (existing) {
      existing.name = name;
      existing.phone = phone || '';
      existing.passwordHash = passwordHash;
      existing.country = country;
      user = await existing.save();
    } else {
      user = await User.create({
        name,
        email: normEmail,
        phone: phone || '',
        passwordHash,
        role: 'user',
        country,
      });
    }

    // Delete OTP record since it's used
    await RegistrationOtp.deleteOne({ _id: otpRecord._id });

    await sendEmail({ ...welcomeEmail(user.name), to: user.email }).catch((err) => {
      console.error('[welcome-email-error]', err);
    });

    return NextResponse.json({ ok: true, userId: String(user._id) });
  } catch (err) {
    console.error('register failed', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
