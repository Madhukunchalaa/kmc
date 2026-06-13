'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Initial {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  published: boolean;
}

const EMPTY: Initial = {
  slug: '', title: '', content: '', excerpt: '', image: '', author: 'Kriss', published: false,
};

export default function BlogForm({ id, initial }: { id?: string; initial?: Initial }) {
  const router = useRouter();
  const [f, setF] = useState<Initial>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (initial) setF(initial);
  }, [initial]);

  const set = <K extends keyof Initial>(k: K, v: Initial[K]) => setF((s) => ({ ...s, [k]: v }));

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setErr(null);

    try {
      // 1. Get presigned URL
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, contentType: file.type || 'image/png' }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.reason || 'Upload failed to initialize');
      }

      // 2. Upload directly to R2
      const uploadRes = await fetch(data.uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type || 'image/png' },
        body: file,
      });

      if (!uploadRes.ok) {
        throw new Error('Direct upload to R2 failed');
      }

      // 3. Set the final public URL
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
      const url = id ? `/api/admin/blogs/${id}` : '/api/admin/blogs';
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
      router.push('/admin/blogs');
      router.refresh();
    } catch {
      setErr('Network error');
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ background: '#fff', padding: 24, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', maxWidth: 880, marginTop: 16 }}>
      <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary,#C8956C)' }}>
        Blog Post Details
      </h3>
      
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Title *</label>
          <input required value={f.title} onChange={(e) => set('title', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Benefits of Amethyst" />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Slug (URL slug) *</label>
          <input required value={f.slug} onChange={(e) => set('slug', e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. benefits-of-amethyst" />
        </div>

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Author *</label>
          <input required value={f.author} onChange={(e) => set('author', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>

        <div className="col-md-6"></div>

        <div className="col-md-8">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Cover Image URL / Local File *</label>
          <div className="d-flex gap-2 mb-2">
            <input required type="text" value={f.image} onChange={(e) => set('image', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="/images/blogs/..." />
            <div style={{ position: 'relative' }}>
              <input type="file" id="image-upload" style={{ display: 'none' }} accept="image/*" onChange={handleFileUpload} disabled={uploading} />
              <label htmlFor="image-upload" className="btn-outline-custom" style={{ cursor: 'pointer', margin: 0, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', height: '100%', padding: '0 16px' }}>
                <i className={`fa-solid ${uploading ? 'fa-spinner fa-spin' : 'fa-upload'} me-2`}></i>
                {uploading ? 'Uploading...' : 'Upload Image'}
              </label>
            </div>
          </div>
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

        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Excerpt *</label>
          <textarea required rows={3} value={f.excerpt} onChange={(e) => set('excerpt', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="Short summary..." />
        </div>

        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Full Content (HTML allowed) *</label>
          <textarea required rows={12} value={f.content} onChange={(e) => set('content', e.target.value)} className="newsletter-input" style={{ width: '100%', fontFamily: 'monospace' }} placeholder="Write your blog content here..." />
        </div>

        <div className="col-12">
          <label style={{ fontSize: '0.9rem', display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}>
            <input type="checkbox" checked={f.published} onChange={(e) => set('published', e.target.checked)} style={{ width: 16, height: 16 }} />
            <span>Publish Blog immediately</span>
          </label>
        </div>
      </div>

      {err && <p style={{ color: '#D95F5F', marginTop: 12 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}

      <div className="d-flex gap-3 mt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.25rem' }}>
        <button type="submit" disabled={saving || uploading} className="btn-primary-custom" style={{ justifyContent: 'center', minWidth: 150 }}>
          <i className="fa-solid fa-save me-2"></i>
          <span>{saving ? 'Saving…' : (id ? 'Save changes' : 'Create blog')}</span>
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline-custom" style={{ minWidth: 120 }}>
          <i className="fa-solid fa-arrow-left me-2"></i>
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
}
