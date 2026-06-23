'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SignatureCarousel({ products: seedProducts }: { products: any[] }) {
  const [products, setProducts] = useState<any[]>(seedProducts);
  const [activeIdx, setActiveIdx] = useState(0);

  // Fetch settings to check for custom carousel images, fallback to live DB products
  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && data.settings && data.settings.signatureCarouselImages) {
          try {
            const parsed = JSON.parse(data.settings.signatureCarouselImages);
            if (Array.isArray(parsed) && parsed.length > 0) {
              // Convert to mock product objects
              const mockProducts = parsed.map((url: string, index: number) => ({
                id: `custom-carousel-${index}`,
                image: url,
                name: `Signature Carousel Slide ${index + 1}`
              }));
              setProducts(mockProducts);
              return;
            }
          } catch {
            // ignore
          }
        }
        
        // Fallback to product subcategory fetch if no settings or parse failed
        fetch('/api/products')
          .then((r) => r.json())
          .then((data) => {
            if (data.products) {
              const sig = data.products.filter(
                (p: any) => p.subcategory?.toLowerCase() === 'signature bracelets'
              );
              if (sig.length > 0) setProducts(sig);
            }
          })
          .catch(() => {});
      })
      .catch(() => {
        // Fallback to product fetch on settings error
        fetch('/api/products')
          .then((r) => r.json())
          .then((data) => {
            if (data.products) {
              const sig = data.products.filter(
                (p: any) => p.subcategory?.toLowerCase() === 'signature bracelets'
              );
              if (sig.length > 0) setProducts(sig);
            }
          })
          .catch(() => {});
      });
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  if (products.length === 0) return null;

  return (
    <section id="signature-crystals" className="section-pad" style={{ background: '#0F0904', color: '#fff', overflow: 'hidden', position: 'relative' }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200, 149, 108, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">
          
          {/* Left Column: Description & CTAs */}
          <div className="col-lg-5 text-center text-lg-start">
            <span className="section-eyebrow text-center text-lg-start d-block" style={{ color: '#D4AF37' }}>
              <i className="fa-solid fa-crown me-2" />KrissMaagiic Exclusive
            </span>
            <h2 className="section-title text-white text-center text-lg-start" style={{ margin: '0.5rem 0 1.5rem' }}>
              Signature <span>Crystals</span>
            </h2>
            <div className="divider-ornament d-lg-none" style={{ margin: '0 auto 1.5rem' }}>
              <i className="fa-solid fa-diamond-turn-right" style={{ color: '#D4AF37' }} />
            </div>
            
            <p className="text-center text-lg-start" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Our most premium, meticulously crafted bracelets, energized specifically for alignment, growth, and transformation.
            </p>
            <p className="text-center text-lg-start" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>
              Designed personally by Kriss, each signature piece pairs rare, high-resonance authentic crystals to amplify specific energies, ensuring they act as potent catalysts for your spiritual journey.
            </p>
            
            <div className="text-center text-lg-start">
              <Link href="/shop?category=signature" className="btn-primary-custom">
                <span>Explore Signature Collection</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Autoplay Image Carousel (Only Images) */}
          <div className="col-lg-7">
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1/1',
              maxWidth: '360px',
              margin: '0 auto',
              borderRadius: '24px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgba(200, 149, 108, 0.25)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(200, 149, 108, 0.08)',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(10px)',
            }}>
              {products.map((p, idx) => {
                const active = idx === activeIdx;
                return (
                  <div
                    key={p.id || p._id || idx}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: active ? 1 : 0,
                      transform: active ? 'scale(1)' : 'scale(1.05)',
                      transition: 'opacity 1s ease-in-out, transform 1.2s ease-in-out',
                      zIndex: active ? 2 : 1,
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    {/* Dark gradient overlay at the bottom for elegance */}
                    <div style={{
                      position: 'absolute',
                      inset: '0 0 0 0',
                      background: 'linear-gradient(180deg, transparent 60%, rgba(15, 9, 4, 0.8) 100%)',
                      pointerEvents: 'none'
                    }} />
                  </div>
                );
              })}
            </div>

            {/* Subtle indicators under the image */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '1.5rem',
              position: 'relative',
              zIndex: 3
            }}>
              {products.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    width: activeIdx === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeIdx === idx ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
