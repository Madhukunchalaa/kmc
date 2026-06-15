'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Initial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

const EMPTY: Initial = {
  name: '',
  role: '',
  rating: 5,
  text: '',
  avatar: '',
};

export default function TestimonialForm({ id, initial }: { id?: string; initial?: Initial }) {
  const router = useRouter();
  const [f, setF] = useState<Initial>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (initial) setF(initial);
  }, [initial]);

  // QoL: Automatically set avatar initial based on Name
  useEffect(() => {
    if (!initial && f.name && !f.avatar) {
      set('avatar', f.name.trim().charAt(0).toUpperCase());
    }
  }, [f.name]);

  const set = <K extends keyof Initial>(k: K, v: Initial[K]) => setF((s) => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setSaving(true);

    try {
      const url = id ? `/api/admin/testimonials/${id}` : '/api/admin/testimonials';
      const method = id ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(f),
      });
      const data = await res.json();
      if (!data.ok) {
        setErr(data.reason || 'Failed');
        setSaving(false);
        return;
      }
      router.push('/admin/testimonials');
      router.refresh();
    } catch {
      setErr('Network error');
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ background: '#fff', padding: 24, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', maxWidth: 600, marginTop: 16 }}>
      <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary,#C8956C)' }}>
        Testimonial Details
      </h3>

      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Client Name *</label>
          <input
            required
            value={f.name}
            onChange={(e) => set('name', e.target.value)}
            className="newsletter-input"
            style={{ width: '100%' }}
            placeholder="e.g. Tim R."
          />
        </div>
        
        <div className="col-md-4">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Avatar Initial *</label>
          <input
            required
            maxLength={2}
            value={f.avatar}
            onChange={(e) => set('avatar', e.target.value.trim().toUpperCase())}
            className="newsletter-input"
            style={{ width: '100%', textTransform: 'uppercase' }}
            placeholder="e.g. T"
          />
        </div>

        <div className="col-md-8">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Role / Location *</label>
          <input
            required
            value={f.role}
            onChange={(e) => set('role', e.target.value)}
            className="newsletter-input"
            style={{ width: '100%' }}
            placeholder="e.g. Verified Buyer · Hyderabad"
          />
        </div>

        <div className="col-md-4">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Rating (1-5) *</label>
          <select
            value={f.rating}
            onChange={(e) => set('rating', Number(e.target.value))}
            className="newsletter-input"
            style={{ width: '100%', padding: '0 12px', height: '48px' }}
          >
            <option value={5}>5 Stars ★★★★★</option>
            <option value={4}>4 Stars ★★★★</option>
            <option value={3}>3 Stars ★★★</option>
            <option value={2}>2 Stars ★★</option>
            <option value={1}>1 Star ★</option>
          </select>
        </div>

        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Review Text *</label>
          <textarea
            required
            rows={5}
            value={f.text}
            onChange={(e) => set('text', e.target.value)}
            className="newsletter-input"
            style={{ width: '100%' }}
            placeholder="Write the client's review here..."
          />
        </div>
      </div>

      {err && <p style={{ color: '#D95F5F', marginTop: 12 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}

      <div className="d-flex gap-3 mt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.25rem' }}>
        <button type="submit" disabled={saving} className="btn-primary-custom" style={{ justifyContent: 'center', minWidth: 150 }}>
          <i className="fa-solid fa-save me-2"></i>
          <span>{saving ? 'Saving…' : (id ? 'Save changes' : 'Add Testimonial')}</span>
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline-custom" style={{ minWidth: 120 }}>
          <i className="fa-solid fa-arrow-left me-2"></i>
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
}
