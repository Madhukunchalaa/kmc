'use client';

import { useState } from 'react';
import Spinner from '@/components/Spinner';

interface Form {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMPTY: Form = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.reason ?? 'Could not send your message. Please try again.');
        setStatus('error');
        return;
      }
      setStatus('done');
      setForm(EMPTY);
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="text-center py-4">
        <div style={{ fontSize: '3rem' }}>💌</div>
        <h4 style={{ fontFamily: 'var(--font-heading)' }}>Message received!</h4>
        <p style={{ color: 'var(--text-light,#666)' }}>
          Thank you for reaching out. Kriss will reply within a day.
        </p>
        <button className="btn-outline-custom mt-2" onClick={() => setStatus('idle')}>
          <i className="fa-solid fa-pen"></i>
          <span>Send another</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
      <div className="row g-3">
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Your Name *</label>
          <input required value={form.name} onChange={update('name')} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email *</label>
          <input required type="email" value={form.email} onChange={update('email')} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone</label>
          <input type="tel" value={form.phone} onChange={update('phone')} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Subject</label>
          <input value={form.subject} onChange={update('subject')} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Tarot booking, custom order…" />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Message *</label>
          <textarea required rows={5} value={form.message} onChange={update('message')} className="newsletter-input" style={{ width: '100%' }} />
        </div>
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
        disabled={status === 'submitting'}
        style={{ justifyContent: 'center', opacity: status === 'submitting' ? 0.85 : 1, cursor: status === 'submitting' ? 'wait' : 'pointer' }}
      >
        {status === 'submitting' ? <Spinner /> : <i className="fa-solid fa-paper-plane"></i>}
        <span>{status === 'submitting' ? 'Sending…' : 'Send Message'}</span>
      </button>
    </form>
  );
}
