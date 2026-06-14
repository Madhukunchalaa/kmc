import { Suspense } from 'react';
import Link from 'next/link';
import AuthShell from '@/components/AuthShell';
import LoginForm from './LoginForm';

import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Login · KrissMaagiic Crystals' };

interface PageProps {
  searchParams: Promise<{ callbackUrl?: string }>;
}

export default async function LoginPage(props: PageProps) {
  const session = await auth();
  const searchParams = await props.searchParams;
  const callbackUrl = searchParams.callbackUrl || '/dashboard';
  
  if (session?.user) {
    redirect(callbackUrl);
  }

  const registerUrl = searchParams.callbackUrl ? `/register?callbackUrl=${encodeURIComponent(searchParams.callbackUrl)}` : '/register';
  return (
    <AuthShell
      eyebrow="Welcome Back"
      title="Sign in to"
      highlight="your account"
      subtitle="Access your orders, bookings and crystal cart."
      footer={
        <>
          New here?{' '}
          <Link href={registerUrl} style={{ color: 'var(--gold-light,#E8C99A)' }}>
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
