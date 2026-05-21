'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import Spinner from '@/components/Spinner';

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get('callbackUrl') || '/dashboard';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    setSubmitting(false);
    if (!res || res.error) {
      setError('Invalid email or password.');
      return;
    }
    router.push(callbackUrl);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1rem' }}>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input"
          style={{ width: '100%' }}
          autoComplete="email"
        />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="newsletter-input"
          style={{ width: '100%' }}
          autoComplete="current-password"
        />
      </div>
      {error && (
        <p style={{ color: '#D95F5F', fontSize: '0.9rem' }}>
          <i className="fa-solid fa-circle-exclamation me-2"></i>
          {error}
        </p>
      )}
      <button
        type="submit"
        className="btn-primary-custom"
        disabled={submitting}
        style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer' }}
      >
        {submitting ? <Spinner /> : <i className="fa-solid fa-arrow-right-to-bracket"></i>}
        <span>{submitting ? 'Signing in…' : 'Sign in'}</span>
      </button>
      <div className="text-center" style={{ fontSize: '0.85rem' }}>
        <Link href="/forgot-password" style={{ color: 'var(--primary,#C8956C)' }}>
          Forgot your password?
        </Link>
      </div>
    </form>
  );
}
