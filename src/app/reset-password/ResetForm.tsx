'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Spinner from '@/components/Spinner';

export default function ResetForm() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get('token') || '';
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!token) {
    return (
      <div className="text-center">
        <p style={{ color: '#D95F5F' }}>
          <i className="fa-solid fa-circle-exclamation me-2"></i>
          This reset link is missing a token.
        </p>
        <Link href="/forgot-password" className="btn-outline-custom mt-3">
          <i className="fa-solid fa-rotate-right"></i>
          <span>Request a new link</span>
        </Link>
      </div>
    );
  }

  if (done) {
    return (
      <div className="text-center">
        <div style={{ fontSize: '3rem' }}>🔐</div>
        <h3 style={{ fontFamily: 'var(--font-heading)' }}>Password updated</h3>
        <p style={{ color: 'var(--text-light,#666)' }}>You can now sign in with your new password.</p>
        <button className="btn-primary-custom mt-3" onClick={() => router.push('/login')}>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          <span>Go to sign in</span>
        </button>
      </div>
    );
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.reason === 'invalid-or-expired-token' ? 'This reset link has expired or is invalid.' : 'Could not reset password.');
        setSubmitting(false);
        return;
      }
      setDone(true);
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1rem' }}>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>New password</label>
        <input required type="password" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="newsletter-input" style={{ width: '100%' }} autoComplete="new-password" />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Confirm new password</label>
        <input required type="password" minLength={8} value={confirm} onChange={(e) => setConfirm(e.target.value)} className="newsletter-input" style={{ width: '100%' }} autoComplete="new-password" />
      </div>
      {error && (
        <p style={{ color: '#D95F5F', fontSize: '0.9rem' }}>
          <i className="fa-solid fa-circle-exclamation me-2"></i>
          {error}
        </p>
      )}
      <button type="submit" className="btn-primary-custom" disabled={submitting} style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
        {submitting ? <Spinner /> : <i className="fa-solid fa-key"></i>}
        <span>{submitting ? 'Saving…' : 'Save new password'}</span>
      </button>
    </form>
  );
}
