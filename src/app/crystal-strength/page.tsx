import ScrollFade from '@/components/ScrollFade';
import { crystals } from '@/data/crystals';
import CrystalQuiz from './CrystalQuiz';

export const metadata = {
  title: 'Crystal Strength Guide · KrissMaagiic Crystals',
  description: 'Learn the healing properties of crystals and discover the stone that\'s right for you.',
};

export default function CrystalStrengthPage() {
  return (
    <>
      <section style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url("/strength-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
      }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Crystal Knowledge
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>
            Crystal <span className="highlight">Strength Guide</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, margin: '1rem auto 0' }}>
            Every stone carries a quiet intelligence. Learn what each one offers — and which calls to you.
          </p>
        </div>
      </section>

      <section className="crystals-section section-pad">
        <div className="container">
          <div className="row g-4">
            {crystals.map((c, idx) => (
              <div className="col-sm-6 col-lg-4" key={c.name}>
                <ScrollFade delay={Math.min(idx, 6) * 60}>
                  <div className="crystal-card">
                    <div className="crystal-gem">
                      <div className="crystal-gem-shape" style={{ background: c.gradient }}></div>
                      <span style={{ position: 'relative', zIndex: 1, fontSize: '2rem' }}>{c.emoji}</span>
                    </div>
                    <h3 className="crystal-name">{c.name}</h3>
                    <p className="crystal-keyword">{c.keyword}</p>
                    <p className="crystal-desc">{c.desc}</p>
                    <div className="crystal-tags">
                      {c.tags.map((t) => (
                        <span className="crystal-tag" key={t}>{t}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-light,#999)', marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {c.chakras.join(' · ')}
                    </p>
                  </div>
                </ScrollFade>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="quiz" style={{ scrollMarginTop: 120, background: 'var(--bg-soft,#FAF6F1)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Crystal Suggestion</span>
            <h2 className="section-title">Find Your <span>Crystal Match</span></h2>
            <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            <p className="section-subtitle">Answer 3 quick questions and we&apos;ll suggest a stone for this season of your life.</p>
          </div>
          <CrystalQuiz />
        </div>
      </section>
    </>
  );
}
