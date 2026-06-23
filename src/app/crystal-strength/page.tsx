import ScrollFade from '@/components/ScrollFade';
import { crystals } from '@/data/crystals';
import CrystalQuiz from './CrystalQuiz';
import CrystalStrengthGrid from './CrystalStrengthGrid';

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
        backgroundImage: 'linear-gradient(to bottom, rgba(8, 4, 15, 0.25) 0%, rgba(6, 2, 12, 0.5) 100%), url("/strength-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        borderBottom: '1px solid rgba(200, 149, 108, 0.15)'
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

      <section className="crystals-section section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Galaxy / Starry night background elements */}
        <div className="galaxy-stars-wrapper">
          <div className="galaxy-nebula nebula-purple"></div>
          <div className="galaxy-nebula nebula-blue"></div>
          <div className="space-stars stars-small"></div>
          <div className="space-stars stars-medium"></div>
          <div className="space-stars stars-large"></div>
          <div className="celestial-orbit-1"></div>
          <div className="celestial-orbit-2"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <CrystalStrengthGrid crystals={crystals} />
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
