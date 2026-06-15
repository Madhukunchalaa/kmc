'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import Spinner from '@/components/Spinner';

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get('callbackUrl') || '/dashboard';
  
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace(callbackUrl);
    }
  }, [status, callbackUrl, router]);
  
  const [method, setMethod] = useState<'password' | 'otp'>('password');
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);


  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const res = await signIn('credentials', { email, password, redirect: false });
    setSubmitting(false);
    if (!res || res.error) {
      setError('Invalid email or password.');
      return;
    }
    window.location.href = callbackUrl;
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.reason || 'Failed to send OTP');
      setStep(2);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error sending OTP');
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    
    const res = await signIn('credentials', {
      email,
      otp,
      redirect: false,
    });
    
    setSubmitting(false);
    if (!res || res.error) {
      setError('Invalid or expired OTP.');
      return;
    }
    
    window.location.href = callbackUrl;
  };

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {method === 'password' ? (
        <form onSubmit={handlePasswordLogin} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email Address</label>
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
              <i className="fa-solid fa-circle-exclamation me-2"></i> {error}
            </p>
          )}
          <button type="submit" className="btn-primary-custom" disabled={submitting} style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1 }}>
            {submitting ? <Spinner /> : <i className="fa-solid fa-arrow-right-to-bracket"></i>}
            <span>{submitting ? 'Logging in…' : 'Login'}</span>
          </button>
          
          <div className="text-center" style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <button type="button" onClick={() => { setMethod('otp'); setError(null); }} style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
              Login with OTP instead
            </button>
            <Link href="/forgot-password" style={{ color: '#888', fontSize: '0.85rem' }}>
              Forgot password?
            </Link>
          </div>
        </form>
      ) : step === 1 ? (
        <form onSubmit={handleSendOTP} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email Address</label>
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
          {error && (
            <p style={{ color: '#D95F5F', fontSize: '0.9rem' }}>
              <i className="fa-solid fa-circle-exclamation me-2"></i> {error}
            </p>
          )}
          <button type="submit" className="btn-primary-custom" disabled={submitting} style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1 }}>
            {submitting ? <Spinner /> : <i className="fa-solid fa-envelope"></i>}
            <span>{submitting ? 'Sending OTP…' : 'Send OTP'}</span>
          </button>
          
          <div className="text-center" style={{ marginTop: '0.5rem' }}>
            <button type="button" onClick={() => { setMethod('password'); setError(null); }} style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
              Login with Password instead
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Enter OTP</label>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>Sent to {email}</p>
            <input
              required
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="newsletter-input"
              style={{ width: '100%', letterSpacing: '4px', textAlign: 'center', fontSize: '1.2rem' }}
              autoComplete="one-time-code"
            />
          </div>
          {error && (
            <p style={{ color: '#D95F5F', fontSize: '0.9rem' }}>
              <i className="fa-solid fa-circle-exclamation me-2"></i> {error}
            </p>
          )}
          <button type="submit" className="btn-primary-custom" disabled={submitting} style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1 }}>
            {submitting ? <Spinner /> : <i className="fa-solid fa-check-circle"></i>}
            <span>{submitting ? 'Verifying…' : 'Verify & Login'}</span>
          </button>
          <div className="text-center">
            <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
              Use a different email
            </button>
          </div>
        </form>
      )}

      {/* Admin Fallback Login */}
      {step === 1 && method === 'otp' && (
        <div className="text-center" style={{ fontSize: '0.85rem', marginTop: '1rem', borderTop: '1px solid #EBE4DB', paddingTop: '1rem' }}>
          <Link href="/admin/login" style={{ color: '#888' }}>Admin login</Link>
        </div>
      )}
    </div>
  );
}
