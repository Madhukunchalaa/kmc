'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ScrollFade from '@/components/ScrollFade';
import type { CatalogProduct } from '@/lib/catalog';

const CATEGORIES: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'bracelets', label: 'Bracelets' },
  { key: 'malas', label: 'Malas' },
  { key: 'pendants', label: 'Pendants' },
  { key: 'raw', label: 'Raw Crystals' },
  { key: 'spheres', label: 'Spheres' },
  { key: 'towers', label: 'Towers' },
  { key: 'trees', label: 'Trees' },
  { key: 'evileye', label: 'Evil Eye' },
  { key: 'silver', label: 'Silver Jewellery' },
];

const SORTS = [
  { key: 'featured', label: 'Featured' },
  { key: 'price-asc', label: 'Price: Low → High' },
  { key: 'price-desc', label: 'Price: High → Low' },
  { key: 'name', label: 'Name (A–Z)' },
];

// Reshape DB product to the legacy { id, ... } shape ProductCard expects.
function toLegacy(p: CatalogProduct) {
  return {
    id: p.slug,
    name: p.name,
    category: p.category,
    subcategory: p.subcategory,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    badge: p.badge,
    desc: p.desc,
    chakras: p.chakras,
  };
}

export default function ShopFilters({ products }: { products: CatalogProduct[] }) {
  const [activeCat, setActiveCat] = useState('all');
  const [sort, setSort] = useState('featured');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = activeCat === 'all' ? [...products] : products.filter((p) => p.category === activeCat);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q),
      );
    }
    switch (sort) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return list;
  }, [products, activeCat, sort, query]);

  return (
    <>
      <div className="row g-3 align-items-center mb-4">
        <div className="col-lg-6">
          <div style={{ position: 'relative' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', top: '50%', left: '14px', transform: 'translateY(-50%)', color: '#999' }}></i>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search crystals, e.g. amethyst, mala, sagittarius..."
              className="newsletter-input"
              style={{ width: '100%', paddingLeft: '40px' }}
            />
          </div>
        </div>
        <div className="col-lg-3 ms-auto">
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="newsletter-input" style={{ width: '100%' }}>
            {SORTS.map((s) => <option key={s.key} value={s.key}>Sort: {s.label}</option>)}
          </select>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-5">
        {CATEGORIES.map((c) => {
          const active = activeCat === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setActiveCat(c.key)}
              className="crystal-tag"
              style={{
                cursor: 'pointer',
                border: '1px solid', borderColor: active ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.1)',
                background: active ? 'var(--primary,#C8956C)' : 'transparent',
                color: active ? '#fff' : 'inherit',
                padding: '0.4rem 1rem', fontWeight: 600,
              }}
            >{c.label}</button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-5">
          <p className="section-subtitle">No crystals match your search. Try a different keyword.</p>
          <button className="btn-outline-custom mt-3" onClick={() => { setQuery(''); setActiveCat('all'); }}>
            <i className="fa-solid fa-rotate-right"></i><span>Reset Filters</span>
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {filtered.map((p, idx) => (
            <div className="col-sm-6 col-lg-4" key={p.id}>
              <ScrollFade delay={Math.min(idx, 6) * 60}>
                <ProductCard product={toLegacy(p)} />
              </ScrollFade>
            </div>
          ))}
        </div>
      )}

      <p className="text-center mt-5" style={{ color: 'var(--text-light,#777)' }}>
        Showing {filtered.length} of {products.length} crystals.
      </p>
    </>
  );
}
