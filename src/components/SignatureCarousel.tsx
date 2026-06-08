'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';

export default function SignatureCarousel({ products }: { products: any[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    if (width > 0) {
      const newIdx = Math.round(scrollLeft / width);
      setActiveIdx(newIdx);
    }
  };

  const scrollTo = (idx: number) => {
    const container = document.getElementById('signature-carousel');
    if (container) {
      container.scrollTo({
        left: idx * container.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-pad" style={{ background: '#0F0904', color: '#fff', overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow" style={{ color: '#D4AF37' }}>KrissMaagiic Exclusive</span>
          <h2 className="section-title text-white">Signature <span>Crystals</span></h2>
          <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right" style={{ color: '#D4AF37' }}></i></div>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Our most premium, meticulously crafted bracelets. Energised specifically for profound transformations.
          </p>
        </div>

        <div 
          id="signature-carousel"
          onScroll={handleScroll}
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory', 
            gap: '24px', 
            paddingBottom: '2rem',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {products.map((p, idx) => (
            <div 
              key={p.id} 
              style={{ 
                flex: '0 0 auto', 
                width: '100%', 
                maxWidth: '340px', 
                scrollSnapAlign: 'start',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div style={{ width: '100%', maxWidth: '300px' }}>
                <ProductCard product={p} />
              </div>
            </div>
          ))}
        </div>

        <div className="sessions-carousel-dots" style={{ marginTop: '1rem' }}>
          {products.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`sessions-carousel-dot ${activeIdx === idx ? 'active' : ''}`}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to signature product ${idx + 1}`}
              style={activeIdx === idx ? { background: '#D4AF37' } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
