'use client';

import Link from 'next/link';
import HeroParticles from '@/components/HeroParticles';
import Counter from '@/components/Counter';

export default function HeroSection() {
  return (
    <section className="hero-pro">

      {/* ── Full-bleed background image with overlay ── */}
      <div className="hero-pro-bg">
        <img
          src="https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/IMG_3040-convert.io_.webp"
          alt=""
          aria-hidden="true"
          className="hero-pro-bg-img"
          loading="eager"
        />
        {/* Layered gradient overlay for professional depth */}
        <div className="hero-pro-overlay" />
      </div>

      {/* Subtle particles on top */}
      <HeroParticles />

      {/* ── Main content ── */}
      <div className="hero-pro-content">

        {/* Eyebrow */}
        <div className="hero-pro-eyebrow">
          <span className="hero-pro-eyebrow-line" />
          <span>Guided by Intuition &nbsp;·&nbsp; Curated by Kriss</span>
          <span className="hero-pro-eyebrow-line" />
        </div>

        {/* Headline */}
        <h1 className="hero-pro-title">
          Crystals That<br />
          <em>Speak to Your Soul</em>
        </h1>

        {/* Subtitle */}
        <p className="hero-pro-subtitle">
          Each stone is energised, authentic &amp; intuitively selected —<br className="d-none d-md-block" />
          a piece of the earth&apos;s wisdom, yours to carry.
        </p>

        {/* CTA buttons */}
        <div className="hero-pro-ctas">
          <Link href="/shop" className="hero-pro-btn-primary">
            <i className="fa-solid fa-gem" />
            <span>Explore the Shop</span>
          </Link>
          <Link href="/services" className="hero-pro-btn-outline">
            <i className="fa-solid fa-moon" />
            <span>Our Services</span>
          </Link>
        </div>

        {/* Location + trust */}
        <div className="hero-pro-meta">
          <span className="hero-pro-location">
            <i className="fa-solid fa-location-dot" />
            Hyderabad, Telangana &nbsp;·&nbsp; Est. by Kriss
          </span>
          <span className="hero-pro-meta-sep" />
          <span className="hero-pro-trust">
            <i className="fa-solid fa-shield-halved" /> 100% Authentic
          </span>
          <span className="hero-pro-meta-sep" />
          <span className="hero-pro-trust">
            <i className="fa-solid fa-bolt" /> Energised Stones
          </span>
        </div>
      </div>

      {/* ── Bottom stats bar ── */}
      <div className="hero-pro-stats">
        <div className="hero-pro-stat">
          <span className="hero-pro-stat-num"><Counter target={500} suffix="+" /></span>
          <span className="hero-pro-stat-lbl">Crystals Sold</span>
        </div>
        <div className="hero-pro-stat-divider" />
        <div className="hero-pro-stat">
          <span className="hero-pro-stat-num"><Counter target={200} suffix="+" /></span>
          <span className="hero-pro-stat-lbl">Happy Clients</span>
        </div>
        <div className="hero-pro-stat-divider" />
        <div className="hero-pro-stat">
          <span className="hero-pro-stat-num">4</span>
          <span className="hero-pro-stat-lbl">Healing Services</span>
        </div>
        <div className="hero-pro-stat-divider" />
        <div className="hero-pro-stat">
          <span className="hero-pro-stat-num"><Counter target={98} suffix="%" /></span>
          <span className="hero-pro-stat-lbl">Satisfaction Rate</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-mouse" />
      </div>
    </section>
  );
}
