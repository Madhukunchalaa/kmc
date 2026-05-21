import { Suspense } from 'react';
import Link from 'next/link';
import AuthShell from '@/components/AuthShell';
import RegisterForm from './RegisterForm';

export const metadata = { title: 'Create Account · KrissMaagiic Crystals' };

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="Join the Community"
      title="Create"
      highlight="your account"
      subtitle="Save your cart, place orders and book sessions with Kriss."
      footer={
        <>
          Already have an account?{' '}
          <Link href="/login" style={{ color: 'var(--gold-light,#E8C99A)' }}>
            Sign in
          </Link>
        </>
      }
    >
      <Suspense fallback={<p style={{ color: '#888' }}>Loading…</p>}>
        <RegisterForm />
      </Suspense>
    </AuthShell>
  );
}
