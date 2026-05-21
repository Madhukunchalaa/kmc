'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Initial {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: string;
  price: number;
  durationMins: number;
  bullets: string[];
  active: boolean;
}

const EMPTY: Initial = { slug: '', title: '', tagline: '', desc: '', image: '', icon: 'fa-solid fa-sparkles', price: 0, durationMins: 30, bullets: [], active: true };

export default function ServiceForm({ id, initial }: { id?: string; initial?: Initial }) {
  const router = useRouter();
  const [f, setF] = useState<Initial>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const set = <K extends keyof Initial>(k: K, v: Initial[K]) => setF((s) => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setSaving(true);
    try {
      const url = id ? `/api/admin/services/${id}` : '/api/admin/services';
      const method = id ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: { 'content-type': 'application/json' }, body: JSON.stringify(f) });
      const data = await res.json();
      if (!data.ok) { setErr(data.reason || 'Failed'); setSaving(false); return; }
      router.push('/admin/services');
      router.refresh();
    } catch { setErr('Network error'); setSaving(false); }
  };

  return (
    <form onSubmit={submit} style={{ background: '#fff', padding: 24, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', maxWidth: 820, marginTop: 16 }}>
      <div className="row g-3">
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Slug *</label>
          <input required value={f.slug} onChange={(e) => set('slug', e.target.value.toLowerCase())} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Title *</label>
          <input required value={f.title} onChange={(e) => set('title', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Tagline</label>
          <input value={f.tagline} onChange={(e) => set('tagline', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Description *</label>
          <textarea required rows={4} value={f.desc} onChange={(e) => set('desc', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Image URL *</label>
          <input required type="url" value={f.image} onChange={(e) => set('image', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Icon (FontAwesome class)</label>
          <input value={f.icon} onChange={(e) => set('icon', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Price (₹) *</label>
          <input required type="number" min={0} value={f.price} onChange={(e) => set('price', Number(e.target.value))} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Duration (min) *</label>
          <input required type="number" min={5} value={f.durationMins} onChange={(e) => set('durationMins', Number(e.target.value))} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>What&apos;s included (one bullet per line)</label>
          <textarea rows={4} value={f.bullets.join('\n')} onChange={(e) => set('bullets', e.target.value.split('\n').map((s) => s.trim()).filter(Boolean))} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.9rem', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={f.active} onChange={(e) => set('active', e.target.checked)} />
            Visible on the public site
          </label>
        </div>
      </div>
      {err && <p style={{ color: '#D95F5F', marginTop: 12 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}
      <div className="d-flex gap-3 mt-4">
        <button type="submit" disabled={saving} className="btn-primary-custom" style={{ justifyContent: 'center' }}>
          <i className="fa-solid fa-save"></i><span>{saving ? 'Saving…' : (id ? 'Save changes' : 'Create service')}</span>
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline-custom">
          <i className="fa-solid fa-arrow-left"></i><span>Cancel</span>
        </button>
      </div>
    </form>
  );
}
