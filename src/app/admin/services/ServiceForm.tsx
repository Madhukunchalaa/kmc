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

const EMPTY: Initial = {
  slug: '', title: '', tagline: '', desc: '', image: '', icon: 'fa-solid fa-sparkles', price: 0, durationMins: 30, bullets: [], active: true
};

export default function ServiceForm({ id, initial }: { id?: string; initial?: Initial }) {
  const router = useRouter();
  const [f, setF] = useState<Initial>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const set = <K extends keyof Initial>(k: K, v: Initial[K]) => setF((s) => ({ ...s, [k]: v }));

  // File upload handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setErr(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.reason || 'Upload failed');
      }

      set('image', data.url);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'File upload error';
      setErr(msg);
    } finally {
      setUploading(false);
    }
  };

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
      if (!data.ok) {
        setErr(data.reason || 'Failed');
        setSaving(false);
        return;
      }
      router.push('/admin/services');
      router.refresh();
    } catch {
      setErr('Network error');
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ background: '#fff', padding: 24, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', maxWidth: 820, marginTop: 16 }}>
      <div className="row g-3">
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Title *</label>
          <input required value={f.title} onChange={(e) => set('title', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Tarot Reading Session" />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Slug *</label>
          <input required value={f.slug} onChange={(e) => set('slug', e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. tarot-reading" />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Tagline</label>
          <input value={f.tagline} onChange={(e) => set('tagline', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Connect with your guides and find clarity." />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Description *</label>
          <textarea required rows={4} value={f.desc} onChange={(e) => set('desc', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="Describe what this service entails..." />
        </div>

        <div className="col-md-8">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Image URL / Local File *</label>
          <div className="d-flex gap-2 mb-2">
            <input required type="text" value={f.image} onChange={(e) => set('image', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="/images/services/..." />
            <div style={{ position: 'relative' }}>
              <input type="file" id="service-image-upload" style={{ display: 'none' }} accept="image/*" onChange={handleFileUpload} disabled={uploading} />
              <label htmlFor="service-image-upload" className="btn-outline-custom" style={{ cursor: 'pointer', margin: 0, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', height: '100%', padding: '0 16px' }}>
                <i className={`fa-solid ${uploading ? 'fa-spinner fa-spin' : 'fa-upload'} me-2`}></i>
                {uploading ? 'Uploading...' : 'Upload Image'}
              </label>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '0.78rem', color: '#888' }}>Upload a local image file directly or paste an absolute image link.</p>
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

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Icon (FontAwesome class name)</label>
          <input value={f.icon} onChange={(e) => set('icon', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. fa-solid fa-wand-magic-sparkles" />
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
          <textarea rows={4} value={f.bullets.join('\n')} onChange={(e) => set('bullets', e.target.value.split('\n').map((s) => s.trim()).filter(Boolean))} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. 30 Minutes Live Session&#10;Q&A session included&#10;Audio recording of reading" />
        </div>
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
