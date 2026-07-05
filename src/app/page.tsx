'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import HeroSection from '@/components/HeroSection';
import ScrollFade from '@/components/ScrollFade';
import ProductCard from '@/components/ProductCard';
import BookingModal, { BookingTier } from '@/components/BookingModal';
import SignatureCarousel from '@/components/SignatureCarousel';
import SpiritualReels from '@/components/SpiritualReels';
import MobileSearchBar from '@/components/MobileSearchBar';
import TestimonialText from '@/components/TestimonialText';
import SimplePrice from '@/components/SimplePrice';
import { testimonials } from '@/data/testimonials';
import CrystalCard from './crystal-strength/CrystalCard';
import CrystalProductsModal from './crystal-strength/CrystalProductsModal';

interface SelectedSession {
  serviceSlug: string;
  title: string;
  tiers: BookingTier[];
}

interface HomepageService {
  path: string;
  icon: string;
  title: string;
  category: string;
  desc: string;
  bullets: string[];
  tiers: { label: string; price: number; usdPrice?: number }[];
  slug: string;
  bookingUrl: string;
  featured: boolean;
}

export default function Home() {
  const router = useRouter();
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();
  
  // Custom Crystal Bracelet States
  const [customOption, setCustomOption] = useState<'know' | 'help'>('know');
  const [opt1Crystals, setOpt1Crystals] = useState<string[]>([]);
  const [opt1Notes, setOpt1Notes] = useState<string>('');
  const [opt2SupportAreas, setOpt2SupportAreas] = useState<string[]>([]);
  const [opt2Priority, setOpt2Priority] = useState<string>('');
  const [opt2Intention, setOpt2Intention] = useState<string>('');

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmittingCustom, setIsSubmittingCustom] = useState<boolean>(false);

  const CRYSTALS_LIST = [
    { name: 'Rose Quartz', effect: 'Love & Self-Love' },
    { name: 'Black Tourmaline', effect: 'Protection from Negative Energy' },
    { name: 'Tiger Eye', effect: 'Confidence & Success' },
    { name: 'Citrine', effect: 'Wealth & Abundance' },
    { name: 'Amethyst', effect: 'Peace & Spiritual Growth' },
    { name: 'Clear Quartz', effect: 'Clarity & Energy Amplification' },
    { name: 'Green Aventurine', effect: 'Luck & Opportunities' },
    { name: 'Pyrite', effect: 'Business Success & Prosperity' },
    { name: 'Carnelian', effect: 'Motivation & Career Growth' },
    { name: 'Moonstone', effect: 'Emotional Balance & New Beginnings' },
    { name: 'Labradorite', effect: 'Transformation & Protection' },
    { name: 'Lapis Lazuli', effect: 'Wisdom & Communication' },
    { name: 'Smoky Quartz', effect: 'Grounding & Stability' },
    { name: 'Garnet', effect: 'Passion, Relationships & Vitality' },
    { name: 'Seven Chakra Crystal', effect: 'Overall Balance & Well-Being' }
  ];

  const SUPPORT_AREAS_LIST = [
    'Love & Relationships',
    'Marriage & Commitment',
    'Self-Love',
    'Emotional Healing',
    'Protection from Negativity',
    'Confidence & Courage',
    'Career Growth',
    'Business Success',
    'Financial Abundance',
    'Focus & Studies',
    'Stress Relief',
    'Anxiety Management',
    'Better Sleep',
    'Spiritual Growth',
    'Family Harmony',
    'Health & Wellness Support',
    'Overall Balance'
  ];

  const PRIORITY_AREAS = [
    'Personal Life',
    'Relationships',
    'Career',
    'Business',
    'Finance',
    'Health & Wellness',
    'Spiritual Growth'
  ];

  const handleCustomBraceletSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validation
    if (customOption === 'know') {
      if (opt1Crystals.length === 0) {
        setSubmitError('Please select at least one crystal for your bracelet.');
        return;
      }
    } else {
      if (opt2SupportAreas.length === 0) {
        setSubmitError('Please select at least one area you would like support with.');
        return;
      }
      if (!opt2Priority) {
        setSubmitError('Please select your highest priority area.');
        return;
      }
      if (!opt2Intention.trim()) {
        setSubmitError('Please describe your intention for the bracelet.');
        return;
      }
    }

    setIsSubmittingCustom(true);
    try {
      const details = {
        option: customOption === 'know' ? 'I Know My Crystals' : 'Help Me Choose My Crystals',
        selectedCrystals: customOption === 'know' ? opt1Crystals : null,
        additionalNotes: customOption === 'know' ? opt1Notes : null,
        supportAreas: customOption === 'help' ? opt2SupportAreas : null,
        highestPriority: customOption === 'help' ? opt2Priority : null,
        intentionDescription: customOption === 'help' ? opt2Intention : null,
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('kmc_custom_bracelet', JSON.stringify(details));
      }

      await addItem('custom-bracelet', 1);
      router.push('/checkout');
    } catch (err) {
      console.error('Error adding custom bracelet to cart:', err);
      setSubmitError('Failed to add custom bracelet to cart. Please try again.');
    } finally {
      setIsSubmittingCustom(false);
    }
  };

  const toggleCrystal = (name: string) => {
    setOpt1Crystals((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );
  };

  const toggleSupportArea = (area: string) => {
    setOpt2SupportAreas((prev) =>
      prev.includes(area) ? prev.filter((x) => x !== area) : [...prev, area]
    );
  };

  const [dbProducts, setDbProducts] = useState<any[]>([]);
  const [activeCrystal, setActiveCrystal] = useState<any | null>(null);
  const [founderImageUrl, setFounderImageUrl] = useState('https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/uploads/founder-1781446863195.webp');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data.products && Array.isArray(data.products) && data.products.length > 0) {
          setDbProducts(data.products);
        }
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && data.settings && data.settings.founderImageUrl) {
          setFounderImageUrl(data.settings.founderImageUrl);
        }
      })
      .catch((err) => console.error('Error fetching settings:', err));
  }, []);

  // Bestsellers: Display the exact 5 products from the database list by id or slug
  const FEATURED_IDS = [
    'rose-quartz-bracelet',
    'triple-protection-bracelet',
    'money-magnet-bracelet',
    'seven-chakra-bracelet',
    'black-tourmaline-bracelet'
  ];
  const featuredProducts = FEATURED_IDS.map(id =>
    dbProducts.find(p => p.id === id || p.slug === id)
  ).filter(Boolean)
  // ProductCard links to /shop/{product.id} and the product page resolves by slug,
  // so expose the slug as `id` (matches how the shop grid reshapes products).
  .map(p => ({ ...p, id: p.slug }));
  // Signature Bracelets
  const signatureProducts = dbProducts.filter(p => p.subcategory?.toLowerCase() === 'signature bracelets');
  const [activeSession, setActiveSession] = useState<SelectedSession | null>(null);
  const [activeSessionIdx, setActiveSessionIdx] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [list, setList] = useState(testimonials);
  // Size the carousel viewport to the *active* card so each testimonial shows at
  // its own height (no empty space under short reviews). Tracks content changes
  // (font load, Read more expansion, resize) via ResizeObserver.
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [viewportH, setViewportH] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = slideRefs.current[activeTestimonial];
    if (!el) return;
    const update = () => setViewportH(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [activeTestimonial, list]);

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && Array.isArray(data.testimonials) && data.testimonials.length > 0) {
          setList(data.testimonials);
        }
      })
      .catch((err) => console.error('Error fetching testimonials:', err));
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + list.length) % list.length);
  };
  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % list.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % list.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [list.length]);

  const handleCarouselScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    if (width > 0) {
      const newIdx = Math.round(scrollLeft / width);
      setActiveSessionIdx(newIdx);
    }
  };

  const PATHS = ['PATH I', 'PATH II', 'PATH III', 'PATH IV', 'PATH V'];

  function bookingUrlForSlug(slug: string, id: string) {
    if (slug === 'tarot-video') return '/booking/tarot?type=video';
    if (slug === 'spelljar') return '/shop?category=spell-jars';
    return `/booking/${id}`;
  }

  const [homepageServices, setHomepageServices] = useState<HomepageService[]>([]);

  useEffect(() => {
    fetch('/api/services', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && Array.isArray(data.services) && data.services.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mapped: HomepageService[] = data.services.map((svc: any, idx: number) => ({
            path: PATHS[idx] ?? `PATH ${idx + 1}`,
            icon: svc.icon || 'fa-solid fa-sparkles',
            title: svc.title,
            category: svc.tagline || '',
            desc: svc.desc,
            bullets: svc.bullets || [],
            tiers: svc.tiers || [],
            slug: svc.slug,
            bookingUrl: bookingUrlForSlug(svc.slug, svc.id),
            featured: false,
          }));
          setHomepageServices(mapped);
        }
      })
      .catch((err) => console.error('Error fetching services:', err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <div className="about-collage-img-founder" style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '440px',
                    height: 'auto',
                    aspectRatio: '3 / 4.2',
                    inset: 'auto',
                    margin: '0 auto',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    background: '#000000',
                    border: '1px solid rgba(232, 201, 154, 0.45)',
                    outline: '1px solid rgba(232, 201, 154, 0.2)',
                    outlineOffset: '-8px',
                    padding: '10px',
                    boxShadow: '0 24px 50px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(0, 0, 0, 0.9)'
                  }}>
                    <img
                      src={founderImageUrl}
                      alt="Kriss - Founder of KrissMaagiic"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 30%',
                        borderRadius: '16px',
                        transition: 'transform 0.4s ease'
                      }}
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

      {/* ===== MOBILE SEARCH BAR ===== */}
      <MobileSearchBar />

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
        </div>

        {/* ===== CUSTOM SESSIONS CAROUSEL - outside container for full-width on mobile ===== */}
        <div style={{ position: 'relative' }}>
          {/* Mobile-only prev arrow */}
          <button
            type="button"
            aria-label="Previous service"
            className="d-lg-none"
            onClick={() => {
              const container = document.getElementById('sessions-carousel');
              if (container) {
                const newIdx = Math.max(0, activeSessionIdx - 1);
                container.scrollTo({ left: newIdx * container.clientWidth, behavior: 'smooth' });
              }
            }}
            style={{
              position: 'absolute', left: 8, top: '50%', transform: 'translateY(-60%)',
              zIndex: 10, width: 38, height: 38, borderRadius: '50%',
              background: 'linear-gradient(135deg, #2D1B0E, #1C0A02)',
              border: '1.5px solid rgba(200,149,108,0.55)',
              color: '#C8956C', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              opacity: activeSessionIdx === 0 ? 0.3 : 1,
              pointerEvents: activeSessionIdx === 0 ? 'none' : 'auto',
              transition: 'opacity 0.2s',
            }}
          >
            <i className="fa-solid fa-chevron-left" style={{ fontSize: '0.8rem' }}></i>
          </button>

          {/* Mobile-only next arrow */}
          <button
            type="button"
            aria-label="Next service"
            className="d-lg-none"
            onClick={() => {
              const container = document.getElementById('sessions-carousel');
              if (container) {
                const newIdx = Math.min(homepageServices.length - 1, activeSessionIdx + 1);
                container.scrollTo({ left: newIdx * container.clientWidth, behavior: 'smooth' });
              }
            }}
            style={{
              position: 'absolute', right: 8, top: '50%', transform: 'translateY(-60%)',
              zIndex: 10, width: 38, height: 38, borderRadius: '50%',
              background: 'linear-gradient(135deg, #2D1B0E, #1C0A02)',
              border: '1.5px solid rgba(200,149,108,0.55)',
              color: '#C8956C', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              opacity: activeSessionIdx === homepageServices.length - 1 ? 0.3 : 1,
              pointerEvents: activeSessionIdx === homepageServices.length - 1 ? 'none' : 'auto',
              transition: 'opacity 0.2s',
            }}
          >
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.8rem' }}></i>
          </button>

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
              background: 'var(--light-2)',
            }}
          >
            {homepageServices.map((svc, idx) => (
              <div
                key={svc.title}
                className="sessions-carousel-slide"
                style={{
                  flex: '0 0 25%',
                  width: '25%',
                  minWidth: '25%',
                  maxWidth: '25%',
                  scrollSnapAlign: 'start',
                  padding: '0 12px',
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
                          {svc.tiers.length > 0 ? (() => {
                            const minTier = svc.tiers.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
                            const maxTier = svc.tiers.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
                            return (
                              <>
                                <SimplePrice price={minTier.price} usdPrice={minTier.usdPrice} />
                                {minTier.price !== maxTier.price && <>{' – '}<SimplePrice price={maxTier.price} usdPrice={maxTier.usdPrice} /></>}
                              </>
                            );
                          })() : <SimplePrice price={0} usdPrice={0} />}
                        </span>
                      </div>
                      <Link
                        href={svc.bookingUrl || `/booking/${svc.slug}`}
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
        </div>

        <div className="container">
          <div className="sessions-carousel-dots">
            {homepageServices.map((_, idx) => (
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

      {/* ===== SPIRITUAL REELS SECTIONS ===== */}
      <SpiritualReels />

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
            {featuredProducts.length === 0
              ? FEATURED_IDS.map((id) => (
                  // Skeleton placeholders reserve card space while products load (prevents CLS)
                  <div key={id} aria-hidden="true" style={{ borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
                    <div style={{ aspectRatio: '1 / 1', background: 'linear-gradient(110deg, #F5EFE8 30%, #FBF7F2 50%, #F5EFE8 70%)', backgroundSize: '200% 100%', animation: 'kmcShimmer 1.4s linear infinite' }} />
                    <div style={{ padding: '14px 16px' }}>
                      <div style={{ height: 14, width: '70%', borderRadius: 6, background: '#F0E9E0', marginBottom: 10 }} />
                      <div style={{ height: 12, width: '40%', borderRadius: 6, background: '#F5EFE8' }} />
                    </div>
                  </div>
                ))
              : featuredProducts.map((product, idx) => (
              <ScrollFade key={product.id} delay={idx * 80}>
                <ProductCard product={product} />
              </ScrollFade>
            ))}
            <Link href="/shop?category=bracelets-by-crystals" className="shop-view-all-card">
              <div className="shop-view-all-inner">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text,#2D1B0E)', marginBottom: '0.3rem' }}>View More</div>
                <div style={{ fontSize: '0.78rem', color: '#888', marginBottom: '0.75rem' }}>Explore our bracelets</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'var(--primary,#C8956C)', color: '#fff', borderRadius: 20, padding: '0.35rem 0.9rem', fontSize: '0.78rem', fontWeight: 600 }}>
                  View Bracelets <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-5">
            <Link href="/shop?category=view-all" className="btn-primary-custom">
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
                chakras: ['Third Eye', 'Crown'],
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
                chakras: ['Heart'],
              },
              {
                name: 'Citrine',
                keyword: 'Abundance & Confidence',
                desc: "The merchant's stone — Citrine draws prosperity, sharpens willpower and brightens your aura.",
                color: 'rgba(255, 210, 127, 0.15)',
                gradient: 'linear-gradient(135deg,#FFD27F,#E59500)',
                emoji: '💛',
                image: '/images/crystals/citrine.png',
                tags: ['Wealth', 'Joy', 'Success'],
                chakras: ['Solar Plexus', 'Sacral'],
              },
            ].map((c, idx) => (
              <div className="col-sm-6 col-lg-4" key={c.name}>
                <ScrollFade delay={idx * 80}>
                  <div onClick={() => setActiveCrystal(c)} style={{ height: '100%', cursor: 'pointer' }}>
                    <CrystalCard crystal={c} />
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

      {/* ===== CREATE YOUR PERSONALIZED CRYSTAL BRACELET ===== */}
      <section className="section-pad" style={{
        background: 'radial-gradient(circle at 50% 50%, #2D1B0E 0%, #150600 100%)',
        color: '#fff',
        borderTop: '1px solid rgba(232, 201, 154, 0.15)',
        borderBottom: '1px solid rgba(232, 201, 154, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle cosmic background sparks/glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(200, 149, 108, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(155, 89, 182, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '960px', position: 'relative', zIndex: 2 }}>
          <div className="text-center mb-5">
            <span className="section-eyebrow" style={{ color: 'var(--gold-light, #FFEFA6)' }}>
              <i className="fa-solid fa-wand-sparkles me-2"></i>Unique Energy Journey
            </span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Create Your <span>Personalized Crystal Bracelet</span>
            </h2>
            <div className="divider-ornament" style={{ color: 'var(--gold-light, #FFEFA6)' }}>
              <i className="fa-solid fa-diamond-turn-right"></i>
            </div>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Every person is unique, and so is their energy journey. Our Custom Crystal Bracelet service allows you to create a bracelet tailored to your intentions, goals, and preferences.
            </p>
            <p className="section-subtitle mt-2" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '720px', margin: '0 auto', fontSize: '0.95rem' }}>
              Whether you already know the crystals you want or need guidance selecting the perfect combination, we will handcraft a bracelet designed especially for you.
            </p>
          </div>

          <form onSubmit={handleCustomBraceletSubmit} style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(232, 201, 154, 0.2)',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Customizer Mode Switcher Tabs */}
            <div className="row g-3 mb-5 justify-content-center">
              <div className="col-md-6">
                <button
                  type="button"
                  className={`w-100 p-3 rounded-4 transition-all ${customOption === 'know' ? 'active' : ''}`}
                  onClick={() => { setCustomOption('know'); setSubmitError(null); }}
                  style={{
                    background: customOption === 'know' ? 'var(--primary, #C8956C)' : 'rgba(255, 255, 255, 0.03)',
                    color: customOption === 'know' ? '#fff' : 'rgba(255,255,255,0.7)',
                    border: '1px solid',
                    borderColor: customOption === 'know' ? 'var(--primary, #C8956C)' : 'rgba(232, 201, 154, 0.25)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    boxShadow: customOption === 'know' ? '0 8px 24px rgba(200, 149, 108, 0.3)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase' }}>Option 1</span>
                  <span>I Know My Crystals</span>
                </button>
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className={`w-100 p-3 rounded-4 transition-all ${customOption === 'help' ? 'active' : ''}`}
                  onClick={() => { setCustomOption('help'); setSubmitError(null); }}
                  style={{
                    background: customOption === 'help' ? 'var(--primary, #C8956C)' : 'rgba(255, 255, 255, 0.03)',
                    color: customOption === 'help' ? '#fff' : 'rgba(255,255,255,0.7)',
                    border: '1px solid',
                    borderColor: customOption === 'help' ? 'var(--primary, #C8956C)' : 'rgba(232, 201, 154, 0.25)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    boxShadow: customOption === 'help' ? '0 8px 24px rgba(200, 149, 108, 0.3)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase' }}>Option 2</span>
                  <span>Help Me Choose My Crystals</span>
                </button>
              </div>
            </div>

            {/* TAB 1 CONTENT: I Know My Crystals */}
            {customOption === 'know' && (
              <div className="mb-4">
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--gold-light, #FFEFA6)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-gem"></i>
                  Select Your Preferred Crystals
                  <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'rgba(255,255,255,0.6)', marginLeft: '6px' }}>(Multiple selections allowed)</span>
                </h4>

                <div className="row g-3">
                  {CRYSTALS_LIST.map((crystal) => {
                    const selected = opt1Crystals.includes(crystal.name);
                    return (
                      <div className="col-sm-6 col-md-4" key={crystal.name}>
                        <div
                          onClick={() => toggleCrystal(crystal.name)}
                          style={{
                            padding: '12px 16px',
                            background: selected ? 'rgba(200, 149, 108, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                            border: '1.5px solid',
                            borderColor: selected ? 'var(--primary, #C8956C)' : 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            transition: 'all 0.25s ease',
                            boxShadow: selected ? '0 4px 12px rgba(200, 149, 108, 0.1)' : 'none'
                          }}
                          className="crystal-checkbox-item"
                        >
                          <div style={{
                            width: '20px',
                            height: '20px',
                            border: '1.5px solid',
                            borderColor: selected ? 'var(--primary, #C8956C)' : 'rgba(255, 255, 255, 0.4)',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: selected ? 'var(--primary, #C8956C)' : 'transparent',
                            color: '#fff',
                            fontSize: '0.75rem',
                            flexShrink: 0
                          }}>
                            {selected && <i className="fa-solid fa-check"></i>}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: selected ? '#FFEFA6' : '#fff' }}>{crystal.name}</span>
                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{crystal.effect}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4">
                  <label htmlFor="opt1Notes" className="form-label" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--gold-light, #FFEFA6)', marginBottom: '8px', display: 'block' }}>
                    Additional Notes
                  </label>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
                    Tell us how you would like your bracelet customized.
                  </p>
                  <textarea
                    id="opt1Notes"
                    className="form-control"
                    rows={3}
                    value={opt1Notes}
                    onChange={(e) => setOpt1Notes(e.target.value)}
                    placeholder="E.g., Please add a silver spacers or combine these crystals in a symmetric sequence..."
                    style={{
                      background: 'rgba(0, 0, 0, 0.2)',
                      border: '1.5px solid rgba(232, 201, 154, 0.25)',
                      borderRadius: '12px',
                      color: '#fff',
                      padding: '12px'
                    }}
                  />
                </div>
              </div>
            )}

            {/* TAB 2 CONTENT: Help Me Choose My Crystals */}
            {customOption === 'help' && (
              <div className="mb-4">
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--gold-light, #FFEFA6)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-hand-holding-heart"></i>
                  What would you like support with?
                  <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'rgba(255,255,255,0.6)', marginLeft: '6px' }}>(Multiple selections allowed)</span>
                </h4>

                <div className="row g-2 mb-4">
                  {SUPPORT_AREAS_LIST.map((area) => {
                    const selected = opt2SupportAreas.includes(area);
                    return (
                      <div className="col-6 col-sm-4 col-md-3" key={area}>
                        <div
                          onClick={() => toggleSupportArea(area)}
                          style={{
                            padding: '10px 12px',
                            background: selected ? 'rgba(155, 89, 182, 0.2)' : 'rgba(255, 255, 255, 0.02)',
                            border: '1.5px solid',
                            borderColor: selected ? '#9B59B6' : 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.25s ease',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: '0.85rem'
                          }}
                        >
                          <div style={{
                            width: '16px',
                            height: '16px',
                            border: '1.5px solid',
                            borderColor: selected ? '#9B59B6' : 'rgba(255, 255, 255, 0.4)',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: selected ? '#9B59B6' : 'transparent',
                            color: '#fff',
                            fontSize: '0.65rem',
                            flexShrink: 0
                          }}>
                            {selected && <i className="fa-solid fa-check"></i>}
                          </div>
                          <span style={{ fontWeight: 600, color: selected ? '#FFEFA6' : '#fff' }}>{area}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label htmlFor="opt2Priority" className="form-label" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--gold-light, #FFEFA6)', marginBottom: '8px', display: 'block' }}>
                      Which area is your highest priority?
                    </label>
                    <select
                      id="opt2Priority"
                      className="form-select"
                      value={opt2Priority}
                      onChange={(e) => setOpt2Priority(e.target.value)}
                      style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        border: '1.5px solid rgba(232, 201, 154, 0.25)',
                        borderRadius: '12px',
                        color: '#fff',
                        padding: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="" disabled style={{ background: '#1c0a02' }}>-- Select Priority Area --</option>
                      {PRIORITY_AREAS.map(p => (
                        <option key={p} value={p} style={{ background: '#1c0a02' }}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="opt2Intention" className="form-label" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--gold-light, #FFEFA6)', marginBottom: '8px', display: 'block' }}>
                    Describe Your Intention
                  </label>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', lineHeight: 1.5 }}>
                    Please share what you are currently experiencing and what you wish to attract into your life. The more details you provide, the better we can recommend a personalized crystal combination.
                  </p>
                  <textarea
                    id="opt2Intention"
                    className="form-control"
                    rows={4}
                    value={opt2Intention}
                    onChange={(e) => setOpt2Intention(e.target.value)}
                    placeholder="Example: “I would like support with confidence in my career, financial growth, emotional balance, and protection from negative energy.”"
                    style={{
                      background: 'rgba(0, 0, 0, 0.2)',
                      border: '1.5px solid rgba(232, 201, 154, 0.25)',
                      borderRadius: '12px',
                      color: '#fff',
                      padding: '12px'
                    }}
                  />
                </div>
              </div>
            )}


            {/* Personalized Crystal Recommendation Disclaimer */}
            <div className="mt-5 p-3 rounded-4" style={{
              background: 'rgba(200, 149, 108, 0.05)',
              border: '1px dashed rgba(200, 149, 108, 0.25)',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.6
            }}>
              <strong style={{ color: 'var(--gold-light, #FFEFA6)', display: 'block', marginBottom: '4px' }}>
                ✦ Personalized Crystal Recommendation
              </strong>
              Our crystal recommendations are based on traditional crystal healing practices and your submitted preferences. Crystals are complementary spiritual tools and are not intended to replace medical, financial, psychological, or professional advice.
            </div>

            {/* Error Message Alert */}
            {submitError && (
              <div className="mt-4 p-3 rounded-3" style={{
                background: 'rgba(231, 76, 60, 0.1)',
                border: '1.5px solid rgba(231, 76, 60, 0.4)',
                color: '#e74c3c',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <i className="fa-solid fa-circle-exclamation"></i>
                <span>{submitError}</span>
              </div>
            )}

            {/* Checkout Pricing and Submit Button */}
            <div className="mt-5 text-center">
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Price Exchange</span>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--gold-light, #FFEFA6)', fontFamily: 'var(--font-heading)' }}>
                  {formatPrice(3200, 64)}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmittingCustom}
                className="btn-primary-custom"
                style={{
                  padding: '14px 44px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  borderRadius: '30px',
                  boxShadow: '0 8px 30px rgba(200, 149, 108, 0.4)',
                  cursor: isSubmittingCustom ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmittingCustom ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    CREATING...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-wand-magic-sparkles me-2"></i>
                    CREATE MY PERSONALIZED BRACELET
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section section-pad" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow" style={{ color: 'var(--accent)' }}>Client Love</span>
            <h2 className="section-title">
              What Our <span>Clients Say</span>
            </h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '720px', margin: '0 auto', padding: '0 50px' }}>
            <div style={{ overflow: 'hidden', width: '100%', borderRadius: 16, height: viewportH, transition: 'height 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', transform: `translateX(-${activeTestimonial * 100}%)`, transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                {list.map((t, i) => (
                  <div key={t.name} ref={(el) => { slideRefs.current[i] = el; }} style={{ flex: '0 0 100%', width: '100%', boxSizing: 'border-box' }}>
                    <div className="testimonial-card" style={{ margin: 0 }}>
                      <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                      <TestimonialText text={t.text} />
                      <div className="testimonial-author">
                        <div className="testimonial-avatar">{t.avatar}</div>
                        <div>
                          <p className="testimonial-name">{t.name}</p>
                          <p className="testimonial-role">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevTestimonial}
              className="testimonial-carousel-btn"
              style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
              aria-label="Previous testimonial"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={handleNextTestimonial}
              className="testimonial-carousel-btn"
              style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
              aria-label="Next testimonial"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {list.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                style={{
                  width: activeTestimonial === idx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: activeTestimonial === idx ? 'var(--primary,#C8956C)' : 'rgba(255,255,255,0.2)',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
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

      {/* ===== CRYSTAL PRODUCTS MODAL ===== */}
      {activeCrystal && (
        <CrystalProductsModal
          crystal={activeCrystal}
          onClose={() => setActiveCrystal(null)}
        />
      )}
    </>
  );
}
