'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';

type Step = 'email' | 'otp' | 'password' | 'done';

export default function ForgotForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const sendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      // Always advance — don't leak whether email exists
      setStep('otp');
    } catch {
      setErr('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyAndReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (password !== confirm) { setErr('Passwords do not match.'); return; }
    if (password.length < 8) { setErr('Password must be at least 8 characters.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, otp, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErr(data.reason === 'invalid-or-expired-otp'
          ? 'Invalid or expired OTP. Please request a new one.'
          : 'Could not reset password. Please try again.');
        setLoading(false);
        return;
      }
      setStep('done');
    } catch {
      setErr('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'done') {
    return (
      <div className="text-center">
        <div style={{ fontSize: '3rem' }}>🔐</div>
        <h3 style={{ fontFamily: 'var(--font-heading)' }}>Password updated!</h3>
        <p style={{ color: 'var(--text-light,#666)' }}>You can now sign in with your new password.</p>
        <button className="btn-primary-custom mt-3" onClick={() => router.push('/login')} style={{ justifyContent: 'center' }}>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          <span>Go to sign in</span>
        </button>
      </div>
    );
  }

  if (step === 'email') {
    return (
      <form onSubmit={sendOtp} style={{ display: 'grid', gap: '1rem' }}>
        <p style={{ color: 'var(--text-light,#666)', fontSize: '0.9rem', margin: 0 }}>
          Enter your email address and we&apos;ll send you a 6-digit OTP to reset your password.
        </p>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email</label>
          <input
            required type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input" style={{ width: '100%' }}
            autoComplete="email" placeholder="you@example.com"
          />
        </div>
        {err && <p style={{ color: '#D95F5F', fontSize: '0.875rem', margin: 0 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}
        <button type="submit" className="btn-primary-custom" disabled={loading} style={{ justifyContent: 'center' }}>
          {loading ? <Spinner /> : <i className="fa-solid fa-paper-plane"></i>}
          <span>{loading ? 'Sending…' : 'Send OTP'}</span>
        </button>
      </form>
    );
  }

  if (step === 'otp') {
    return (
      <form onSubmit={(e) => { e.preventDefault(); if (otp.trim().length === 6) setStep('password'); else setErr('Enter the 6-digit OTP.'); }} style={{ display: 'grid', gap: '1rem' }}>
        <p style={{ color: 'var(--text-light,#666)', fontSize: '0.9rem', margin: 0 }}>
          If an account exists for <strong>{email}</strong>, a 6-digit OTP has been sent. Check your inbox (and spam folder).
        </p>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>6-Digit OTP</label>
          <input
            required maxLength={6} value={otp}
            onChange={(e) => { setOtp(e.target.value.replace(/\D/g, '')); setErr(null); }}
            className="newsletter-input" style={{ width: '100%', letterSpacing: 6, fontSize: '1.4rem', textAlign: 'center' }}
            placeholder="——————" inputMode="numeric"
          />
        </div>
        {err && <p style={{ color: '#D95F5F', fontSize: '0.875rem', margin: 0 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}
        <div style={{ display: 'flex', gap: 10 }}>
          <button type="submit" className="btn-primary-custom" style={{ justifyContent: 'center', flex: 1 }}>
            <i className="fa-solid fa-check"></i>
            <span>Verify OTP</span>
          </button>
          <button type="button" className="btn-outline-custom" style={{ justifyContent: 'center' }} onClick={() => { setStep('email'); setOtp(''); setErr(null); }}>
            <span>Resend</span>
          </button>
        </div>
      </form>
    );
  }

  // step === 'password'
  return (
    <form onSubmit={verifyAndReset} style={{ display: 'grid', gap: '1rem' }}>
      <p style={{ color: 'var(--text-light,#666)', fontSize: '0.9rem', margin: 0 }}>Set your new password.</p>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>New password</label>
        <input
          required type="password" minLength={8} value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="newsletter-input" style={{ width: '100%' }}
          autoComplete="new-password"
        />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Confirm new password</label>
        <input
          required type="password" minLength={8} value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="newsletter-input" style={{ width: '100%' }}
          autoComplete="new-password"
        />
      </div>
      {err && <p style={{ color: '#D95F5F', fontSize: '0.875rem', margin: 0 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}
      <button type="submit" className="btn-primary-custom" disabled={loading} style={{ justifyContent: 'center' }}>
        {loading ? <Spinner /> : <i className="fa-solid fa-key"></i>}
        <span>{loading ? 'Saving…' : 'Save new password'}</span>
      </button>
    </form>
  );
}
