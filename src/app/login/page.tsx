import { Suspense } from 'react';
import Link from 'next/link';
import AuthShell from '@/components/AuthShell';
import LoginForm from './LoginForm';

export const metadata = { title: 'Login · KrissMaagiic Crystals' };

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome Back"
      title="Sign in to"
      highlight="your account"
      subtitle="Access your orders, bookings and crystal cart."
      footer={
        <>
          New here?{' '}
          <Link href="/register" style={{ color: 'var(--gold-light,#E8C99A)' }}>
            Create an account
          </Link>
        </>
      }
    >
      <Suspense fallback={<p style={{ color: '#888' }}>Loading…</p>}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
