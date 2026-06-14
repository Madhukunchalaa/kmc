'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ScrollFade from '@/components/ScrollFade';
import type { CatalogProduct } from '@/lib/catalog';

const ITEMS_PER_PAGE = 30;

const CATEGORIES: { key: string; label: string; icon: string }[] = [
  { key: 'all',       label: 'All Collections',      icon: 'fa-solid fa-gem' },
  { key: 'designer',  label: 'Designer Bracelets',   icon: 'fa-solid fa-wand-magic-sparkles' },
  { key: 'signature', label: 'Signature Crystals',   icon: 'fa-solid fa-crown' },
  { key: 'spelljar',  label: 'Spell Jars',           icon: 'fa-solid fa-jar' },
  { key: 'bycrystal', label: 'Bracelets by Crystals',icon: 'fa-solid fa-circle-notch' },
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
  const searchParams = useSearchParams();
  const [activeCat, setActiveCat] = useState(searchParams.get('category') || 'all');
  const [sort, setSort] = useState('featured');
  const [query, setQuery] = useState(searchParams.get('intent') || searchParams.get('search') || '');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever category, sort, or search query changes
  useEffect(() => {
    Promise.resolve().then(() => {
      setCurrentPage(1);
    });
  }, [activeCat, sort, query]);

  const filtered = useMemo(() => {
    // Filter out items not belonging to the 4 target categories
    const allowed = products.filter((p) => {
      const sub = (p.subcategory || '').toLowerCase();
      const cat = (p.category || '').toLowerCase();
      const name = (p.name || '').toLowerCase();
      
      const isDesigner = sub === 'designer bracelets';
      const isSignature = sub === 'signature bracelets';
      const isSpellJar = sub === 'spell jars' || name.includes('spell jar');
      const isByCrystal = cat === 'bracelets' && !isDesigner && !isSignature;
      
      return isDesigner || isSignature || isSpellJar || isByCrystal;
    });

    let list = [...allowed];
    if (activeCat !== 'all') {
      list = allowed.filter((p) => {
        const sub = (p.subcategory || '').toLowerCase();
        const cat = (p.category || '').toLowerCase();
        const name = (p.name || '').toLowerCase();
        
        if (activeCat === 'designer') return sub === 'designer bracelets';
        if (activeCat === 'signature') return sub === 'signature bracelets';
        if (activeCat === 'spelljar') return sub === 'spell jars' || name.includes('spell jar');
        if (activeCat === 'bycrystal') return cat === 'bracelets' && sub !== 'designer bracelets' && sub !== 'signature bracelets';
        return false;
      });
    }

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
    <div style={{ width: '100%' }}>
      {/* Horizontal Collections Filter Bar on Top */}
      <div className="shop-top-collections-bar">
        <h4 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          color: '#ffffff',
          fontWeight: 700,
          margin: 0,
          paddingBottom: '12px',
          borderBottom: '2px solid rgba(200, 149, 108, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          letterSpacing: '0.04em'
        }}>
          <i className="fa-solid fa-gem" style={{ color: 'var(--primary,#C8956C)', fontSize: '1.1rem' }}></i>
          Collections
        </h4>
        <div className="shop-top-categories-track">
          {CATEGORIES.map((c) => {
            const active = activeCat === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActiveCat(c.key)}
                className={`shop-top-category-btn${active ? ' active' : ''}`}
              >
                <div 
                  className="category-icon-wrapper"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    background: active 
                      ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' 
                      : 'rgba(200, 149, 108, 0.08)',
                    color: active ? '#fff' : 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    boxShadow: active ? '0 4px 12px rgba(200, 149, 108, 0.25)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <i className={c.icon} style={{ fontSize: '0.85rem' }}></i>
                </div>
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Catalog Column */}
      <div style={{ width: '100%', minWidth: 0 }}>
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
          <div className="shop-products-grid">
            {paginatedProducts.map((p, idx) => (
              <ScrollFade key={p.id} delay={Math.min(idx, 6) * 50}>
                <ProductCard product={toLegacy(p)} />
              </ScrollFade>
            ))}
          </div>
        )}

        {/* Circular Premium Pagination Controls */}
        {totalPages > 1 && (
          <>
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

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link href="/crystal-strength" className="btn-celestial-guide">
              <i className="fa-solid fa-book-open"></i>
              <span>Not sure which crystal? Read the guide</span>
            </Link>
          </div>
          </>
        )}

        <p className="text-center mt-4" style={{ color: 'var(--text-light,#777)', fontSize: '0.88rem' }}>
          Showing {filtered.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}&ndash;{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} crystals.
        </p>
      </div>
    </div>
  );
}
