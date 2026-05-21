'use client';

import { useState } from 'react';
import Spinner from '@/components/Spinner';

export default function ForgotForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      /* still show success — don't leak whether email exists */
    }
    setDone(true);
    setSubmitting(false);
  };

  if (done) {
    return (
      <div className="text-center">
        <div style={{ fontSize: '3rem' }}>📬</div>
        <h3 style={{ fontFamily: 'var(--font-heading)' }}>Check your email</h3>
        <p style={{ color: 'var(--text-light,#666)' }}>
          If an account exists for <strong>{email}</strong>, a reset link is on its way.
        </p>
      </div>
    );
  }

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
      <button
        type="submit"
        className="btn-primary-custom"
        disabled={submitting}
        style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer' }}
      >
        {submitting ? <Spinner /> : <i className="fa-solid fa-paper-plane"></i>}
        <span>{submitting ? 'Sending…' : 'Send reset link'}</span>
      </button>
    </form>
  );
}
