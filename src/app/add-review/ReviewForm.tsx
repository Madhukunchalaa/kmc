'use client';

import { useState } from 'react';
import Spinner from '@/components/Spinner';

interface FormState {
  name: string;
  role: string;
  text: string;
}

const EMPTY_FORM: FormState = { name: '', role: '', text: '' };

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
  label, value, onChange, rows = 4, required = false
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

export default function ReviewForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          rating,
          role: form.role || 'Client',
          text: form.text,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.reason ?? 'Could not submit your review. Please try again.');
        setStatus('error');
        return;
      }
      setStatus('done');
      setForm(EMPTY_FORM);
      setRating(5);
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
          fontSize: '2.2rem',
          boxShadow: '0 0 20px rgba(200,149,108,0.1)'
        }}>✨</div>
        <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '0.75rem', fontSize: '1.4rem' }}>Review Submitted!</h4>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
          Thank you for sharing your experience. Your review has been saved and will appear in our testimonials section.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            background: 'transparent', border: '1px solid rgba(200,149,108,0.4)',
            borderRadius: 50, padding: '0.6rem 1.5rem', color: 'var(--primary,#C8956C)',
            cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(200,149,108,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
      
      {/* Interactive Star Selection */}
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <label style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '0.5rem' }}>
          Select Rating
        </label>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {[1, 2, 3, 4, 5].map((star) => {
            const active = (hoverRating !== null ? star <= hoverRating : star <= rating);
            return (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(null)}
                onClick={() => setRating(star)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', outline: 'none', padding: 0
                }}
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    fontSize: '2.2rem',
                    color: active ? '#FFD700' : 'rgba(255,255,255,0.15)',
                    textShadow: active ? '0 0 15px rgba(255,215,0,0.6)' : 'none',
                    transition: 'color 0.15s, text-shadow 0.15s, transform 0.1s ease-in-out'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <FloatingInput label="Your Name" value={form.name} onChange={update('name')} required />

      <FloatingInput 
        label="Location / Client Type" 
        value={form.role} 
        onChange={update('role')} 
        placeholder="e.g. Verified Buyer · Hyderabad, Tarot Client, etc." 
      />

      <FloatingTextarea label="Your Review" value={form.text} onChange={update('text')} rows={4} required />

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
          marginTop: '0.5rem'
        }}
      >
        {status === 'submitting' ? <Spinner /> : <i className="fa-solid fa-paper-plane" />}
        <span>{status === 'submitting' ? 'Submitting…' : 'Submit Review'}</span>
      </button>
    </form>
  );
}
