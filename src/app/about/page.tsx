import { ReactNode } from 'react';
import Link from 'next/link';
import ScrollFade from '@/components/ScrollFade';
import Counter from '@/components/Counter';

export const metadata = {
  title: 'About · KrissMaagiic Crystals',
  description: 'The story, mission and values of KrissMaagiic Crystals — an authentic crystal shop and spiritual studio in Hyderabad.',
};

const MILESTONES: { year: string; text: ReactNode }[] = [
  { year: '2022', text: 'Kriss begins her crystal journey — collecting, studying and energising her first stones.' },
  { year: '2023', text: <>First <Link href="/services#spelljar" style={{ color: 'var(--primary,#C8956C)', textDecoration: 'underline' }}>spell jars</Link> and <Link href="/services#tarot" style={{ color: 'var(--primary,#C8956C)', textDecoration: 'underline' }}>tarot sessions</Link> opened to a small circle of clients in Hyderabad.</> },
  { year: '2024', text: 'KrissMaagiic Crystals launches as a curated shop — direct-source crystals from trusted mines.' },
  { year: '2025', text: <>Studio expands to <Link href="/services#candle" style={{ color: 'var(--primary,#C8956C)', textDecoration: 'underline' }}>candle spells</Link>, <Link href="/services#numerology" style={{ color: 'var(--primary,#C8956C)', textDecoration: 'underline' }}>numerology</Link> and full chakra-aligned collections.</> },
  { year: '2026', text: 'Pan-India shipping + booking platform — bringing energised crystals to seekers everywhere.' },
];

const VALUES = [
  { icon: 'fa-solid fa-shield-halved', title: 'Authenticity above all', desc: 'No fakes, no dyes, no shortcuts. Every stone is sourced from trusted mines and verified.' },
  { icon: 'fa-solid fa-hand-sparkles', title: 'Intuition-led curation', desc: 'Kriss personally selects every piece. If a crystal doesn\'t feel right, it doesn\'t reach you.' },
  { icon: 'fa-solid fa-heart-pulse', title: 'Healing first, aesthetics second', desc: 'Our collections are built around chakra-alignment and emotional wellness — not just looks.' },
  { icon: 'fa-solid fa-handshake-angle', title: 'Held with care', desc: 'Every session, every reading, every order is handled like it matters — because it does.' },
];

