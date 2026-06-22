'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Spinner from '@/components/Spinner';

import { useCurrency, COUNTRY_CURRENCY_MAP } from '@/context/CurrencyContext';

export default function RegisterForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get('callbackUrl') || '/';

  const { status } = useSession();
  const { countryCode } = useCurrency();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace(callbackUrl);
    }
  }, [status, callbackUrl, router]);


  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', country: '', otp: '' });

  useEffect(() => {
    if (countryCode) {
      setForm((f) => ({ ...f, country: f.country || countryCode }));
    }
  }, [countryCode]);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (form.name.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters).');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/auth/register/send-otp', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: form.email, name: form.name }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.reason === 'email-already-registered' ? 'That email is already registered. Try signing in instead.' : (data.reason || 'Failed to send OTP.'));
        setSubmitting(false);
        return;
      }
      setStep(2);
      setSubmitting(false);
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  };

  const onRegister = async (e: React.FormEvent) => {
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
        if (data.reason === 'invalid-otp') setError('Invalid OTP. Please check your email.');
        else if (data.reason === 'expired-otp') setError('OTP expired. Please go back and request a new one.');
        else setError(data.reason || 'Could not create your account. Please try again.');
        setSubmitting(false);
        return;
      }
      // Auto-login.
      await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      });
      window.location.href = callbackUrl;
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {step === 1 ? (
        <form onSubmit={onSendOTP} style={{ display: 'grid', gap: '1rem' }}>
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
            {submitting ? <Spinner /> : <i className="fa-solid fa-envelope"></i>}
            <span>{submitting ? 'Sending OTP…' : 'Send Verification OTP'}</span>
          </button>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light,#777)' }}>
            By creating an account you agree to our terms and the privacy policy.
          </p>
        </form>
      ) : (
        <form onSubmit={onRegister} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Enter OTP</label>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>We sent a 6-digit code to <strong>{form.email}</strong></p>
            <input
              required
              type="text"
              value={form.otp}
              onChange={set('otp')}
              className="newsletter-input"
              style={{ width: '100%', letterSpacing: '4px', textAlign: 'center', fontSize: '1.2rem' }}
              autoComplete="one-time-code"
              maxLength={6}
            />
          </div>
          {error && (
            <p style={{ color: '#D95F5F', fontSize: '0.9rem' }}>
              <i className="fa-solid fa-circle-exclamation me-2"></i>
              {error}
            </p>
          )}
          <button type="submit" className="btn-primary-custom" disabled={submitting} style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
            {submitting ? <Spinner /> : <i className="fa-solid fa-user-plus"></i>}
            <span>{submitting ? 'Verifying & Creating Account…' : 'Verify & Create Account'}</span>
          </button>
          <div className="text-center" style={{ marginTop: '0.5rem' }}>
            <button type="button" onClick={() => { setStep(1); setError(null); }} style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
              Back to form
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
