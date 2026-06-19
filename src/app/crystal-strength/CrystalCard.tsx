'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { CrystalGuide } from '@/data/crystals';

const CATEGORY_DETAILS: Record<string, { label: string; icon: string }> = {
  'designer-bracelets': { label: 'Designer Bracelets', icon: 'fa-solid fa-wand-magic-sparkles' },
  'signature': { label: 'Signature Crystals', icon: 'fa-solid fa-crown' },
  'spell-jars': { label: 'Spell Jars', icon: 'fa-solid fa-jar' },
  'bracelets-by-crystals': { label: 'Bracelets by Crystals', icon: 'fa-solid fa-circle-notch' },
  'malas': { label: 'Malas', icon: 'fa-solid fa-om' },
  'pendants': { label: 'Pendants', icon: 'fa-solid fa-gem' },
  'designer-pendants': { label: 'Designer Pendants', icon: 'fa-solid fa-star' },
  'silver-jewelry': { label: 'Silver Jewelry', icon: 'fa-solid fa-ring' },
  'anklets': { label: 'Anklets', icon: 'fa-solid fa-link' },
  'glow-essentials': { label: 'Glow Essentials', icon: 'fa-solid fa-spa' },
  'crystal-towers': { label: 'Crystal Towers', icon: 'fa-solid fa-mountain' },
  'pyramids': { label: 'Pyramids', icon: 'fa-solid fa-play' },
  'raw-crystal': { label: 'Raw Crystals', icon: 'fa-solid fa-cubes' },
  'designer-crystals': { label: 'Designer Crystals', icon: 'fa-solid fa-wand-sparkles' },
  'home-decor': { label: 'Home Decor', icon: 'fa-solid fa-house' },
};

interface RelatedCategory {
  key: string;
  count: number;
}

