'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Initial {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number | null;
  image: string;
  badge: 'Popular' | 'New' | 'Sale' | 'Bestseller' | null;
  desc: string;
  longDesc: string;
  chakras: string[];
  stock: number;
  active: boolean;
}

const EMPTY: Initial = {
  slug: '', name: '', category: '', subcategory: '', price: 0, originalPrice: null,
  image: '', badge: null, desc: '', longDesc: '', chakras: [], stock: 99, active: true,
};

export default function ProductForm({ id, initial }: { id?: string; initial?: Initial }) {
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
      const url = id ? `/api/admin/products/${id}` : '/api/admin/products';
      const method = id ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(f),
      });
      const data = await res.json();
      if (!data.ok) { setErr(data.reason || 'Failed'); setSaving(false); return; }
      router.push('/admin/products');
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
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name *</label>
          <input required value={f.name} onChange={(e) => set('name', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Category *</label>
          <input required value={f.category} onChange={(e) => set('category', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Subcategory *</label>
          <input required value={f.subcategory} onChange={(e) => set('subcategory', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-4">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Price (₹) *</label>
          <input required type="number" min={0} value={f.price} onChange={(e) => set('price', Number(e.target.value))} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-4">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Original Price (₹)</label>
          <input type="number" min={0} value={f.originalPrice ?? ''} onChange={(e) => set('originalPrice', e.target.value ? Number(e.target.value) : null)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-4">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Stock</label>
          <input type="number" min={0} value={f.stock} onChange={(e) => set('stock', Number(e.target.value))} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Image URL *</label>
          <input required type="url" value={f.image} onChange={(e) => set('image', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="https://…" />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Badge</label>
          <select value={f.badge ?? ''} onChange={(e) => set('badge', (e.target.value || null) as Initial['badge'])} className="newsletter-input" style={{ width: '100%' }}>
            <option value="">— None —</option>
            <option value="Popular">Popular</option>
            <option value="New">New</option>
            <option value="Sale">Sale</option>
            <option value="Bestseller">Bestseller</option>
          </select>
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Chakras (comma-separated)</label>
          <input value={f.chakras.join(', ')} onChange={(e) => set('chakras', e.target.value.split(',').map((s) => s.trim()).filter(Boolean))} className="newsletter-input" style={{ width: '100%' }} placeholder="Heart, Crown" />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Short description *</label>
          <textarea required rows={2} value={f.desc} onChange={(e) => set('desc', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Long description</label>
          <textarea rows={5} value={f.longDesc} onChange={(e) => set('longDesc', e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-12">
          <label style={{ fontSize: '0.9rem', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={f.active} onChange={(e) => set('active', e.target.checked)} />
            Visible on the storefront
          </label>
        </div>
      </div>

      {err && <p style={{ color: '#D95F5F', marginTop: 12 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}

      <div className="d-flex gap-3 mt-4">
        <button type="submit" disabled={saving} className="btn-primary-custom" style={{ justifyContent: 'center' }}>
          <i className="fa-solid fa-save"></i><span>{saving ? 'Saving…' : (id ? 'Save changes' : 'Create product')}</span>
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline-custom">
          <i className="fa-solid fa-arrow-left"></i><span>Cancel</span>
        </button>
      </div>
    </form>
  );
}
