if (process.env.NODE_ENV === 'production') {
  const isPreview = process.env.VERCEL_ENV === 'preview';
  const canonicalDomain = 'https://krissmaagiicrystals.com';

  if (!process.env.AUTH_URL) {
    process.env.AUTH_URL = (isPreview && process.env.VERCEL_URL) ? `https://${process.env.VERCEL_URL}` : canonicalDomain;
  }
  if (!process.env.NEXTAUTH_URL) {
    process.env.NEXTAUTH_URL = (isPreview && process.env.VERCEL_URL) ? `https://${process.env.VERCEL_URL}` : canonicalDomain;
  }
}

import NextAuth from 'next-auth';
import 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role: 'user' | 'admin';
      country?: string | null;
    };
  }
  interface User {
    id: string;
    role: 'user' | 'admin';
    country?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    uid?: string;
    role?: 'user' | 'admin';
    country?: string | null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  trustHost: true,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        otp: { label: 'OTP', type: 'text' },
      },
      async authorize(credentials) {
        const email = (credentials?.email as string | undefined)?.trim().toLowerCase();
        const password = credentials?.password as string | undefined;
        const otp = credentials?.otp as string | undefined;

        if (!email || (!password && !otp)) return null;

        await connectMongoose();
        const user = await User.findOne({ email, active: true });
        if (!user) return null;

        // If OTP is provided, verify OTP
        if (otp) {
          if (!user.otp || user.otp !== otp || !user.otpExpires || user.otpExpires < new Date()) {
            return null; // Invalid or expired OTP
          }
          // Clear OTP after successful use
          user.otp = undefined;
          user.otpExpires = undefined;
          await user.save();
        } else if (password) {
          // Fallback to password (for admins who haven't transitioned)
          if (!user.passwordHash) return null;
          const ok = await bcrypt.compare(password, user.passwordHash);
          if (!ok) return null;
        }

        return {
          id: String(user._id),
          name: user.name,
          email: user.email,
          role: user.role,
          country: user.country,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.uid = user.id;
        token.role = user.role;
        token.country = user.country;
      }
      if (trigger === 'update' && session?.country) {
        token.country = session.country;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.uid) session.user.id = token.uid as string;
      if (token?.role) session.user.role = token.role as 'user' | 'admin';
      if (token?.country) session.user.country = token.country as string;
      return session;
    },
  },
});
