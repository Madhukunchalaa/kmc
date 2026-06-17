'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Tier {
  label: string;
  price: number;
  usdPrice: number;
}

interface ServiceOption {
  id: string;
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
  options: ServiceOption[];
  active: boolean;
}

const EMPTY: Initial = {
  slug: '', title: '', tagline: '', desc: '', image: '',
  icon: 'fa-solid fa-sparkles', price: 0, usdPrice: 0,
  durationMins: 30, bullets: [], tiers: [], options: [], active: true,
};

export default function ServiceForm({ id, initial }: { id?: string; initial?: Initial }) {
  const router = useRouter();
  const [f, setF] = useState<Initial>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

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

  const addOption = () => {
    const newId = `option_${Date.now()}`;
    setF((s) => ({ ...s, options: [...s.options, { id: newId, label: '', price: 0, usdPrice: 0 }] }));
  };

  const updateOption = (idx: number, field: keyof ServiceOption, value: string | number) =>
    setF((s) => {
      const options = [...s.options];
      options[idx] = { ...options[idx], [field]: value };
      return { ...s, options };
    });

  const removeOption = (idx: number) =>
    setF((s) => ({ ...s, options: s.options.filter((_, i) => i !== idx) }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setSaving(true);
    try {
      const url = id ? `/api/admin/services/${id}` : '/api/admin/services';
      const method = id ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(f),
      });
      const data = await res.json();
      if (!data.ok) { setErr(data.reason || 'Failed'); setSaving(false); return; }
      router.push('/admin/services');
      router.refresh();
    } catch {
      setErr('Network error');
      setSaving(false);
    }
  };

  const labelStyle: React.CSSProperties = { fontSize: '0.85rem', fontWeight: 600 };
  const inputStyle: React.CSSProperties = { width: '100%' };

  return (
    <form onSubmit={submit} style={{ background: '#fff', padding: 24, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', maxWidth: 860, marginTop: 16 }}>
      <div className="row g-3">
        {/* Title + Slug */}
        <div className="col-md-6">
          <label style={labelStyle}>Title *</label>
          <input required value={f.title} onChange={(e) => set('title', e.target.value)} className="newsletter-input" style={inputStyle} placeholder="e.g. Tarot Reading Session" />
        </div>
        <div className="col-md-6">
          <label style={labelStyle}>Slug *</label>
          <input required value={f.slug} onChange={(e) => set('slug', e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))} className="newsletter-input" style={inputStyle} placeholder="e.g. tarot-reading" />
        </div>

        {/* Tagline */}
        <div className="col-12">
          <label style={labelStyle}>Tagline</label>
          <input value={f.tagline} onChange={(e) => set('tagline', e.target.value)} className="newsletter-input" style={inputStyle} placeholder="e.g. Connect with your guides and find clarity." />
        </div>

        {/* Description */}
        <div className="col-12">
          <label style={labelStyle}>Description *</label>
          <textarea required rows={4} value={f.desc} onChange={(e) => set('desc', e.target.value)} className="newsletter-input" style={inputStyle} placeholder="Describe what this service entails..." />
        </div>

        {/* Image */}
        <div className="col-md-8">
          <label style={{ ...labelStyle, display: 'block', marginBottom: '0.5rem' }}>Service Image *</label>
          <div className="d-flex gap-2 mb-2">
            <div style={{ position: 'relative' }}>
              <input type="file" id="service-image-upload" style={{ display: 'none' }} accept="image/*" onChange={handleFileUpload} disabled={uploading} />
              <label htmlFor="service-image-upload" className="btn-outline-custom" style={{ cursor: 'pointer', margin: 0, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', height: '48px', padding: '0 24px' }}>
                <i className={`fa-solid ${uploading ? 'fa-spinner fa-spin' : 'fa-upload'} me-2`}></i>
                {uploading ? 'Uploading...' : 'Upload Image'}
              </label>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '0.78rem', color: '#888' }}>Select a high-quality local image file.</p>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          {f.image ? (
            <div style={{ position: 'relative', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: 4, background: '#FAF6F1' }}>
              <img src={f.image} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain', borderRadius: 8 }} />
              <button type="button" onClick={() => set('image', '')} style={{ position: 'absolute', top: -8, right: -8, width: 22, height: 22, borderRadius: '50%', background: '#D95F5F', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', cursor: 'pointer' }}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ) : (
            <div style={{ width: 100, height: 100, borderRadius: 12, border: '2px dashed rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '0.75rem' }}>
              <i className="fa-regular fa-image" style={{ fontSize: '1.5rem', marginBottom: 6 }}></i>
              No image
            </div>
          )}
        </div>

        {/* Icon + Base Price + USD Price + Duration */}
        <div className="col-md-4">
          <label style={labelStyle}>Icon (FontAwesome class)</label>
          <input value={f.icon} onChange={(e) => set('icon', e.target.value)} className="newsletter-input" style={inputStyle} placeholder="e.g. fa-solid fa-wand-magic-sparkles" />
        </div>
        <div className="col-md-2">
          <label style={labelStyle}>Base Price (₹ INR) *</label>
          <input required type="number" min={0} value={f.price} onChange={(e) => set('price', Number(e.target.value))} className="newsletter-input" style={inputStyle} />
        </div>
        <div className="col-md-2">
          <label style={labelStyle}>Base Price ($ USD)</label>
          <input type="number" min={0} value={f.usdPrice} onChange={(e) => set('usdPrice', Number(e.target.value))} className="newsletter-input" style={inputStyle} />
        </div>
        <div className="col-md-2">
          <label style={labelStyle}>Duration (min)</label>
          <input type="number" min={5} value={f.durationMins} onChange={(e) => set('durationMins', Number(e.target.value))} className="newsletter-input" style={inputStyle} />
        </div>

        {/* Bullets */}
        <div className="col-12">
          <label style={labelStyle}>What&apos;s included (one bullet per line)</label>
          <textarea rows={4} value={f.bullets.join('\n')} onChange={(e) => set('bullets', e.target.value.split('\n').map((s) => s.trim()).filter(Boolean))} className="newsletter-input" style={inputStyle} placeholder="e.g. 30 Minutes Live Session&#10;Q&A session included&#10;Audio recording of reading" />
        </div>

        {/* Pricing Tiers */}
        <div className="col-12">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <label style={labelStyle}>Pricing Tiers</label>
            <button type="button" onClick={addTier} className="btn-outline-custom" style={{ padding: '6px 16px', fontSize: '0.8rem' }}>
              <i className="fa-solid fa-plus me-1"></i> Add Tier
            </button>
          </div>
          {f.tiers.length === 0 && (
            <p style={{ fontSize: '0.8rem', color: '#aaa', margin: 0 }}>No tiers yet — click "Add Tier" to create multiple pricing options.</p>
          )}
          <div style={{ display: 'grid', gap: 8 }}>
            {f.tiers.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 100px 36px', gap: 8, padding: '0 12px', fontSize: '0.72rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <span>Title shown to customer</span>
                <span>Price (₹ INR)</span>
                <span>Price ($ USD)</span>
                <span></span>
              </div>
            )}
            {f.tiers.map((tier, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 100px 36px', gap: 8, alignItems: 'center', padding: '8px 12px', background: '#FAF6F1', borderRadius: 8, border: '1px solid rgba(0,0,0,0.07)' }}>
                <input
                  value={tier.label}
                  onChange={(e) => updateTier(idx, 'label', e.target.value)}
                  className="newsletter-input"
                  style={{ margin: 0 }}
                  placeholder="e.g. Single Reading (Yes/No)"
                />
                <input
                  type="number"
                  min={0}
                  value={tier.price}
                  onChange={(e) => updateTier(idx, 'price', Number(e.target.value))}
                  className="newsletter-input"
                  style={{ margin: 0 }}
                  placeholder="₹ Price"
                />
                <input
                  type="number"
                  min={0}
                  value={tier.usdPrice}
                  onChange={(e) => updateTier(idx, 'usdPrice', Number(e.target.value))}
                  className="newsletter-input"
                  style={{ margin: 0 }}
                  placeholder="$ Price"
                />
                <button type="button" onClick={() => removeTier(idx)} style={{ width: 32, height: 32, borderRadius: 6, background: '#D95F5F', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-trash" style={{ fontSize: '0.7rem' }}></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Service Options (e.g. reading types) */}
        <div className="col-12">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <label style={labelStyle}>Service Options (checkboxes - for tarot, etc)</label>
            <button type="button" onClick={addOption} className="btn-outline-custom" style={{ padding: '6px 16px', fontSize: '0.8rem' }}>
              <i className="fa-solid fa-plus me-1"></i> Add Option
            </button>
          </div>
          {f.options.length === 0 && (
            <p style={{ fontSize: '0.8rem', color: '#aaa', margin: 0, marginBottom: '1rem' }}>No options yet — click "Add Option" to create selectable reading types or service variants.</p>
          )}
          <div style={{ display: 'grid', gap: 8 }}>
            {f.options.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 100px 36px', gap: 8, padding: '0 12px', fontSize: '0.72rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <span>Title shown to customer</span>
                <span>Price (₹ INR)</span>
                <span>Price ($ USD)</span>
                <span></span>
              </div>
            )}
            {f.options.map((opt, idx) => (
              <div key={opt.id} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 100px 36px', gap: 8, alignItems: 'center', padding: '8px 12px', background: '#FFF5E6', borderRadius: 8, border: '1px solid rgba(200,149,108,0.15)' }}>
                <input
                  value={opt.label}
                  onChange={(e) => updateOption(idx, 'label', e.target.value)}
                  className="newsletter-input"
                  style={{ margin: 0 }}
                  placeholder="e.g. SINGLE READING (YES/NO)"
                />
                <input
                  type="number"
                  min={0}
                  value={opt.price}
                  onChange={(e) => updateOption(idx, 'price', Number(e.target.value))}
                  className="newsletter-input"
                  style={{ margin: 0 }}
                  placeholder="₹ Price"
                />
                <input
                  type="number"
                  min={0}
                  value={opt.usdPrice}
                  onChange={(e) => updateOption(idx, 'usdPrice', Number(e.target.value))}
                  className="newsletter-input"
                  style={{ margin: 0 }}
                  placeholder="$ Price"
                />
                <button type="button" onClick={() => removeOption(idx)} style={{ width: 32, height: 32, borderRadius: 6, background: '#D95F5F', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-trash" style={{ fontSize: '0.7rem' }}></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Active toggle */}
        <div className="col-12">
          <label style={{ fontSize: '0.9rem', display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}>
            <input type="checkbox" checked={f.active} onChange={(e) => set('active', e.target.checked)} style={{ width: 16, height: 16 }} />
            <span>Visible on the public site (active status)</span>
          </label>
        </div>
      </div>

      {err && <p style={{ color: '#D95F5F', marginTop: 12 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}

      <div className="d-flex gap-3 mt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.25rem' }}>
        <button type="submit" disabled={saving || uploading} className="btn-primary-custom" style={{ justifyContent: 'center', minWidth: 150 }}>
          <i className="fa-solid fa-save me-2"></i>
          <span>{saving ? 'Saving…' : (id ? 'Save changes' : 'Create service')}</span>
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline-custom" style={{ minWidth: 120 }}>
          <i className="fa-solid fa-arrow-left me-2"></i>
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
}
