'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ScrollFade from '@/components/ScrollFade';
import ProductCard from '@/components/ProductCard';
import BookingModal, { BookingTier } from '@/components/BookingModal';
import SignatureCarousel from '@/components/SignatureCarousel';
import SimplePrice from '@/components/SimplePrice';
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';

interface SelectedSession {
  serviceSlug: string;
  title: string;
  tiers: BookingTier[];
}

export default function Home() {
  // Bestsellers / Featured crystals (first 5 items matching the homepage feel)
  const featuredProducts = products.slice(0, 5);
  // Signature Bracelets
  const signatureProducts = products.filter(p => p.subcategory === 'Designer Bracelets');
  const [activeSession, setActiveSession] = useState<SelectedSession | null>(null);
  const [activeSessionIdx, setActiveSessionIdx] = useState(0);

  const handleCarouselScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    if (width > 0) {
      const newIdx = Math.round(scrollLeft / width);
      setActiveSessionIdx(newIdx);
    }
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <HeroSection />

      {/* Trust strip removed because it's now integrated inside HeroSection */}

      {/* ===== HOW KRISSMAAGIIC WAS BORN ===== */}
      <section className="section-pad" style={{ background: 'radial-gradient(circle at 20% 30%, #2D1B0E 0%, #1C0A02 100%)', color: '#fff' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <ScrollFade delay={0}>
                <div className="about-collage">
                  <div className="about-collage-bg-glow" />
                  <div className="about-collage-img-founder" style={{ position: 'relative', width: '100%', height: '600px', inset: 'auto', margin: '0 auto', overflow: 'hidden' }}>
                    <img 
                      src="https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/uploads/founder-1781374944227.webp" 
                      alt="Kriss - Founder of KrissMaagiic" 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </ScrollFade>
            </div>
            <div className="col-lg-6">
              <ScrollFade delay={100}>
                <span className="section-eyebrow" style={{ color: 'var(--gold-light, #FFEFA6)' }}>The beginning</span>
                <h2 className="section-title" style={{ textAlign: 'left', color: '#fff' }}>How <span style={{ color: 'var(--gold-light, #FFEFA6)' }}>KrissMaagiic</span> was born</h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                  Kriss Maagiic was born from my deep passion for spirituality and personal transformation. My journey began in 2022 through intuitive consultations, where I witnessed the profound impact of faith, positive intention, and self-belief. In May 2024, this calling evolved into Kriss Maagiic—a space dedicated to offering authentic crystals that inspire confidence and growth. To me, crystals are more than beautiful stones; they are powerful symbols of hope and the innate strength that exists within us all.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Every creation carries a piece of my heart. &quot;Kriss&quot; comes from my name, and &quot;Maagiic&quot; represents the positive energy infused into every piece. My mission is simple: to help people reconnect with their inner light. My greatest joy is knowing each crystal reaches its new home carrying a message of hope, authenticity, and the belief that true transformation begins from within.
                </p>
                
                <div style={{
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderLeft: '3px solid var(--primary, #C8956C)',
                  borderRadius: '0 12px 12px 0',
                  fontStyle: 'italic',
                  color: 'var(--gold-light, #FFEFA6)',
                  opacity: 0.95,
                  marginTop: '1.5rem'
                }}>
                  &quot;The strongest magic isn&apos;t in the crystal itself—it&apos;s in the intention you awaken through it.&quot;
                  <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'normal', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, color: '#fff' }}>— Kriss</span>
                </div>
                
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                  <Link href="/about" className="btn-outline-custom">
                    <span>Know More</span>
                  </Link>
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SACRED INTUITIVE SESSIONS ===== */}
      <section className="services-section section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">
              <i className="fa-solid fa-moon me-2"></i>Cosmic Services
            </span>
            <h2 className="section-title">
              Sacred <span>Intuitive Sessions</span>
            </h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            <p className="section-subtitle" style={{ maxWidth: 680, margin: '0 auto' }}>
              Directly book highly personalized tarot readings, custom spells, and astro-numerology charts. All sessions require manual founder approval to guarantee aligned schedules.
            </p>
          </div>

          {/* ===== CUSTOM SESSIONS CAROUSEL ===== */}
          {/* Desktop: 4-column grid | Mobile: 1 card per slide */}
          <div
            id="sessions-carousel"
            onScroll={handleCarouselScroll}
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              overscrollBehaviorX: 'contain',
              gap: 0,
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              padding: '0 0 16px 0',
            }}
          >
            {[
              {
                path: 'PATH I',
                icon: 'fa-solid fa-headphones',
                title: 'Tarot Reading — Voice Chat',
                category: 'Tarot Readings',
                desc: 'Delivered via WhatsApp voice notes. Receive detailed, highly personalized audio responses to your burning questions within 24–48 hours of your booked date.',
                bullets: [
                  'No live timer pressure',
                  'Submit questions 24–48 hours before',
                  'Audio recorded directly by the founder',
                  'Lifetime re-listen access',
                ],
                tiers: [
                  { label: 'Voice Chat (Mini)', price: 1200 },
                  { label: 'Voice Chat (Full)', price: 2000 },
                ],
                slug: 'tarot',
                featured: false,
              },
              {
                path: 'PATH II',
                icon: 'fa-solid fa-video',
                title: 'Live Tarot Reading — Video Call',
                category: 'Tarot Readings',
                desc: 'Conducted face-to-face via WhatsApp Video. Directly connect with the founder for real-time card pull reveals, instant clarifications, and immediate spiritual guidance.',
                bullets: [
                  'Live face-to-face interaction',
                  'Instant card-pull explanations',
                  'WhatsApp video options',
                  'Live energetic connection',
                ],
                tiers: [
                  { label: '30 minutes', price: 2500 },
                  { label: '1 hour', price: 4500 },
                ],
                slug: 'tarot',
                featured: false,
              },
              {
                path: 'PATH III',
                icon: 'fa-solid fa-wand-magic-sparkles',
                title: 'Bespoke Spell Casting Ritual',
                category: 'Spell Casting Services',
                desc: 'Each ritual is uniquely crafted around your intention using candles, crystals, herbs, and focused energy work. Performed personally by our founder, with ritual updates and documentation shared upon completion.',
                bullets: [
                  'Custom-dressed & blessed candles',
                  'Full altar ritual by the founder',
                  'Photo & video proof of the ritual',
                  'Burn notes & energy readings sent',
                ],
                tiers: [
                  { label: 'Travel Safety', price: 1800 },
                  { label: 'Psychic / Intuition', price: 2200 },
                  { label: 'Luck & Career', price: 2900 },
                  { label: 'Reconciliation', price: 3200 },
                  { label: 'Abundance / Wealth', price: 3600 },
                  { label: 'Remove Obstacles', price: 3800 },
                  { label: 'Bindings / Fidelity', price: 4200 },
                  { label: 'Fertility & Family', price: 4200 },
                  { label: 'Success & Growth', price: 4500 },
                  { label: 'Love & Soulmate', price: 4800 },
                  { label: 'Protection Spell', price: 5200 },
                  { label: 'Cleansing / Blessing', price: 6300 },
                ],
                slug: 'candle',
                featured: false,
              },
              {
                path: 'PATH IV',
                icon: 'fa-solid fa-infinity',
                title: 'Numerology Services',
                category: 'Numerology Readings',
                desc: 'Personally prepared and customized readings for your name, business, brand, or birth chart. Delivered digitally via WhatsApp or email within 3–5 business days.',
                bullets: [
                  'Detailed PDF chart report',
                  '5-10 mins WhatsApp explanation',
                  'Lucky numbers & crystal remedies',
                  'Life path & destiny cycles',
                ],
                tiers: [
                  { label: 'Vehicle Number', price: 1999 },
                  { label: 'Date of Birth', price: 2499 },
                  { label: 'Mobile Number', price: 3999 },
                  { label: 'Name Numerology', price: 4999 },
                  { label: 'Business / Brand', price: 9999 },
                ],
                slug: 'numerology',
                featured: false,
              },
            ].map((svc, idx) => (
              <div
                key={svc.title}
                className="sessions-carousel-slide"
                style={{
                  flex: '0 0 calc(25% - 12px)',
                  width: 'calc(25% - 12px)',
                  minWidth: 'calc(25% - 12px)',
                  maxWidth: 'calc(25% - 12px)',
                  scrollSnapAlign: 'start',
                  padding: '0 8px',
                  boxSizing: 'border-box',
                }}
              >
                <ScrollFade delay={idx * 100} className="h-100 d-flex flex-column">
                  <div className={`session-card${svc.featured ? ' featured' : ''}`}>
                    {svc.featured && <span className="session-popular-badge">Most Popular</span>}
                    <div className="session-icon-wrap">
                      <div className="session-icon">
                        <i className={svc.icon}></i>
                      </div>
                    </div>
                    <div className="session-body">
                      <span className="session-path">✦ {svc.path} ✦</span>
                      <h3 className="session-title">{svc.title}</h3>
                      <p className="session-category">{svc.category}</p>
                      <p className="session-desc">{svc.desc}</p>
                      <ul className="session-bullets">
                        {svc.bullets.map((b) => (
                          <li key={b}>
                            <span className="session-bullet-mark">✦</span> {b}
                          </li>
                        ))}
                      </ul>
                      <div className="session-price-range">
                        <span className="price-range-label">Energy Exchange</span>
                        <span className="price-range-value">
                          <SimplePrice price={Math.min(...svc.tiers.map(t => t.price))} /> – <SimplePrice price={Math.max(...svc.tiers.map(t => t.price))} />
                        </span>
                      </div>
                      <Link
                        href={`/booking/${svc.slug}`}
                        className="session-cta"
                        style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </ScrollFade>
              </div>
            ))}
          </div>

          <div className="sessions-carousel-dots">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                type="button"
                className={`sessions-carousel-dot ${activeSessionIdx === idx ? 'active' : ''}`}
                onClick={() => {
                  const container = document.getElementById('sessions-carousel');
                  if (container) {
                    container.scrollTo({
                      left: idx * container.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE CRYSTALS CAROUSEL ===== */}
      <SignatureCarousel products={signatureProducts} />

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="products-section section-pad" id="featured-products">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Our Bestsellers</span>
            <h2 className="section-title">Featured <span>Crystal Collections</span></h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            <p className="section-subtitle">Each piece is handpicked, energised and ready to work its magic in your life.</p>
          </div>

          <div className="shop-products-grid">
            {featuredProducts.map((product, idx) => (
              <ScrollFade key={product.id} delay={idx * 80}>
                <ProductCard product={product} />
              </ScrollFade>
            ))}

            {/* View More Card */}
            <ScrollFade delay={featuredProducts.length * 80}>
              <Link href="/shop" className="pc-view-more-card">
                <div className="pc-view-more-inner">
                  <i className="fa-solid fa-gem pc-view-more-icon" />
                  <h3 className="pc-view-more-title">View More</h3>
                  <p className="pc-view-more-desc">Explore the entire sacred collection</p>
                </div>
              </Link>
            </ScrollFade>
          </div>

          <div className="text-center mt-5">
            <Link href="/shop" className="btn-primary-custom">
              <span>Explore All Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SHOP SACRED INTENTION ===== */}
      <section className="section-pad" style={{ background: 'var(--bg-soft, #FAF6F1)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">
              <i className="fa-solid fa-compass me-2"></i>Cosmic Navigation
            </span>
            <h2 className="section-title">Shop Sacred <span>Intention</span></h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            <p className="section-subtitle">
              “Each crystal carries its own story. Trust the one that speaks to your heart.” ✨
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'Love & Harmony',
                desc: 'Amplify relationship fidelity, self-love, and heart chakra alignment.',
                icon: '/images/icons/love-harmony.png',
                href: '/shop?intent=love',
              },
              {
                title: 'Wealth & Abundance',
                desc: 'Unlock entrepreneurial prosperity, attract positive career flow, and clear debt blocks.',
                icon: '/images/icons/wealth-abundance.png',
                href: '/shop?intent=wealth',
              },
              {
                title: 'Aura Protection',
                desc: 'Promotes grounding, energetic protection, and balance, supporting a centered and positive mindset. ✨',
                icon: '/images/icons/aura-protection.png',
                href: '/shop?intent=protection',
              },
              {
                title: 'Peace & Serenity',
                desc: 'Soften anxious breathing patterns, clear overthinking, and enjoy restorative sleep.',
                icon: '/images/icons/peace-serenity.png',
                href: '/shop?intent=peace',
              },
            ].map((item, idx) => (
              <div className="col-sm-6 col-lg-3" key={item.title}>
                <ScrollFade delay={idx * 80} className="h-100 d-flex flex-column">
                  <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                    <div className="intention-card">
                      <div className="intention-icon">
                        <img src={item.icon} alt={item.title} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                      </div>
                      <h4 className="intention-title">{item.title}</h4>
                      <p className="intention-desc">{item.desc}</p>
                    </div>
                  </Link>
                </ScrollFade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND FEATURES ===== */}
      <section className="brand-strip section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Why KrissMaagiic</span>
            <h2 className="section-title">
              Crystals with <span>Purpose &amp; Soul</span>
            </h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
          </div>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <ScrollFade delay={0}>
                <div className="brand-feature-card text-center">
                  <span className="brand-feature-number">I</span>
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
                  <span className="brand-feature-number">II</span>
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
                  <span className="brand-feature-number">III</span>
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
                  <span className="brand-feature-number">IV</span>
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
                image: '/images/crystals/amethyst.png',
                tags: ['Peace', 'Clarity', 'Protection'],
              },
              {
                name: 'Rose Quartz',
                keyword: 'Serenity & Emotional Balance',
                desc: 'The stone of unconditional love. Rose Quartz opens the heart chakra, promoting self-love, compassion and peaceful relationships.',
                color: 'rgba(235,140,150,0.15)',
                gradient: 'linear-gradient(135deg,#F48FB1,#E91E8C)',
                emoji: '🩷',
                image: '/images/crystals/rosequartz.png',
                tags: ['Love', 'Harmony', 'Healing'],
              },
              {
                name: 'Celestite',
                keyword: 'Peace & Angelic Connection',
                desc: 'A high-vibration crystal that connects you to the angelic realm. Celestite promotes peace, uplifts the spirit and encourages divine communication.',
                color: 'rgba(100,149,237,0.15)',
                gradient: 'linear-gradient(135deg,#C8E6FA,#7EC8E3)',
                emoji: '💎',
                image: '/images/crystals/celestite.png',
                tags: ['Angelic', 'Calm', 'Intuition'],
              },
            ].map((c, idx) => (
              <div className="col-sm-6 col-lg-4" key={c.name}>
                <ScrollFade delay={idx * 80}>
                  <div className="crystal-card" style={{ '--crystal-color': c.color } as React.CSSProperties}>
                    <div className="crystal-gem-image-wrapper">
                      <img src={c.image} alt={c.name} className="crystal-gem-image" />
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
            <h2 className="section-title">
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

      {/* ===== CTA BANNER (Hidden for now) ===== */}
      {/* 
      <section className="cta-banner">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-gem">
            <i className="fa-solid fa-gem"></i>
          </div>
          <span className="section-eyebrow">Find Your Crystal</span>
          <h2 className="section-title">
            Not Sure Which Crystal is <span>Right for You?</span>
          </h2>
          <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
          <p className="section-subtitle" style={{ maxWidth: 560, margin: '0 auto' }}>
            Take our quick Crystal Suggestion quiz and we&apos;ll match you with your perfect stone.
          </p>
          <div className="cta-banner-btns">
            <Link href="/crystal-strength#quiz" className="cta-banner-btn-primary">
              <i className="fa-solid fa-wand-sparkles"></i>
              <span>Take the Quiz</span>
            </Link>
            <Link href="/contact" className="cta-banner-btn-ghost">
              <i className="fa-solid fa-comments"></i>
              <span>Talk to Kriss</span>
            </Link>
          </div>
        </div>
      </section>
      */}


      {/* ===== BOOKING MODAL ===== */}
      {activeSession && (
        <BookingModal
          open={true}
          onClose={() => setActiveSession(null)}
          serviceSlug={activeSession.serviceSlug}
          title={activeSession.title}
          tiers={activeSession.tiers}
        />
      )}
    </>
  );
}
