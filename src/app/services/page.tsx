import Link from 'next/link';
import ScrollFade from '@/components/ScrollFade';
import { getAllServices } from '@/lib/catalog';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Services · KrissMaagiic Crystals',
  description: 'Book tarot readings, candle spells, custom spell jars and numerology sessions with Kriss.',
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url("/services-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
      }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Healing Sessions &amp; Rituals
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>
            Spiritual <span className="highlight">Services with Kriss</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, margin: '1rem auto 0' }}>
            Personalised, intuitive and held with care. Every session is shaped by your energy and your questions.
          </p>
        </div>
      </section>

      {/* ── SERVICES CATALOG — GALAXY THEME ── */}
      <section
        id="book"
        className="section-pad"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 20%, #0d041a 0%, #06020c 60%, #010003 100%)',
          borderTop: '1px solid rgba(200,149,108,0.15)',
        }}
      >
        {/* ── Galaxy background layers ── */}
        <div className="galaxy-stars-wrapper">
          <div className="galaxy-nebula nebula-purple"></div>
          <div className="galaxy-nebula nebula-blue"></div>
          <div className="space-stars stars-small"></div>
          <div className="space-stars stars-medium"></div>
          <div className="space-stars stars-large"></div>
          <div className="celestial-orbit-1"></div>
          <div className="celestial-orbit-2"></div>

          {/* Extra orbit ring */}
          <div className="svc-orbit-xl"></div>

          {/* ── Meteors — 3 directions, every 6s ── */}
          <div className="svc-meteor svc-meteor--1"></div>
          <div className="svc-meteor svc-meteor--2"></div>
          <div className="svc-meteor svc-meteor--3"></div>


          {/* ── Glowing star dots (static large bright stars) ── */}
          <div className="svc-glow-star" style={{ top: '12%', left: '8%', width: 3, height: 3 }}></div>
          <div className="svc-glow-star" style={{ top: '28%', left: '92%', width: 4, height: 4 }}></div>
          <div className="svc-glow-star" style={{ top: '55%', left: '5%', width: 2, height: 2 }}></div>
          <div className="svc-glow-star" style={{ top: '72%', left: '78%', width: 3, height: 3 }}></div>
          <div className="svc-glow-star" style={{ top: '40%', left: '50%', width: 2, height: 2 }}></div>
          <div className="svc-glow-star" style={{ top: '85%', left: '35%', width: 4, height: 4 }}></div>
          <div className="svc-glow-star" style={{ top: '18%', left: '65%', width: 2, height: 2 }}></div>
          <div className="svc-glow-star" style={{ top: '62%', left: '88%', width: 3, height: 3 }}></div>
        </div>

        {/* ── Section header ── */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center mb-5">
            <span className="section-eyebrow" style={{ color: 'rgba(255,220,150,0.85)' }}>
              <i className="fa-solid fa-moon me-2"></i>Cosmic Services
            </span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Sacred <span style={{ color: 'var(--gold-light,#FFEFA6)', fontStyle: 'italic' }}>Healing Sessions</span>
            </h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto' }}>
              Each session is a portal. Choose your path and let the stars align with your intention.
            </p>
          </div>

          {/* ── Service cards ── */}
          <div style={{ display: 'grid', gap: '3rem' }}>
            {services.map((svc, idx) => (
              <ScrollFade key={svc.id} delay={idx * 80}>
                <div
                  id={svc.slug}
                  style={{
                    scrollMarginTop: '120px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(200,149,108,0.2)',
                    borderRadius: 28,
                    padding: '2rem',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(162,59,236,0.05)',
                    transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  className="services-galaxy-card"
                >
                  {/* Glow corner accent */}
                  <div style={{
                    position: 'absolute',
                    top: idx % 2 === 0 ? -60 : 'auto',
                    bottom: idx % 2 === 1 ? -60 : 'auto',
                    right: -60,
                    width: 200, height: 200,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(200,149,108,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />

                  {/* Image side */}
                  <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                    <div style={{
                      borderRadius: 20,
                      overflow: 'hidden',
                      border: '1px solid rgba(200,149,108,0.25)',
                      boxShadow: '0 12px 35px rgba(0,0,0,0.6), 0 0 20px rgba(162,59,236,0.08)',
                      position: 'relative',
                    }}>
                      <img
                        src={svc.image}
                        alt={svc.title}
                        style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
                      />
                      {/* Image overlay shimmer */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(135deg, rgba(162,59,236,0.08) 0%, transparent 60%, rgba(200,149,108,0.08) 100%)',
                        pointerEvents: 'none',
                      }} />
                    </div>
                  </div>

                  {/* Content side */}
                  <div style={{ order: idx % 2 === 1 ? 1 : 2, position: 'relative', zIndex: 1 }}>
                    {/* Service icon */}
                    <div style={{
                      width: 64, height: 64, borderRadius: '18px',
                      background: 'linear-gradient(135deg, rgba(200,149,108,0.15) 0%, rgba(162,59,236,0.1) 100%)',
                      border: '1px solid rgba(200,149,108,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem', color: 'var(--primary,#C8956C)',
                      marginBottom: '1rem',
                      boxShadow: '0 0 20px rgba(200,149,108,0.15)',
                    }}>
                      <i className={svc.icon}></i>
                    </div>

                    {svc.tagline && (
                      <span style={{
                        display: 'inline-block',
                        fontSize: '0.7rem', letterSpacing: '0.18em',
                        textTransform: 'uppercase', color: 'var(--gold-light,#FFEFA6)',
                        marginBottom: '0.5rem', opacity: 0.85,
                      }}>{svc.tagline}</span>
                    )}

                    <h2 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                      fontWeight: 700, color: '#fff',
                      marginBottom: '0.75rem', lineHeight: 1.2,
                    }}>{svc.title}</h2>

                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1rem' }}>{svc.desc}</p>

                    {svc.bullets.length > 0 && (
                      <ul style={{ padding: 0, margin: '0 0 1.25rem', listStyle: 'none' }}>
                        {svc.bullets.map((b) => (
                          <li key={b} style={{
                            display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                            color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem',
                            margin: '0.4rem 0',
                          }}>
                            <i className="fa-solid fa-star-and-crescent" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.65rem', marginTop: 5, flexShrink: 0 }}></i>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                      {/* Price */}
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>From</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold-light,#FFEFA6)' }}>
                          ₹{svc.price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      {/* Divider */}
                      <div style={{ width: 1, height: 40, background: 'rgba(200,149,108,0.2)' }} />

                      {/* Duration */}
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Duration</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)' }}>{svc.durationMins} min</div>
                      </div>

                      {/* Book button */}
                      <Link href={`/booking/${svc.id}`} className="btn-primary-custom" style={{ marginLeft: 'auto' }}>
                        <i className="fa-solid fa-calendar-plus"></i>
                        <span>Book Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Need a custom ritual?</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Not sure which session is <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>right for you?</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Send Kriss a message and we&apos;ll guide you to the ritual that fits your moment.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <Link href="/contact" className="btn-primary-custom">
              <i className="fa-solid fa-comments"></i>
              <span>Talk to Kriss</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
