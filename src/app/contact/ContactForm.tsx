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

function FloatingInput({
  label, value, onChange, type = 'text', required = false, placeholder = ''
}: {
  label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; required?: boolean; placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div style={{ position: 'relative', marginTop: '0.5rem' }}>
      <label style={{
        position: 'absolute', left: '1rem', top: active ? '-0.55rem' : '0.95rem',
        fontSize: active ? '0.7rem' : '0.88rem',
        fontWeight: 600,
        color: active ? 'var(--primary,#C8956C)' : 'rgba(255,255,255,0.45)',
        background: active ? 'linear-gradient(180deg,#1a0c1e,#120818)' : 'transparent',
        padding: active ? '0 6px' : '0',
        borderRadius: 4,
        transition: 'all 0.2s ease',
        pointerEvents: 'none',
        zIndex: 2,
        letterSpacing: active ? '0.08em' : '0',
        textTransform: active ? 'uppercase' : 'none',
      }}>
        {label}{required && ' *'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={focused ? placeholder : ''}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${focused ? 'var(--primary,#C8956C)' : 'rgba(255,255,255,0.12)'}`,
          borderRadius: 12,
          padding: '0.9rem 1rem',
          color: '#fff',
          fontSize: '0.92rem',
          outline: 'none',
          transition: 'all 0.25s ease',
          boxShadow: focused ? '0 0 0 3px rgba(200,149,108,0.12), inset 0 1px 0 rgba(255,255,255,0.04)' : 'none',
        }}
      />
    </div>
  );
}

function FloatingTextarea({
  label, value, onChange, rows = 5, required = false
}: {
  label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div style={{ position: 'relative', marginTop: '0.5rem' }}>
      <label style={{
        position: 'absolute', left: '1rem', top: active ? '-0.55rem' : '0.95rem',
        fontSize: active ? '0.7rem' : '0.88rem',
        fontWeight: 600,
        color: active ? 'var(--primary,#C8956C)' : 'rgba(255,255,255,0.45)',
        background: active ? 'linear-gradient(180deg,#1a0c1e,#120818)' : 'transparent',
        padding: active ? '0 6px' : '0',
        borderRadius: 4,
        transition: 'all 0.2s ease',
        pointerEvents: 'none',
        zIndex: 2,
        letterSpacing: active ? '0.08em' : '0',
        textTransform: active ? 'uppercase' : 'none',
      }}>
        {label}{required && ' *'}
      </label>
      <textarea
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${focused ? 'var(--primary,#C8956C)' : 'rgba(255,255,255,0.12)'}`,
          borderRadius: 12,
          padding: '0.9rem 1rem',
          color: '#fff',
          fontSize: '0.92rem',
          outline: 'none',
          resize: 'vertical',
          transition: 'all 0.25s ease',
          boxShadow: focused ? '0 0 0 3px rgba(200,149,108,0.12), inset 0 1px 0 rgba(255,255,255,0.04)' : 'none',
          fontFamily: 'inherit',
        }}
      />
    </div>
  );
}

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
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%', margin: '0 auto 1.5rem',
          background: 'radial-gradient(circle, rgba(200,149,108,0.2), transparent 70%)',
          border: '1px solid rgba(200,149,108,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem'
        }}>💌</div>
        <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '0.75rem' }}>Message received!</h4>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
          Thank you for reaching out. Kriss will reply within a day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            background: 'transparent', border: '1px solid rgba(200,149,108,0.4)',
            borderRadius: 50, padding: '0.6rem 1.5rem', color: 'var(--primary,#C8956C)',
            cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <FloatingInput label="Your Name" value={form.name} onChange={update('name')} required />
        <FloatingInput label="Email" value={form.email} onChange={update('email')} type="email" required />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <FloatingInput label="Phone" value={form.phone} onChange={update('phone')} type="tel" />
        <FloatingInput label="Subject" value={form.subject} onChange={update('subject')} placeholder="e.g. Tarot booking…" />
      </div>
      <FloatingTextarea label="Your Message" value={form.message} onChange={update('message')} rows={5} required />

      {error && (
        <div style={{
          background: 'rgba(217,95,95,0.1)', border: '1px solid rgba(217,95,95,0.3)',
          borderRadius: 10, padding: '0.75rem 1rem', color: '#f08080', fontSize: '0.88rem'
        }}>
          <i className="fa-solid fa-circle-exclamation me-2" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
          background: 'linear-gradient(135deg, var(--primary,#C8956C), var(--secondary,#A0734A))',
          border: 'none', borderRadius: 50, padding: '1rem 2rem',
          color: '#fff', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.15em',
          textTransform: 'uppercase', cursor: status === 'submitting' ? 'wait' : 'pointer',
          opacity: status === 'submitting' ? 0.8 : 1,
          boxShadow: '0 8px 25px rgba(200,149,108,0.35)',
          transition: 'all 0.3s ease',
          fontFamily: 'var(--font-display)',
        }}
      >
        {status === 'submitting' ? <Spinner /> : <i className="fa-solid fa-paper-plane" />}
        <span>{status === 'submitting' ? 'Sending…' : 'Send Message'}</span>
      </button>
    </form>
  );
}
