import Link from 'next/link';
import ScrollFade from '@/components/ScrollFade';
import Counter from '@/components/Counter';

export const metadata = {
  title: 'About · KrissMaagiic Crystals',
  description: 'The story, mission and values of KrissMaagiic Crystals — an authentic crystal shop and spiritual studio in Hyderabad.',
};

const MILESTONES = [
  { year: '2022', text: 'Kriss begins her crystal journey — collecting, studying and energising her first stones.' },
  { year: '2023', text: 'First spell jars and tarot sessions opened to a small circle of clients in Hyderabad.' },
  { year: '2024', text: 'KrissMaagiic Crystals launches as a curated shop — direct-source crystals from trusted mines.' },
  { year: '2025', text: 'Studio expands to candle spells, numerology and full chakra-aligned collections.' },
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
      <section style={{ paddingTop: '160px', paddingBottom: '60px', background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Our Story
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>
            Guided by Intuition, <span className="highlight">Curated by Kriss</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 720, margin: '1rem auto 0' }}>
            What began as one woman&apos;s love affair with stones has grown into a studio of crystals, candle spells, tarot and ritual — all rooted in the same intention: to help you remember who you are.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg, 0 20px 50px rgba(0,0,0,0.1))' }}>
                <img src="https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/IMG_3040-convert.io_.webp" alt="Crystal collection by KrissMaagiic" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-eyebrow">The beginning</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>How <span>KrissMaagiic</span> was born</h2>
              <p style={{ color: 'var(--text-light,#666)', lineHeight: 1.8 }}>
                It started with a single piece of amethyst — bought on a quiet afternoon in Hyderabad, slipped into a pocket, forgotten and then remembered when life began to soften in unexpected ways.
              </p>
              <p style={{ color: 'var(--text-light,#666)', lineHeight: 1.8 }}>
                Kriss began collecting, studying and sitting with crystals. She learned which stones worked with which chakras, which carried which intention, which felt alive. Friends asked her to source pieces. Then their friends. Then strangers. KrissMaagiic was named the day she realised this wasn&apos;t a hobby — it was a calling.
              </p>
              <p style={{ color: 'var(--text-light,#666)', lineHeight: 1.8 }}>
                Today, every crystal is hand-selected, every ritual is held with care, and every customer is a soul we genuinely hope to serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="brand-strip section-pad">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <ScrollFade>
                <div className="brand-feature-card text-start" style={{ height: '100%' }}>
                  <div className="brand-feature-icon"><i className="fa-solid fa-compass"></i></div>
                  <h4 className="brand-feature-title">Our Mission</h4>
                  <p className="brand-feature-desc">
                    To put authentic, energetically-aligned crystals into the hands of seekers — and to hold space for healing through rituals that meet you exactly where you are.
                  </p>
                </div>
              </ScrollFade>
            </div>
            <div className="col-lg-6">
              <ScrollFade delay={120}>
                <div className="brand-feature-card text-start" style={{ height: '100%' }}>
                  <div className="brand-feature-icon"><i className="fa-solid fa-star"></i></div>
                  <h4 className="brand-feature-title">Our Vision</h4>
                  <p className="brand-feature-desc">
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
          <div className="row g-4">
            {VALUES.map((v, i) => (
              <div key={v.title} className="col-sm-6 col-lg-3">
                <ScrollFade delay={i * 80}>
                  <div className="brand-feature-card text-center" style={{ height: '100%' }}>
                    <div className="brand-feature-icon"><i className={v.icon}></i></div>
                    <h4 className="brand-feature-title">{v.title}</h4>
                    <p className="brand-feature-desc">{v.desc}</p>
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
              { number: 200, suffix: '+', label: 'Happy clients' },
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
