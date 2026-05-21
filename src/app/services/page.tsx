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
      <section style={{ paddingTop: '160px', paddingBottom: '60px', background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Healing Sessions & Rituals
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>
            Spiritual <span className="highlight">Services with Kriss</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, margin: '1rem auto 0' }}>
            Personalised, intuitive and held with care. Every session is shaped by your energy and your questions.
          </p>
        </div>
      </section>

      <section className="section-pad" id="book">
        <div className="container">
          <div style={{ display: 'grid', gap: '3rem' }}>
            {services.map((svc, idx) => (
              <ScrollFade key={svc.id} delay={idx * 80}>
                <div id={svc.slug} className="row g-4 align-items-center" style={{ scrollMarginTop: '120px' }}>
                  <div className={`col-lg-5 ${idx % 2 === 1 ? 'order-lg-2' : ''}`}>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg, 0 20px 50px rgba(0,0,0,0.1))' }}>
                      <img src={svc.image} alt={svc.title} style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                  <div className={`col-lg-7 ${idx % 2 === 1 ? 'order-lg-1' : ''}`}>
                    <div className="service-icon" style={{ width: 64, height: 64, fontSize: '1.4rem' }}>
                      <i className={svc.icon}></i>
                    </div>
                    {svc.tagline && <span className="product-category mt-3 d-inline-block">{svc.tagline}</span>}
                    <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem' }}>{svc.title}</h2>
                    <p style={{ color: 'var(--text-light,#666)', lineHeight: 1.7 }}>{svc.desc}</p>
                    {svc.bullets.length > 0 && (
                      <ul style={{ paddingLeft: '1.2rem', margin: '1rem 0', color: 'var(--text-light,#666)' }}>
                        {svc.bullets.map((b) => <li key={b} style={{ margin: '0.35rem 0' }}>{b}</li>)}
                      </ul>
                    )}
                    <div className="d-flex flex-wrap gap-3 align-items-center mt-3">
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-light,#999)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>From</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700 }}>₹{svc.price.toLocaleString('en-IN')}</div>
                      </div>
                      <div style={{ width: 1, height: 40, background: 'rgba(0,0,0,0.1)' }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-light,#999)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Duration</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>{svc.durationMins} min</div>
                      </div>
                      <Link href={`/booking/${svc.id}`} className="btn-primary-custom ms-auto">
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
