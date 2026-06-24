'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useCurrency } from '@/context/CurrencyContext';
import { useRouter } from 'next/navigation';
import type { CrystalCardData } from './CrystalCard';

interface CrystalProductsModalProps {
  crystal: CrystalCardData;
  onClose: () => void;
}

type LiveProduct = { name: string; desc?: string; longDesc?: string; slug?: string; id?: string; price?: number; originalPrice?: number; usdPrice?: number; image?: string; badge?: string | null; category?: string };

function filterByCrystal(list: LiveProduct[], crystalName: string): LiveProduct[] {
  let key = crystalName.toLowerCase();
  
  // Normalize "tiger's eye" to "tiger eye" for database product mapping
  if (key.includes("tiger's eye")) {
    key = key.replace("tiger's eye", "tiger eye");
  }
  const cleanKey = key.replace(/'s/g, '').replace(/'/g, '');

  return list.filter((p) => {
    const name = p.name.toLowerCase();
    const desc = (p.desc || '').toLowerCase();
    const nameMatch = name.includes(key) || name.includes(cleanKey);
    const descMatch = desc.includes(key) || desc.includes(cleanKey);

    let longDescMatch = false;
    if (p.longDesc) {
      try {
        const parsed = JSON.parse(p.longDesc);
        const crystalsIncluded = (parsed.crystalsIncluded || '').toLowerCase();
        longDescMatch = crystalsIncluded.includes(key) || crystalsIncluded.includes(cleanKey);
      } catch {
        const longDescLower = p.longDesc.toLowerCase();
        longDescMatch = longDescLower.includes(key) || longDescLower.includes(cleanKey);
      }
    }

    return nameMatch || descMatch || longDescMatch;
  });
}

export default function CrystalProductsModal({ crystal, onClose }: CrystalProductsModalProps) {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const overlayRef = useRef<HTMLDivElement>(null);

  const [allProducts, setAllProducts] = useState<LiveProduct[]>([]);
  const [loadingDb, setLoadingDb] = useState(true);
  const [sort, setSort] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  useEffect(() => {
    let cancelled = false;
    fetch('/api/products')
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && Array.isArray(d.products)) {
          setAllProducts(d.products);
        }
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoadingDb(false); });
    return () => { cancelled = true; };
  }, []);

  // Always scroll overlay to top when crystal changes
  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.scrollTop = 0;
    }
  }, [crystal]);

  const matchingProducts = useMemo(() => {
    const list = filterByCrystal(allProducts, crystal.name);
    if (sort === 'price-asc') return [...list].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (sort === 'price-desc') return [...list].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    return list;
  }, [allProducts, crystal.name, sort]);

  // Reset sort to default whenever a different crystal modal is opened
  useEffect(() => { setSort('default'); }, [crystal.name]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div ref={overlayRef} className="crystal-modal-overlay" onClick={onClose}>
      <div className="crystal-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="crystal-modal-close-btn"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {/* Header */}
        <div className="crystal-modal-header">
          <img
            src={crystal.image}
            alt={crystal.name}
            className="crystal-modal-header-img"
          />
          <div>
            <h4 className="crystal-modal-title">
              {crystal.name} Products
            </h4>
            <p className="crystal-modal-subtitle">
              {crystal.keyword}
            </p>
          </div>
        </div>

        {/* Products List */}
        <div className="crystal-modal-body">
          {/* Live DB loading indicator (subtle) */}
          {loadingDb && matchingProducts.length > 0 && (
            <p style={{ fontSize: '0.72rem', color: 'rgba(200,149,108,0.5)', margin: '0 0 14px', textAlign: 'right' }}>
              <i className="fa-solid fa-circle-notch fa-spin me-1" />
              Syncing live prices…
            </p>
          )}

          {/* Sort control */}
          {matchingProducts.length > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, margin: '0 0 16px' }}>
              <label htmlFor="crystal-sort" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>
                Sort by
              </label>
              <select
                id="crystal-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as 'default' | 'price-asc' | 'price-desc')}
                style={{
                  background: 'rgba(45, 27, 14, 0.6)',
                  color: '#fff',
                  border: '1px solid rgba(200, 149, 108, 0.4)',
                  borderRadius: 20,
                  padding: '6px 12px',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                }}
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          )}

          {matchingProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(255,255,255,0.45)' }}>
              <i className="fa-solid fa-hourglass-empty" style={{ fontSize: '2.5rem', color: '#C8956C', marginBottom: '16px', display: 'block' }} />
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', margin: '0 0 6px' }}>No direct products found</p>
              <p style={{ fontSize: '0.85rem', margin: 0, color: 'rgba(255,255,255,0.5)' }}>
                We don&apos;t have standard {crystal.name} products in stock right now.
              </p>
              <p style={{ fontSize: '0.8rem', color: '#C8956C', marginTop: '12px' }}>
                Please contact us for custom crystal healing orders!
              </p>
            </div>
          ) : (
            <div className="crystal-modal-grid">
              {matchingProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    router.push(`/shop/${p.slug || p.id}`);
                  }}
                  className="crystal-modal-product-card"
                >
                  <div className="crystal-modal-product-image-wrapper">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="crystal-modal-product-image"
                    />
                  </div>
                  <h5 className="crystal-modal-product-name">
                    {p.name}
                  </h5>
                  <div className="crystal-modal-product-footer">
                    <span className="crystal-modal-product-price">
                      {formatPrice(p.price ?? 0, p.usdPrice ?? 0)}
                    </span>
                    <span className="crystal-modal-product-view-btn">
                      View <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.55rem' }} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
