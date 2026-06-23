'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';
import { useCurrency } from '@/context/CurrencyContext';

export interface CrystalCardData {
  name: string;
  keyword: string;
  desc: string;
  gradient?: string;
  emoji?: string;
  image: string;
  tags: string[];
  chakras?: string[];
  color?: string;
}

interface CrystalCardProps {
  crystal: CrystalCardData;
}

export default function CrystalCard({ crystal }: CrystalCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const { formatPrice } = useCurrency();

  // Find products that contain this crystal
  const matchingProducts = products.filter((p) => {
    const nameMatch = p.name.toLowerCase().includes(crystal.name.toLowerCase());
    const descMatch = (p.desc || '').toLowerCase().includes(crystal.name.toLowerCase());
    
    let longDescMatch = false;
    if (p.longDesc) {
      try {
        const parsed = JSON.parse(p.longDesc);
        const crystalsIncluded = (parsed.crystalsIncluded || '').toLowerCase();
        longDescMatch = crystalsIncluded.includes(crystal.name.toLowerCase());
      } catch {
        longDescMatch = p.longDesc.toLowerCase().includes(crystal.name.toLowerCase());
      }
    }
    
    return nameMatch || descMatch || longDescMatch;
  });

  return (
    <>
      <div
        className="crystal-card"
        onClick={() => setModalOpen(true)}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'pointer',
          '--crystal-color': crystal.color,
        } as React.CSSProperties}
      >
        <div>
          <div className="crystal-gem-image-wrapper">
            <img src={crystal.image} alt={crystal.name} className="crystal-gem-image" />
          </div>
          <h3 className="crystal-name">{crystal.name}</h3>
          <p className="crystal-keyword">{crystal.keyword}</p>
          <p className="crystal-desc">{crystal.desc}</p>
          <div className="crystal-tags">
            {crystal.tags.map((t) => (
              <span className="crystal-tag" key={t}>{t}</span>
            ))}
          </div>
          {crystal.chakras && crystal.chakras.length > 0 && (
            <p style={{ fontSize: '0.75rem', color: 'rgba(255, 200, 150, 0.75)', marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              {crystal.chakras.join(' · ')}
            </p>
          )}
        </div>
      </div>

      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(12, 4, 2, 0.85)',
            backdropFilter: 'blur(12px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              maxWidth: '680px',
              width: '100%',
              backgroundColor: '#1E120A',
              border: '2px solid rgba(200, 149, 108, 0.45)',
              borderRadius: '24px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.85)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              maxHeight: '85vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(200, 149, 108, 0.3)',
                color: '#C8956C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(200, 149, 108, 0.15)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.color = '#C8956C';
              }}
            >
              <i className="fa-solid fa-xmark" style={{ fontSize: '1rem' }}></i>
            </button>

            {/* Header */}
            <div style={{ padding: '24px 24px 16px', borderBottom: '1px solid rgba(200, 149, 108, 0.15)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src={crystal.image} alt={crystal.name} style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,149,108,0.2)', padding: '4px' }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', margin: 0, fontWeight: 700 }}>
                  {crystal.name} Products
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'rgba(200, 149, 108, 0.75)', margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {crystal.keyword}
                </p>
              </div>
            </div>

            {/* Products List */}
            <div style={{ overflowY: 'auto', padding: '24px', flex: 1 }}>
              {matchingProducts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'rgba(255,255,255,0.45)' }}>
                  <i className="fa-solid fa-hourglass-empty" style={{ fontSize: '2rem', color: '#C8956C', marginBottom: '12px', display: 'block' }}></i>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>No active shop products currently contain {crystal.name}.</p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: '6px' }}>Please contact us for custom crystal crafting!</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '20px' }}>
                  {matchingProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setModalOpen(false);
                        router.push(`/shop/${p.id}`);
                      }}
                      className="crystal-modal-product-card"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(200, 149, 108, 0.15)',
                        borderRadius: '16px',
                        padding: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        height: '100%',
                      }}
                    >
                      <div style={{ width: '100%', aspectRatio: '1', position: 'relative', overflow: 'hidden', borderRadius: '12px', marginBottom: '10px', border: '1px solid rgba(200, 149, 108, 0.08)' }}>
                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} className="product-image-hover" />
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <h5 style={{ fontSize: '0.82rem', fontWeight: 600, color: '#F5EDD8', margin: '0 0 6px', lineHeight: '1.3', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', minHeight: '34px' }}>
                          {p.name}
                        </h5>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(200,149,108,0.1)', paddingTop: '6px', marginTop: '4px' }}>
                          <span style={{ fontSize: '0.8rem', color: '#FFEFA6', fontWeight: 700 }}>
                            {formatPrice(p.price, p.usdPrice)}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: '#C8956C', display: 'flex', alignItems: 'center', gap: '2px' }}>
                            View <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.55rem' }}></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
