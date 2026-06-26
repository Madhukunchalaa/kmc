'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductFilters({ categories }: { categories: string[] }) {
  const router = useRouter();
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get('q') || '');
  const category = sp.get('category') || '';
  const status = sp.get('status') || '';
  const sort = sp.get('sort') || '';

  // Apply a change to one or more params and navigate (resets to page 1).
  const navigate = (changes: Record<string, string>) => {
    const params = new URLSearchParams(sp.toString());
    for (const [k, v] of Object.entries(changes)) {
      if (v) params.set(k, v);
      else params.delete(k);
    }
    params.delete('page');
    const qs = params.toString();
    router.push(qs ? `/admin/products?${qs}` : '/admin/products');
  };

  const hasFilters = !!(q || category || status || sort);

  return (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: 14, marginBottom: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        {/* Search (Enter or button to apply) */}
        <form
          onSubmit={(e) => { e.preventDefault(); navigate({ q }); }}
          style={{ flex: '1 1 240px', position: 'relative', margin: 0 }}
        >
          <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.9rem' }}></i>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, slug or subcategory..."
            className="newsletter-input"
            style={{ width: '100%', paddingLeft: '34px' }}
          />
        </form>

        {/* Category — applies immediately on change */}
        <div style={{ flex: '1 1 160px' }}>
          <select value={category} onChange={(e) => navigate({ category: e.target.value })} className="newsletter-input" style={{ width: '100%' }}>
            <option value="">— All Categories —</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Status — applies immediately */}
        <div style={{ flex: '1 1 120px' }}>
          <select value={status} onChange={(e) => navigate({ status: e.target.value })} className="newsletter-input" style={{ width: '100%' }}>
            <option value="">— All Status —</option>
            <option value="live">Live</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>

        {/* Sort — applies immediately */}
        <div style={{ flex: '1 1 150px' }}>
          <select value={sort} onChange={(e) => navigate({ sort: e.target.value })} className="newsletter-input" style={{ width: '100%' }}>
            <option value="">Sort: Newest</option>
            <option value="name">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
          </select>
        </div>

        <button type="button" onClick={() => navigate({ q })} className="btn-primary-custom" style={{ padding: '0 18px', height: '42px' }}>
          Search
        </button>

        {hasFilters && (
          <button type="button" onClick={() => { setQ(''); router.push('/admin/products'); }} className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '42px', padding: '0 16px' }}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
