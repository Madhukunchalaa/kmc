'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ScrollFade from '@/components/ScrollFade';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  // Bestsellers / Featured crystals (first 6 items matching the homepage feel)
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== TRUST STRIP ===== */}
      <div className="trust-strip">
        <div className="container">
          <div className="row gy-3">
            <div className="col-6 col-md-3">
              <div className="trust-item">
                <i className="fa-solid fa-shield-halved"></i>
                <span>100% Authentic</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-item">
                <i className="fa-solid fa-bolt"></i>
                <span>Energised Stones</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-item">
                <i className="fa-solid fa-hand-sparkles"></i>
                <span>Intuitively Selected</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-item">
                <i className="fa-solid fa-truck-fast"></i>
                <span>Pan-India Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BRAND FEATURES ===== */}
      <section className="brand-strip section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Why KrissMaagiic</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Crystals with <span>Purpose &amp; Soul</span>
            </h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
          </div>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <ScrollFade delay={0}>
                <div className="brand-feature-card text-center">
                  <div className="brand-feature-icon"><i className="fa-solid fa-gem"></i></div>
                  <h4 className="brand-feature-title">Handpicked Crystals</h4>
                  <p className="brand-feature-desc">
                    Every crystal is personally selected by Kriss with deep intuition, ensuring only the finest, most energetically aligned stones reach you.
                  </p>
                </div>
              </ScrollFade>
            </div>
            <div className="col-sm-6 col-lg-3">
              <ScrollFade delay={80}>
                <div className="brand-feature-card text-center">
                  <div className="brand-feature-icon"><i className="fa-solid fa-sun"></i></div>
                  <h4 className="brand-feature-title">Ritually Energised</h4>
                  <p className="brand-feature-desc">
                    Each piece is cleansed and charged under moonlight or sunlight, infused with healing intentions before reaching your hands.
                  </p>
                </div>
              </ScrollFade>
            </div>
            <div className="col-sm-6 col-lg-3">
              <ScrollFade delay={160}>
                <div className="brand-feature-card text-center">
                  <div className="brand-feature-icon"><i className="fa-solid fa-certificate"></i></div>
                  <h4 className="brand-feature-title">Certified Authenticity</h4>
                  <p className="brand-feature-desc">
                    We source directly from trusted mines. No fakes, no dyed stones. Genuine crystals with verifiable origins and natural inclusions.
                  </p>
                </div>
              </ScrollFade>
            </div>
            <div className="col-sm-6 col-lg-3">
              <ScrollFade delay={240}>
                <div className="brand-feature-card text-center">
                  <div className="brand-feature-icon"><i className="fa-solid fa-heart-pulse"></i></div>
                  <h4 className="brand-feature-title">Healing-First Curation</h4>
                  <p className="brand-feature-desc">
                    Our collections are curated around chakra healing, astrological compatibility, and emotional wellness — not just aesthetics.
                  </p>
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="products-section section-pad" id="featured-products">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Our Bestsellers</span>
            <h2 className="section-title">Featured <span>Crystal Collections</span></h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            <p className="section-subtitle">Each piece is handpicked, energised and ready to work its magic in your life.</p>
          </div>

          <div className="row g-4">
            {featuredProducts.map((product, idx) => (
              <div className="col-sm-6 col-lg-4" key={product.id}>
                <ScrollFade delay={idx * 80}>
                  <ProductCard product={product} />
                </ScrollFade>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/shop" className="btn-outline-custom">
              <i className="fa-solid fa-store"></i>
              <span>View All Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services-section section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow" style={{ color: 'var(--accent)' }}>Spiritual Services</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Healing <span>Sessions &amp; Rituals</span>
            </h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Book a personalised session with Kriss and step into transformation.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                title: 'Tarot Reading',
                desc: 'Receive guidance on love, career, relationships and life path through an intuitive tarot session.',
                image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Tarrot-Reading.webp',
                icon: 'fa-solid fa-star-and-crescent',
                link: '/services#tarot',
              },
              {
                title: 'Candle Spell Session',
                desc: 'Harness the power of fire magic with ritually crafted candle spells tailored to your intentions.',
                image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Candle.webp',
                icon: 'fa-solid fa-fire-flame-curved',
                link: '/services#candle',
              },
              {
                title: 'Spell Jars',
                desc: 'Custom spell jars created with herbs, crystals and intentions to manifest your specific desires.',
                image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Spell-Jar.webp',
                icon: 'fa-solid fa-jar',
                link: '/services#spelljar',
              },
              {
                title: 'Numerology',
                desc: 'Unlock the hidden patterns in your birth date and name to reveal your life\'s purpose and destiny.',
                image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Numerology.webp',
                icon: 'fa-solid fa-infinity',
                link: '/services#numerology',
              },
            ].map((svc, idx) => (
              <div className="col-sm-6 col-lg-3" key={svc.title}>
                <ScrollFade delay={idx * 80}>
                  <div className="service-card">
                    <img src={svc.image} alt={svc.title} className="service-card-img" loading="lazy" />
                    <div className="service-card-overlay"></div>
                    <div className="service-card-body">
                      <div className="service-icon"><i className={svc.icon}></i></div>
                      <h3 className="service-title">{svc.title}</h3>
                      <p className="service-desc">{svc.desc}</p>
                      <Link href={svc.link} className="service-link">
                        Book Now <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </ScrollFade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CRYSTAL STRENGTH PREVIEW ===== */}
      <section className="crystals-section section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Crystal Knowledge</span>
            <h2 className="section-title">Crystal <span>Strength Guide</span></h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            <p className="section-subtitle">Learn the healing properties of your favourite stones.</p>
          </div>

          <div className="row g-4">
            {[
              {
                name: 'Amethyst',
                keyword: 'Relaxation & Meditation',
                desc: 'A natural stress reliever that encourages inner strength. Amethyst clusters create a tranquil aura perfect for deep meditation and restful sleep.',
                color: 'rgba(139,58,163,0.15)',
                gradient: 'linear-gradient(135deg,#9B59B6,#6C3483)',
                emoji: '🔮',
                tags: ['Peace', 'Clarity', 'Protection'],
              },
              {
                name: 'Rose Quartz',
                keyword: 'Serenity & Emotional Balance',
                desc: 'The stone of unconditional love. Rose Quartz opens the heart chakra, promoting self-love, compassion and peaceful relationships.',
                color: 'rgba(235,140,150,0.15)',
                gradient: 'linear-gradient(135deg,#F48FB1,#E91E8C)',
                emoji: '🩷',
                tags: ['Love', 'Harmony', 'Healing'],
              },
              {
                name: 'Celestite',
                keyword: 'Peace & Angelic Connection',
                desc: 'A high-vibration crystal that connects you to the angelic realm. Celestite promotes peace, uplifts the spirit and encourages divine communication.',
                color: 'rgba(100,149,237,0.15)',
                gradient: 'linear-gradient(135deg,#C8E6FA,#7EC8E3)',
                emoji: '💎',
                tags: ['Angelic', 'Calm', 'Intuition'],
              },
            ].map((c, idx) => (
              <div className="col-sm-6 col-lg-4" key={c.name}>
                <ScrollFade delay={idx * 80}>
                  <div className="crystal-card" style={{ '--crystal-color': c.color } as React.CSSProperties}>
                    <div className="crystal-gem">
                      <div className="crystal-gem-shape" style={{ background: c.gradient }}></div>
                      <span style={{ position: 'relative', zIndex: 1, fontSize: '2rem' }}>{c.emoji}</span>
                    </div>
                    <h3 className="crystal-name">{c.name}</h3>
                    <p className="crystal-keyword">{c.keyword}</p>
                    <p className="crystal-desc">{c.desc}</p>
                    <div className="crystal-tags">
                      {c.tags.map((tag) => (
                        <span className="crystal-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </ScrollFade>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/crystal-strength" className="btn-outline-custom">
              <i className="fa-solid fa-book-open"></i>
              <span>Full Crystal Guide</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow" style={{ color: 'var(--accent)' }}>Client Love</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              What Our <span>Clients Say</span>
            </h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
          </div>

          <div className="row g-4">
            {testimonials.map((t, idx) => (
              <div className="col-md-4" key={t.name}>
                <ScrollFade delay={idx * 80}>
                  <div className="testimonial-card">
                    <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                    <p className="testimonial-text">&quot;{t.text}&quot;</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{t.avatar}</div>
                      <div>
                        <p className="testimonial-name">{t.name}</p>
                        <p className="testimonial-role">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollFade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Find Your Crystal</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Not Sure Which Crystal is <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Right for You?</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Take our quick Crystal Suggestion quiz and we&apos;ll match you with your perfect stone.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <Link href="/crystal-strength#quiz" className="btn-primary-custom">
              <i className="fa-solid fa-wand-sparkles"></i>
              <span>Take the Quiz</span>
            </Link>
            <Link href="/contact" className="btn-ghost-white">
              <i className="fa-solid fa-comments"></i>
              <span>Talk to Kriss</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <Newsletter />
    </>
  );
}