export default function AboutPage() {
  return (
    <>
      <section style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.35), rgba(10, 0, 20, 0.55)), url("/about-header.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
      }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Our Story
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>
            Guided by Intuition, <span className="highlight">Curated by Kriss</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 720, margin: '1rem auto 0' }}>
            What began as one woman&apos;s love for stones has grown into a studio of crystals, candle spells, tarot and ritual — all rooted in the same intention: to help you remember who you are.
          </p>
        </div>
      </section>


      {/* Mission + Vision */}
      <section className="brand-strip section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background glow effects */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(200, 149, 108, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5 align-items-stretch" style={{ position: 'relative' }}>
            
            {/* Mission Card */}
            <div className="col-lg-5">
              <ScrollFade>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(200, 149, 108, 0.04) 100%)',
                  border: '1px solid rgba(200, 149, 108, 0.22)',
                  borderRadius: '80px 24px 80px 24px',
                  padding: '3.5rem 2.5rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }} className="mission-vision-card">
                  <div style={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(200, 149, 108, 0.15) 0%, transparent 70%)',
                    border: '1px solid rgba(200, 149, 108, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 0 20px rgba(200, 149, 108, 0.1)'
                  }}>
                    <i className="fa-solid fa-compass" style={{ color: 'var(--primary,#C8956C)', fontSize: '1.6rem' }}></i>
                  </div>
                  <h4 className="brand-feature-title" style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: '1rem' }}>Our Mission</h4>
                  <p className="brand-feature-desc" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '0.92rem', margin: 0 }}>
                    To put authentic, energetically-aligned crystals into the hands of seekers — and to hold space for healing through rituals that meet you exactly where you are.
                  </p>
                </div>
              </ScrollFade>
            </div>

            {/* Central Divider (Desktop only) */}
            <div className="col-lg-2 d-none d-lg-flex flex-column align-items-center justify-content-center" style={{ position: 'relative' }}>
              <div style={{
                width: '1px',
                height: '80%',
                background: 'linear-gradient(to bottom, transparent, rgba(200, 149, 108, 0.25) 30%, rgba(200, 149, 108, 0.25) 70%, transparent)'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#1C0A02',
                border: '1px solid rgba(200, 149, 108, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(200, 149, 108, 0.3)'
              }}>
                <i className="fa-solid fa-star-and-crescent" style={{ color: 'var(--primary,#C8956C)', fontSize: '1rem', animation: 'pickerSpin 12s linear infinite' }}></i>
              </div>
            </div>

            {/* Vision Card */}
            <div className="col-lg-5">
              <ScrollFade delay={120}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(200, 149, 108, 0.04) 100%)',
                  border: '1px solid rgba(200, 149, 108, 0.22)',
                  borderRadius: '24px 80px 24px 80px',
                  padding: '3.5rem 2.5rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }} className="mission-vision-card">
                  <div style={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(200, 149, 108, 0.15) 0%, transparent 70%)',
                    border: '1px solid rgba(200, 149, 108, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 0 20px rgba(200, 149, 108, 0.1)'
                  }}>
                    <i className="fa-solid fa-star" style={{ color: 'var(--primary,#C8956C)', fontSize: '1.5rem' }}></i>
                  </div>
                  <h4 className="brand-feature-title" style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: '1rem' }}>Our Vision</h4>
                  <p className="brand-feature-desc" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '0.92rem', margin: 0 }}>
                    A world where spirituality is grounded, accessible and personal — not performative. Where every stone you wear knows your name.
                  </p>
                </div>
              </ScrollFade>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">What we stand for</span>
            <h2 className="section-title">Our <span>Values</span></h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
          </div>
          <div className="row g-4" style={{ paddingBottom: '30px', paddingTop: '20px' }}>
            {VALUES.map((v, i) => (
              <div key={v.title} className="col-sm-6 col-lg-3" style={{ marginTop: 0 }}>
                <ScrollFade delay={i * 80}>
                  <div style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #fbf9f6 100%)',
                    border: '1px solid rgba(200, 149, 108, 0.18)',
                    borderRadius: 20,
                    padding: '3rem 1.75rem 2.25rem',
                    boxShadow: '0 8px 25px rgba(45, 27, 14, 0.03)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transform: `translateY(${i % 2 === 1 ? '20px' : '0px'})`
                  }} className="value-premium-card">
                    {/* Floating number indicator */}
                    <span style={{
                      position: 'absolute',
                      top: 12,
                      right: 20,
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2.5rem',
                      fontWeight: 300,
                      color: 'var(--primary,#C8956C)',
                      opacity: 0.12,
                      userSelect: 'none'
                    }}>
                      0{i + 1}
                    </span>

                    {/* Diamond Tilted Icon Frame */}
                    <div style={{
                      width: 50,
                      height: 50,
                      background: 'linear-gradient(135deg, rgba(200,149,108,0.1), rgba(200,149,108,0.03))',
                      border: '1px solid rgba(200, 149, 108, 0.25)',
                      borderRadius: 12,
                      transform: 'rotate(45deg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.75rem',
                      boxShadow: '0 4px 12px rgba(200, 149, 108, 0.05)'
                    }} className="value-card-icon-wrap">
                      <i className={v.icon} style={{
                        transform: 'rotate(-45deg)',
                        color: 'var(--primary,#C8956C)',
                        fontSize: '1.25rem'
                      }}></i>
                    </div>

                    <h4 className="brand-feature-title" style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--dark-2)',
                      marginBottom: '0.75rem'
                    }}>{v.title}</h4>
                    <p className="brand-feature-desc" style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-light,#666)',
                      lineHeight: 1.7,
                      margin: 0
                    }}>{v.desc}</p>
                  </div>
                </ScrollFade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--bg-soft,#FAF6F1)', padding: '60px 0' }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { number: 500, suffix: '+', label: 'Crystals shipped' },
              { number: 10, suffix: 'k+', label: 'Happy clients' },
              { number: 4, suffix: '', label: 'Healing services' },
              { number: 100, suffix: '%', label: 'Authentic stones' },
            ].map((s) => (
              <div key={s.label} className="col-6 col-md-3">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,2.6rem)', fontWeight: 700, color: 'var(--primary,#C8956C)' }}>
                  <Counter target={s.number} suffix={s.suffix} />
                </div>
                <div style={{ color: 'var(--text-light,#666)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">Milestones <span>so far</span></h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {MILESTONES.map((m, i) => (
              <ScrollFade key={m.year} delay={i * 80}>
                <div className="d-flex gap-4 align-items-start" style={{ padding: '20px 0', borderBottom: i === MILESTONES.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary,#C8956C)', minWidth: 80 }}>{m.year}</div>
                  <p style={{ color: 'var(--text-light,#666)', lineHeight: 1.7, margin: 0 }}>{m.text}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" style={{ background: 'var(--bg-soft,#FAF6F1)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">What we offer</span>
            <h2 className="section-title">Our <span>Services</span></h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
          </div>
          <div className="row g-4">
            {[
              { slug: 'tarot',       icon: 'fa-solid fa-moon',            title: 'Tarot Reading',    desc: 'Live video, audio or voice-note readings — clarity for love, career and life.' },
              { slug: 'numerology',  icon: 'fa-solid fa-infinity',        title: 'Numerology',       desc: 'Decode your birth chart and unlock the numbers that shape your destiny.' },
              { slug: 'spelljar',    icon: 'fa-solid fa-jar',             title: 'Spell Jars',       desc: 'Handcrafted crystal-infused jars set with intention for love, wealth and protection.' },
              { slug: 'candle',      icon: 'fa-solid fa-fire-flame-curved', title: 'Candle Spells',  desc: 'Custom candle rituals charged with energy for manifestation and release.' },
            ].map((svc) => (
              <div key={svc.slug} className="col-sm-6 col-lg-3">
                <ScrollFade>
                  <Link href={`/services#${svc.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <div style={{
                      background: '#fff',
                      border: '1px solid rgba(200,149,108,0.18)',
                      borderRadius: 20,
                      padding: '2rem 1.5rem',
                      textAlign: 'center',
                      height: '100%',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                      boxShadow: '0 4px 16px rgba(45,27,14,0.04)',
                    }} className="value-premium-card">
                      <div style={{
                        width: 52, height: 52, borderRadius: '50%',
                        background: 'rgba(200,149,108,0.1)',
                        border: '1px solid rgba(200,149,108,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1.25rem',
                      }}>
                        <i className={svc.icon} style={{ color: 'var(--primary,#C8956C)', fontSize: '1.2rem' }}></i>
                      </div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--dark-2)', marginBottom: '0.6rem' }}>{svc.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-light,#666)', lineHeight: 1.65, margin: '0 0 1rem' }}>{svc.desc}</p>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary,#C8956C)', letterSpacing: '0.05em' }}>
                        View Service →
                      </span>
                    </div>
                  </Link>
                </ScrollFade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Ready to begin?</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Let&apos;s find the crystal that <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>belongs to you</span>
          </h2>
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <Link href="/shop" className="btn-primary-custom">
              <i className="fa-solid fa-gem"></i><span>Browse the shop</span>
            </Link>
            <Link href="/contact" className="btn-ghost-white">
              <i className="fa-solid fa-comments"></i><span>Talk to Kriss</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
