'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Spinner from '@/components/Spinner';

export default function RegisterForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get('callbackUrl') || '/dashboard';

  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.reason === 'email-already-registered') {
          setError('That email is already registered. Try signing in instead.');
        } else {
          setError(data.reason || 'Could not create your account. Please try again.');
        }
        setSubmitting(false);
        return;
      }
      // Auto-login.
      await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      });
      router.push(callbackUrl);
      router.refresh();
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1rem' }}>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Full name</label>
        <input required value={form.name} onChange={set('name')} className="newsletter-input" style={{ width: '100%' }} autoComplete="name" />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email</label>
        <input required type="email" value={form.email} onChange={set('email')} className="newsletter-input" style={{ width: '100%' }} autoComplete="email" />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone (optional)</label>
        <input type="tel" value={form.phone} onChange={set('phone')} className="newsletter-input" style={{ width: '100%' }} autoComplete="tel" />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Password (min 8 chars)</label>
        <input required minLength={8} type="password" value={form.password} onChange={set('password')} className="newsletter-input" style={{ width: '100%' }} autoComplete="new-password" />
      </div>
      {error && (
        <p style={{ color: '#D95F5F', fontSize: '0.9rem' }}>
          <i className="fa-solid fa-circle-exclamation me-2"></i>
          {error}
        </p>
      )}
      <button type="submit" className="btn-primary-custom" disabled={submitting} style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
        {submitting ? <Spinner /> : <i className="fa-solid fa-user-plus"></i>}
        <span>{submitting ? 'Creating account…' : 'Create Account'}</span>
      </button>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-light,#777)' }}>
        By creating an account you agree to our terms and the privacy policy.
      </p>
    </form>
  );
}