const CRYSTAL_CATEGORIES: Record<string, RelatedCategory[]> = {
  'Amethyst': [
    { key: 'home-decor', count: 4 },
    { key: 'bracelets-by-crystals', count: 3 },
    { key: 'silver-jewelry', count: 1 },
    { key: 'glow-essentials', count: 1 },
    { key: 'malas', count: 1 },
  ],
  'Rose Quartz': [
    { key: 'home-decor', count: 4 },
    { key: 'silver-jewelry', count: 3 },
    { key: 'bracelets-by-crystals', count: 2 },
    { key: 'glow-essentials', count: 2 },
    { key: 'pendants', count: 1 },
    { key: 'malas', count: 1 },
  ],
  'Citrine': [
    { key: 'home-decor', count: 6 },
    { key: 'bracelets-by-crystals', count: 3 },
    { key: 'pyramids', count: 1 },
    { key: 'spell-jars', count: 1 },
    { key: 'raw-crystal', count: 1 },
    { key: 'malas', count: 1 },
  ],
  'Black Tourmaline': [
    { key: 'silver-jewelry', count: 3 },
    { key: 'bracelets-by-crystals', count: 1 },
    { key: 'pendants', count: 1 },
    { key: 'malas', count: 1 },
    { key: 'anklets', count: 1 },
    { key: 'glow-essentials', count: 1 },
    { key: 'crystal-towers', count: 1 },
    { key: 'home-decor', count: 1 },
  ],
  'Clear Quartz': [
    { key: 'bracelets-by-crystals', count: 2 },
    { key: 'silver-jewelry', count: 1 },
    { key: 'pendants', count: 1 },
  ],
  'Selenite': [
    { key: 'home-decor', count: 2 },
    { key: 'designer-crystals', count: 1 },
    { key: 'designer-bracelets', count: 1 },
  ],
  "Tiger's Eye": [
    { key: 'bracelets-by-crystals', count: 3 },
    { key: 'pendants', count: 2 },
    { key: 'silver-jewelry', count: 1 },
    { key: 'glow-essentials', count: 1 },
    { key: 'home-decor', count: 1 },
    { key: 'designer-pendants', count: 1 },
  ],
  'Green Aventurine': [
    { key: 'home-decor', count: 4 },
    { key: 'bracelets-by-crystals', count: 1 },
    { key: 'pyramids', count: 1 },
    { key: 'spell-jars', count: 1 },
    { key: 'raw-crystal', count: 1 },
  ],
  'Lapis Lazuli': [
    { key: 'bracelets-by-crystals', count: 3 },
    { key: 'silver-jewelry', count: 2 },
    { key: 'pendants', count: 1 },
    { key: 'anklets', count: 1 },
    { key: 'pyramids', count: 1 },
    { key: 'home-decor', count: 1 },
  ],
};

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
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  const handleCategoryRedirect = (catKey: string) => {
    const queryStr = encodeURIComponent(crystal.name);
    router.push(`/shop?category=${catKey}&search=${queryStr}`);
  };

  const relatedCats = CRYSTAL_CATEGORIES[crystal.name] || [];

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

        /* Category Card/List item */
        .kmc-category-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(200, 149, 108, 0.12);
          border-radius: 16px;
          padding: 12px 18px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          width: 100%;
          border-style: solid;
        }

        .kmc-category-row:hover {
          background: rgba(200, 149, 108, 0.12);
          border-color: rgba(200, 149, 108, 0.55);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .kmc-category-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .kmc-cat-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(200, 149, 108, 0.08);
          color: var(--primary, #C8956C);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .kmc-category-row:hover .kmc-cat-icon-box {
          background: linear-gradient(135deg, var(--primary, #C8956C) 0%, #A47551 100%);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(200, 149, 108, 0.25);
        }

        .kmc-category-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
        }

        .kmc-category-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .kmc-item-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--primary, #C8956C);
          background: rgba(200, 149, 108, 0.12);
          border-radius: 30px;
          padding: 3px 10px;
          letter-spacing: 0.03em;
        }

        .kmc-chevron {
          font-size: 0.8rem;
          color: rgba(200, 149, 108, 0.5);
          transition: transform 0.3s ease;
        }

        .kmc-category-row:hover .kmc-chevron {
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
      <div className="crystal-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', '--crystal-color': crystal.color } as React.CSSProperties}>
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

        <div>
          <button
            onClick={handleOpen}
            className="btn-outline-custom w-100"
            style={{
              marginTop: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '11px 20px',
              borderRadius: '50px'
            }}
          >
            <i className="fa-solid fa-wand-magic-sparkles" style={{ fontSize: '0.85rem' }}></i>
            <span>Show Relevant Products</span>
          </button>
        </div>
      </div>

      {/* Beautiful Modal Popup */}
      {isOpen && (
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
                Explore collections containing authentic, ritually cleansed {crystal.name.toLowerCase()} crystals.
              </p>
            </div>

            {/* Categories List */}
            <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '4px' }}>
              {relatedCats.map((cat) => {
                const details = CATEGORY_DETAILS[cat.key] || { label: cat.key, icon: 'fa-solid fa-gem' };
                return (
                  <button
                    key={cat.key}
                    onClick={() => handleCategoryRedirect(cat.key)}
                    className="kmc-category-row"
                  >
                    <div className="kmc-category-left">
                      <div className="kmc-cat-icon-box">
                        <i className={details.icon}></i>
                      </div>
                      <span className="kmc-category-label">{details.label}</span>
                    </div>
                    <div className="kmc-category-right">
                      <span className="kmc-item-badge">{cat.count} {cat.count === 1 ? 'item' : 'items'}</span>
                      <i className="fa-solid fa-chevron-right kmc-chevron"></i>
                    </div>
                  </button>
                );
              })}

              {relatedCats.length === 0 && (
                <button
                  onClick={() => handleCategoryRedirect('all')}
                  className="kmc-category-row"
                >
                  <div className="kmc-category-left">
                    <div className="kmc-cat-icon-box">
                      <i className="fa-solid fa-gem"></i>
                    </div>
                    <span className="kmc-category-label">All Collections</span>
                  </div>
                  <div className="kmc-category-right">
                    <i className="fa-solid fa-chevron-right kmc-chevron"></i>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
