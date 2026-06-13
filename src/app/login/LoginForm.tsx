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
  
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

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
    
    router.push(callbackUrl);
    router.refresh();
  };

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {step === 1 ? (
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
      {step === 1 && (
        <div className="text-center" style={{ fontSize: '0.85rem', marginTop: '1rem', borderTop: '1px solid #EBE4DB', paddingTop: '1rem' }}>
          <Link href="/admin/login" style={{ color: '#888' }}>Admin login</Link>
        </div>
      )}
    </div>
  );
}
