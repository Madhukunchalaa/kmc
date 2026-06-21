'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import type { CrystalGuide } from '@/data/crystals';
import { products } from '@/data/products';
import { useCurrency } from '@/context/CurrencyContext';
import { resolveProductImage } from '@/lib/resolveProductImage';

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
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 280); // matching keyframe duration
  };

  const matchedProducts = products.filter((prod) => {
    const crystalNameLower = crystal.name.toLowerCase();
    const fieldsToSearch = [
      prod.name,
      prod.desc,
      prod.longDesc || '',
      ...(prod.chakras || [])
    ].map(field => field.toLowerCase());

    return fieldsToSearch.some(field => {
      if (crystalNameLower.includes('tiger')) {
        return field.includes('tiger eye') || field.includes("tiger's eye") || field.includes("tigers eye");
      }
      return field.includes(crystalNameLower);
    });
  });

  return (
    <>
      <style>{`
        /* Modal Overlay */
        .kmc-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(10, 4, 22, 0.82);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: kmc-fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .kmc-modal-overlay.closing {
          animation: kmc-fade-out 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Modal Dialog Box */
        .kmc-modal-dialog {
          position: relative;
          width: 100%;
          max-width: 480px;
          background: linear-gradient(135deg, rgba(26, 16, 44, 0.96) 0%, rgba(14, 8, 25, 0.99) 100%);
          border: 1px solid rgba(200, 149, 108, 0.32);
          border-radius: 24px;
          box-shadow: 
            0 30px 80px rgba(0, 0, 0, 0.85),
            0 0 40px rgba(200, 149, 108, 0.15),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
          padding: 2.25rem 2rem;
          text-align: center;
          animation: kmc-scale-up 0.42s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          overflow: hidden;
        }

        .kmc-modal-dialog.closing {
          animation: kmc-scale-down 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Sparkle Background Elements inside modal */
        .modal-nebula-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 149, 108, 0.2) 0%, transparent 70%);
          filter: blur(15px);
          pointer-events: none;
        }

        /* Close Button */
        .kmc-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(200, 149, 108, 0.06);
          border: 1px solid rgba(200, 149, 108, 0.25);
          color: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kmc-modal-close:hover {
          transform: rotate(90deg) scale(1.1);
          background: rgba(200, 149, 108, 0.2);
          border-color: rgba(200, 149, 108, 0.7);
          color: #ffffff;
          box-shadow: 0 0 15px rgba(200, 149, 108, 0.35);
        }

        /* Product Card/List item */
        .kmc-product-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(200, 149, 108, 0.12);
          border-radius: 16px;
          padding: 10px 14px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          width: 100%;
          border-style: solid;
        }

        .kmc-product-row:hover {
          background: rgba(200, 149, 108, 0.12);
          border-color: rgba(200, 149, 108, 0.55);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .kmc-product-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
          min-width: 0;
        }

        .kmc-product-img-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(200, 149, 108, 0.08);
          position: relative;
          flex-shrink: 0;
        }

        .kmc-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .kmc-product-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex: 1;
        }

        .kmc-product-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .kmc-product-subcat {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 2px;
          text-transform: capitalize;
        }

        .kmc-product-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .kmc-product-price {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary, #C8956C);
        }

        .kmc-chevron {
          font-size: 0.8rem;
          color: rgba(200, 149, 108, 0.5);
          transition: transform 0.3s ease;
        }

        .kmc-product-row:hover .kmc-chevron {
          transform: translateX(4px);
          color: var(--primary, #C8956C);
        }

        /* Keyframes */
        @keyframes kmc-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes kmc-fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes kmc-scale-up {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes kmc-scale-down {
          from { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to { 
            opacity: 0;
            transform: scale(0.92) translateY(12px);
          }
        }
      `}</style>

      {/* Crystal Card Content */}
      <div 
        className="crystal-card" 
        onClick={handleOpen} 
        style={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          cursor: 'pointer',
          '--crystal-color': crystal.color 
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
            <p style={{ fontSize: '0.75rem', color: 'rgba(255, 200, 150, 0.75)', marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {crystal.chakras.join(' · ')}
            </p>
          )}
        </div>
      </div>

      {/* Beautiful Modal Popup */}
      {mounted && typeof document !== 'undefined' && isOpen && createPortal(
        <div 
          className={`kmc-modal-overlay${isClosing ? ' closing' : ''}`}
          onClick={handleClose}
        >
          <div 
            className={`kmc-modal-dialog${isClosing ? ' closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-nebula-glow"></div>
            
            <button className="kmc-modal-close" onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Crystal Header */}
            <div style={{ marginBottom: '2rem' }}>
              <img 
                src={crystal.image} 
                alt={crystal.name} 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  objectFit: 'contain', 
                  marginBottom: '1rem',
                  filter: 'drop-shadow(0 0 12px rgba(200, 149, 108, 0.45))'
                }} 
              />
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                color: '#ffffff', 
                fontSize: '1.5rem', 
                marginBottom: '0.5rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                Shop {crystal.name}
              </h3>
              <p style={{ 
                fontSize: '0.85rem', 
                color: 'rgba(255, 255, 255, 0.65)', 
                maxWidth: '360px', 
                margin: '0 auto' 
              }}>
                Explore premium, authentic, and ritually cleansed products associated with {crystal.name.toLowerCase()}.
              </p>
            </div>

            {/* Products List */}
            <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '4px' }}>
              {matchedProducts.map((prod) => {
                const imageUrl = resolveProductImage(prod.image, prod.category, prod.name);
                return (
                  <button
                    key={prod.id}
                    onClick={() => router.push(`/shop/${prod.id}`)}
                    className="kmc-product-row"
                  >
                    <div className="kmc-product-left">
                      <div className="kmc-product-img-box">
                        <img src={imageUrl} alt={prod.name} className="kmc-product-img" />
                      </div>
                      <div className="kmc-product-info">
                        <span className="kmc-product-name">{prod.name}</span>
                        <span className="kmc-product-subcat">{prod.subcategory || prod.category}</span>
                      </div>
                    </div>
                    <div className="kmc-product-right">
                      <span className="kmc-product-price">
                        {formatPrice(prod.price, prod.usdPrice)}
                      </span>
                      <i className="fa-solid fa-chevron-right kmc-chevron"></i>
                    </div>
                  </button>
                );
              })}

              {matchedProducts.length === 0 && (
                <div style={{ padding: '2rem 1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                  No directly associated products found.
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
