'use client';

import { useMemo, useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import ScrollFade from '@/components/ScrollFade';
import type { CatalogProduct } from '@/lib/catalog';

const ITEMS_PER_PAGE = 12;

const CATEGORIES: { key: string; label: string; icon: string }[] = [
  { key: 'all', label: 'All Collections', icon: 'fa-solid fa-gem' },
  { key: 'bracelets', label: 'Bracelets', icon: 'fa-solid fa-circle-notch' },
  { key: 'malas', label: 'Malas', icon: 'fa-solid fa-ellipsis-h' },
  { key: 'pendants', label: 'Pendants', icon: 'fa-solid fa-certificate' },
  { key: 'raw', label: 'Raw Crystals', icon: 'fa-solid fa-mountain' },
  { key: 'spheres', label: 'Spheres', icon: 'fa-solid fa-circle' },
  { key: 'towers', label: 'Towers', icon: 'fa-solid fa-monument' },
  { key: 'trees', label: 'Trees', icon: 'fa-solid fa-tree' },
  { key: 'evileye', label: 'Evil Eye', icon: 'fa-solid fa-eye' },
  { key: 'silver', label: 'Silver Jewellery', icon: 'fa-solid fa-award' },
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
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever category, sort, or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCat, sort, query]);

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

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);


  return (
    <div className="row g-4">
      {/* Sidebar Collections Column */}
      <div className="col-lg-3">
        <div style={{
          position: 'sticky',
          top: '120px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FCFAF7 100%)',
          padding: '28px 24px',
          borderRadius: '30px',
          border: '1px solid rgba(200, 149, 108, 0.18)',
          boxShadow: '0 12px 40px rgba(45, 27, 14, 0.04)',
        }}>
          <h4 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            color: 'var(--dark-2)',
            fontWeight: 700,
            marginTop: 0,
            marginBottom: '1.5rem',
            paddingBottom: '12px',
            borderBottom: '2px solid rgba(200, 149, 108, 0.12)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            letterSpacing: '0.04em'
          }}>
            <i className="fa-solid fa-gem" style={{ color: 'var(--primary,#C8956C)', fontSize: '1.1rem' }}></i>
            Collections
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {CATEGORIES.map((c) => {
              const active = activeCat === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActiveCat(c.key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '16px',
                    border: 'none',
                    background: active 
                      ? 'linear-gradient(135deg, rgba(200, 149, 108, 0.15) 0%, rgba(200, 149, 108, 0.05) 100%)' 
                      : 'transparent',
                    color: active ? 'var(--dark-2)' : 'var(--text-light,#7A5C4A)',
                    cursor: 'pointer',
                    fontWeight: active ? 700 : 500,
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.04em',
                    transform: active ? 'translateX(4px)' : 'none',
                  }}
                  className="shop-sidebar-category-btn"
                >
                  <div 
                    className="category-icon-wrapper"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '12px',
                      background: active 
                        ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' 
                        : 'rgba(200, 149, 108, 0.08)',
                      color: active ? '#fff' : 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '14px',
                      boxShadow: active ? '0 4px 12px rgba(200, 149, 108, 0.25)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <i className={c.icon} style={{ fontSize: '0.9rem' }}></i>
                  </div>
                  <span style={{ flexGrow: 1 }}>{c.label}</span>
                  {active ? (
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem', color: 'var(--primary,#C8956C)', opacity: 0.8 }}></i>
                  ) : (
                    <i className="fa-solid fa-chevron-right hover-arrow" style={{ fontSize: '0.75rem', color: 'var(--primary,#C8956C)', opacity: 0, transition: 'all 0.3s ease' }}></i>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Catalog Column */}
      <div className="col-lg-9">
        <div className="row g-3 align-items-center mb-4">
          <div className="col-md-8">
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
          <div className="col-md-4">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="newsletter-input" style={{ width: '100%' }}>
              {SORTS.map((s) => <option key={s.key} value={s.key}>Sort: {s.label}</option>)}
            </select>
          </div>
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
            {paginatedProducts.map((p, idx) => (
              <div className="col-6 col-md-4" key={p.id}>
                <ScrollFade delay={Math.min(idx, 6) * 50}>
                  <ProductCard product={toLegacy(p)} />
                </ScrollFade>
              </div>
            ))}
          </div>
        )}

        {/* Circular Premium Pagination Controls */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            marginTop: 40,
            paddingTop: 24,
            borderTop: '1px solid rgba(200, 149, 108, 0.12)'
          }}>
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                height: 38,
                borderRadius: '50%',
                border: '1px solid rgba(200, 149, 108, 0.25)',
                background: '#fff',
                color: currentPage === 1 ? '#ccc' : 'var(--primary)',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
              }}
              className="pagination-arrow-btn"
            >
              <i className="fa-solid fa-chevron-left" style={{ fontSize: '0.78rem' }}></i>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isVisible = 
                totalPages <= 6 || 
                pageNum === 1 || 
                pageNum === totalPages || 
                Math.abs(pageNum - currentPage) <= 1;

              if (!isVisible) {
                if (pageNum === 2 || pageNum === totalPages - 1) {
                  return <span key={pageNum} style={{ color: '#aaa', padding: '0 4px', fontSize: '0.85rem' }}>...</span>;
                }
                return null;
              }

              const active = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    border: active ? 'none' : '1px solid rgba(200, 149, 108, 0.18)',
                    background: active 
                      ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' 
                      : '#fff',
                    color: active ? '#fff' : 'var(--text-light, #7A5C4A)',
                    fontWeight: active ? 700 : 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: active ? '0 4px 12px rgba(200, 149, 108, 0.25)' : 'none',
                  }}
                  className="pagination-num-btn"
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                height: 38,
                borderRadius: '50%',
                border: '1px solid rgba(200, 149, 108, 0.25)',
                background: '#fff',
                color: currentPage === totalPages ? '#ccc' : 'var(--primary)',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
              }}
              className="pagination-arrow-btn"
            >
              <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.78rem' }}></i>
            </button>
          </div>
        )}

        <p className="text-center mt-4" style={{ color: 'var(--text-light,#777)', fontSize: '0.88rem' }}>
          Showing {filtered.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} crystals.
        </p>
      </div>
    </div>
  );
}
