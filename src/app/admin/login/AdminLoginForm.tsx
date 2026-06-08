'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Spinner from '@/components/Spinner';

export default function AdminLoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const accessDenied = params.get('error') === 'access_denied';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(
    accessDenied ? 'This account does not have admin access.' : null,
  );
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const res = await fetch('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setSubmitting(false);

    if (!data.ok) {
      setError('Invalid email or password.');
      return;
    }

    router.push('/admin');
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1.1rem' }}>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: 6 }}>
          Email
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="admin@example.com"
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.07)',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
          }}
        />
      </div>

      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: 6 }}>
          Password
        </label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          placeholder="••••••••"
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.07)',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
          }}
        />
      </div>

      {error && (
        <div
          style={{
            background: 'rgba(217,95,95,0.15)',
            border: '1px solid rgba(217,95,95,0.4)',
            borderRadius: 8,
            padding: '10px 14px',
            color: '#ff8a8a',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <i className="fa-solid fa-circle-exclamation"></i>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          marginTop: 4,
          padding: '11px',
          background: submitting ? 'rgba(200,149,108,0.6)' : 'var(--primary,#C8956C)',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: '0.95rem',
          fontWeight: 700,
          cursor: submitting ? 'wait' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        {submitting ? <Spinner /> : <i className="fa-solid fa-crown"></i>}
        {submitting ? 'Verifying…' : 'Sign in to Admin'}
      </button>

      <div style={{ textAlign: 'center', marginTop: 4 }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', textDecoration: 'none' }}>
          ← Back to site
        </Link>
      </div>
    </form>
  );
}
