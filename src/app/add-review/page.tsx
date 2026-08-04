import { Suspense } from 'react';
import ReviewForm from './ReviewForm';

export const metadata = {
  title: 'Share Your Experience · KrissMaagiic Crystals',
  description: 'Write a review about your healing sessions, tarot readings, or crystal purchases.',
};

export default function AddReviewPage() {
  return (
    <>
      {/* Header Section */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url("/contact-hero.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
      }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Client Love
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>
            Write a <span className="highlight">Review</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, margin: '1rem auto 0' }}>
            Your experiences help guide others on their path to healing and alignment.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0d0418 0%, #120818 50%, #0a0212 100%)',
        padding: '80px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow orbs */}
        <div style={{ position: 'absolute', top: '20%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,149,108,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(120,60,180,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24,
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}>
            {/* Form header */}
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary,#C8956C)', boxShadow: '0 0 8px rgba(200,149,108,0.6)' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--primary,#C8956C)', fontFamily: 'var(--font-display)' }}>Share Your Feedback</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4rem', margin: 0 }}>
                Tell us about your crystal or session experience
              </h3>
            </div>

            <Suspense fallback={<p style={{ color: '#888', textAlign: 'center' }}>Loading Form…</p>}>
              <ReviewForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
