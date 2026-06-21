'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Tier {
  label: string;
  price: number;
  usdPrice: number;
}

interface Initial {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: string;
  price: number;
  usdPrice: number;
  durationMins: number;
  bullets: string[];
  tiers: Tier[];
  active: boolean;
}

const EMPTY: Initial = {
  slug: '', title: '', tagline: '', desc: '', image: '',
  icon: 'fa-solid fa-sparkles', price: 0, usdPrice: 0,
  durationMins: 30, bullets: [], tiers: [], active: true,
};

export default function HomeServiceForm({ id, initial, pathLabel }: { id: string; initial?: Initial; pathLabel: string }) {
  const router = useRouter();
  const [f, setF] = useState<Initial>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [bulletText, setBulletText] = useState('');

  useEffect(() => {
    if (!err) return;
    const t = setTimeout(() => setErr(null), 5000);
    return () => clearTimeout(t);
  }, [err]);

  const set = <K extends keyof Initial>(k: K, v: Initial[K]) => setF((s) => ({ ...s, [k]: v }));

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setErr(null);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.reason || 'Upload failed');
      set('image', data.url);
    } catch (err) {
      setErr(err instanceof Error ? err.message : 'File upload error');
    } finally {
      setUploading(false);
    }
  };

  const addTier = () =>
    setF((s) => ({ ...s, tiers: [...s.tiers, { label: '', price: 0, usdPrice: 0 }] }));

  const updateTier = (idx: number, field: keyof Tier, value: string | number) =>
    setF((s) => {
      const tiers = [...s.tiers];
      tiers[idx] = { ...tiers[idx], [field]: value };
      return { ...s, tiers };
    });

  const removeTier = (idx: number) =>
    setF((s) => ({ ...s, tiers: s.tiers.filter((_, i) => i !== idx) }));

  const addBullet = () => {
    const text = bulletText.trim();
    if (!text) return;
    setF((s) => ({
      ...s,
      bullets: [...(s.bullets || []), text],
    }));
    setBulletText('');
  };

  const removeBullet = (idx: number) => {
    setF((s) => ({
      ...s,
      bullets: (s.bullets || []).filter((_, i) => i !== idx),
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setSaving(true);

    // Automatically set base price to the minimum tier price (or 0 if none)
    const basePrice = f.tiers.length > 0 ? Math.min(...f.tiers.map(t => t.price)) : f.price;
    const baseUsdPrice = f.tiers.length > 0 ? Math.min(...f.tiers.map(t => t.usdPrice)) : f.usdPrice;

    const updatedData = {
      ...f,
      price: basePrice,
      usdPrice: baseUsdPrice
    };

    try {
      const res = await fetch(`/api/admin/services/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      const data = await res.json();
      if (!data.ok) { setErr(data.reason || 'Failed'); setSaving(false); return; }
      router.push('/admin/home-services');
      router.refresh();
    } catch {
      setErr('Network error');
      setSaving(false);
    }
  };

  const labelStyle: React.CSSProperties = { fontSize: '0.85rem', fontWeight: 600 };
  const inputStyle: React.CSSProperties = { width: '100%' };

  return (
    <form onSubmit={submit} style={{ background: '#fff', padding: '24px 30px', borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', maxWidth: 860, marginTop: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '12px', marginBottom: '20px' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary,#C8956C)', textTransform: 'uppercase', background: 'rgba(200,149,108,0.1)', padding: '4px 10px', borderRadius: '30px' }}>
          {pathLabel}
        </span>
        <h4 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
          Edit Homepage Card Content
        </h4>
      </div>

      <div className="row g-3">
        {/* Title */}
        <div className="col-md-6">
          <label style={labelStyle}>Card Title *</label>
          <input required value={f.title} onChange={(e) => set('title', e.target.value)} className="newsletter-input" style={inputStyle} placeholder="e.g. Tarot Reading Session" />
        </div>

        {/* Icon */}
        <div className="col-md-6">
          <label style={labelStyle}>Card Icon (FontAwesome class) *</label>
          <input required value={f.icon} onChange={(e) => set('icon', e.target.value)} className="newsletter-input" style={inputStyle} placeholder="e.g. fa-solid fa-headphones" />
        </div>

        {/* Tagline */}
        <div className="col-12">
          <label style={labelStyle}>Card Tagline / Sub-heading</label>
          <input value={f.tagline} onChange={(e) => set('tagline', e.target.value)} className="newsletter-input" style={inputStyle} placeholder="e.g. CLARITY FOR THE QUESTIONS YOU CAN'T ANSWER ALONE" />
        </div>

        {/* Description */}
        <div className="col-12">
          <label style={labelStyle}>Card Description *</label>
          <textarea required rows={4} value={f.desc} onChange={(e) => set('desc', e.target.value)} className="newsletter-input" style={inputStyle} placeholder="Describe the service..." />
        </div>

        {/* Image */}
        <div className="col-md-8">
          <label style={{ ...labelStyle, display: 'block', marginBottom: '0.5rem' }}>Card Image *</label>
          <div className="d-flex gap-2 mb-2">
            <div>
              <input type="file" id="service-image-upload" style={{ display: 'none' }} accept="image/*" onChange={handleFileUpload} disabled={uploading} />
              <label htmlFor="service-image-upload" className="btn-outline-custom" style={{ cursor: 'pointer', margin: 0, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', height: '48px', padding: '0 24px' }}>
                <i className={`fa-solid ${uploading ? 'fa-spinner fa-spin' : 'fa-upload'} me-2`}></i>
                {uploading ? 'Uploading...' : 'Upload Image'}
              </label>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '0.78rem', color: '#888' }}>Upload a preview image displayed in the card header.</p>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          {f.image ? (
            <div style={{ position: 'relative', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: 4, background: '#FAF6F1' }}>
              <img src={f.image} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain', borderRadius: 8 }} />
            </div>
          ) : (
            <div style={{ width: 100, height: 100, borderRadius: 12, border: '2px dashed rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '0.75rem' }}>
              No image
            </div>
          )}
        </div>

        {/* Bullet Points */}
        <div className="col-12" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '16px', marginTop: '16px' }}>
          <label style={labelStyle}>Bullet Features (shown on card list)</label>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <input value={bulletText} onChange={(e) => setBulletText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addBullet())} className="newsletter-input" style={{ flex: 1 }} placeholder="e.g. Voice notes or live 1-on-1 audio" />
            <button type="button" onClick={addBullet} className="btn-outline-custom" style={{ height: '44px', padding: '0 20px' }}>
              Add
            </button>
          </div>
          <ul style={{ padding: 0, display: 'grid', gap: 6 }}>
            {f.bullets.map((b, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8F9FA', padding: '8px 12px', borderRadius: 8, fontSize: '0.85rem' }}>
                <span>✦ {b}</span>
                <button type="button" onClick={() => removeBullet(idx)} style={{ background: 'none', border: 'none', color: '#D95F5F', cursor: 'pointer', padding: '0 4px' }}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Tiers */}
        <div className="col-12" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '16px', marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <label style={labelStyle}>Price Tiers (determines card price range)</label>
            <button type="button" onClick={addTier} className="btn-outline-custom" style={{ padding: '4px 12px', fontSize: '0.75rem', height: 'auto' }}>
              + Add Tier
            </button>
          </div>

          <div style={{ display: 'grid', gap: 10 }}>
            {f.tiers.map((t, idx) => (
              <div key={idx} className="row g-2 align-items-center" style={{ background: '#FAF6F1', padding: 12, borderRadius: 10, border: '1px solid rgba(200,149,108,0.1)' }}>
                <div className="col-md-5">
                  <label style={{ fontSize: '0.75rem', color: '#666' }}>Label *</label>
                  <input required value={t.label} onChange={(e) => updateTier(idx, 'label', e.target.value)} className="newsletter-input" style={{ width: '100%', padding: '6px 12px' }} placeholder="e.g. 30 min audio call" />
                </div>
                <div className="col-md-3">
                  <label style={{ fontSize: '0.75rem', color: '#666' }}>Price (INR) *</label>
                  <input required type="number" min={0} value={t.price || ''} onChange={(e) => updateTier(idx, 'price', Number(e.target.value))} className="newsletter-input" style={{ width: '100%', padding: '6px 12px' }} />
                </div>
                <div className="col-md-3">
                  <label style={{ fontSize: '0.75rem', color: '#666' }}>Price (USD) *</label>
                  <input required type="number" min={0} value={t.usdPrice || ''} onChange={(e) => updateTier(idx, 'usdPrice', Number(e.target.value))} className="newsletter-input" style={{ width: '100%', padding: '6px 12px' }} />
                </div>
                <div className="col-md-1 text-center" style={{ marginTop: 20 }}>
                  <button type="button" onClick={() => removeTier(idx)} style={{ background: 'none', border: 'none', color: '#D95F5F', cursor: 'pointer' }}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            ))}
            {f.tiers.length === 0 && (
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#999', textAlign: 'center', padding: '12px 0' }}>
                No tiers added. Add at least one tier to calculate the price range.
              </p>
            )}
          </div>
        </div>
      </div>

      {err && <p style={{ color: '#D95F5F', marginTop: 12 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}

      <div className="d-flex gap-3 mt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.25rem' }}>
        <button type="submit" disabled={saving || uploading} className="btn-primary-custom" style={{ justifyContent: 'center', minWidth: 150 }}>
          <i className="fa-solid fa-save me-2"></i>
          <span>{saving ? 'Saving…' : 'Save Changes'}</span>
        </button>
        <button type="button" onClick={() => router.push('/admin/home-services')} className="btn-outline-custom" style={{ justifyContent: 'center', minWidth: 100 }}>
          Cancel
        </button>
      </div>
    </form>
  );
}
