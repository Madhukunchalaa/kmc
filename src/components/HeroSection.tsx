'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroParticles from '@/components/HeroParticles';
import Counter from '@/components/Counter';
import '@/app/hero-editorial.css';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 35;
      const y = (clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-editorial">
      {/* ===== TOP TRUST STRIP (FORWARD) ===== */}
      <div 
        className="trust-strip trust-strip-hero" 
        style={{ 
          marginTop: 'var(--navbar-height, 80px)', 
          position: 'relative',
          zIndex: 20
        }}
      >
        <div className="trust-strip-track">
          {/* Group 1 */}
          <div className="trust-strip-group">
            <div className="trust-item">
              <i className="fa-solid fa-circle-check" style={{ color: '#2ECC71' }} />
              <span>Handpicked Crystals</span>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#F1C40F' }} />
              <span>Cleansed &amp; Energised</span>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-globe" style={{ color: '#3498DB' }} />
              <span>Worldwide Delivery</span>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-star" style={{ color: '#F1C40F' }} />
              <span>500+ Happy Clients</span>
            </div>
          </div>
          {/* Group 2 (Duplicate for infinite seamless scroll) */}
          <div className="trust-strip-group" aria-hidden="true">
            <div className="trust-item">
              <i className="fa-solid fa-circle-check" style={{ color: '#2ECC71' }} />
              <span>Handpicked Crystals</span>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#F1C40F' }} />
              <span>Cleansed &amp; Energised</span>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-globe" style={{ color: '#3498DB' }} />
              <span>Worldwide Delivery</span>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-star" style={{ color: '#F1C40F' }} />
              <span>500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-editorial-main">
        
        {/* Left Side: Typography & CTAs */}
        <div className="hero-editorial-left">
          {/* Eyebrow badge */}
          <div className="hero-editorial-eyebrow">
            <i className="fa-solid fa-star-and-crescent" />
            <span>Guided by Intuition · Curated by Kriss</span>
          </div>

          {/* Main headline */}
          <h1 className="hero-editorial-title">
            <i className="fa-solid fa-moon me-3" style={{ color: '#D4AF37' }} />Aligned With The Universe,
            <span className="hero-editorial-title-accent">Chosen For You</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-editorial-subtitle">
            Every crystal is handpicked, cleansed, and chosen with intention — 
            bringing earth’s energy closer to your journey. Experience the purest resonance of natural healing.
          </p>

          {/* CTA buttons */}
          <div className="hero-editorial-ctas">
            <Link href="/shop" className="hero-editorial-btn-primary">
              Explore Collection
            </Link>
            <Link href="#signature-crystals" className="hero-editorial-btn-signature">
              <i className="fa-solid fa-crown me-2" />
              <span>Signature Collection</span>
            </Link>
            <Link href="/services" className="hero-editorial-btn-ghost">
              Book Guidance
            </Link>
          </div>
        </div>

        {/* Right Side: Image & Badges */}
        <div className="hero-editorial-right">
          <img
            src="/hero-celestial-crystals.png"
            alt="KrissMaagiic Crystal Collection"
            className="hero-editorial-img"
            loading="eager"
          />
          <div
            className="hero-celestial-motion"
            aria-hidden="true"
            style={{
              '--hero-mouse-x': `${mousePos.x}px`,
              '--hero-mouse-y': `${mousePos.y}px`,
            } as CSSProperties}
          >
            <HeroParticles />
            <span className="hero-celestial-glow hero-celestial-glow--one" />
            <span className="hero-celestial-glow hero-celestial-glow--two" />
            <span className="hero-celestial-orb hero-celestial-orb--moon" />
            <span className="hero-celestial-orb hero-celestial-orb--violet" />
            <span className="hero-celestial-orb hero-celestial-orb--gold" />
            <span className="hero-celestial-orbit" />
            <span className="hero-planet-orbit hero-planet-orbit--one">
              <span className="hero-planet hero-planet--earth" />
            </span>
            <span className="hero-planet-orbit hero-planet-orbit--two">
              <span className="hero-planet hero-planet--mars" />
            </span>
            <span className="hero-planet-orbit hero-planet-orbit--three">
              <span className="hero-planet hero-planet--jupiter" />
            </span>
            <span className="hero-shooting-star hero-shooting-star--one" />
            <span className="hero-shooting-star hero-shooting-star--two" />
            <span className="hero-shooting-star hero-shooting-star--three" />
          </div>
          <div className="hero-editorial-fade" aria-hidden="true" />
          
          <div className="hero-editorial-badges">
            <div className="hero-editorial-badge">
              <i className="fa-solid fa-star" />
              <span>Est. by Kriss</span>
            </div>
            <div className="hero-editorial-badge">
              <i className="fa-solid fa-gem" />
              <span>Certified Natural</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Trust Strip and Stats */}
      <div className="hero-editorial-footer">
        
        {/* ===== NEW TRUST STRIP (REVERSE) ===== */}
        <div className="trust-strip trust-strip-hero">
          <div className="trust-strip-track-reverse">
            {/* Group 1 */}
            <div className="trust-strip-group">
              <div className="trust-item">
                <i className="fa-solid fa-circle-check" style={{ color: '#2ECC71' }} />
                <span>Handpicked Crystals</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#F1C40F' }} />
                <span>Cleansed &amp; Energised</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-globe" style={{ color: '#3498DB' }} />
                <span>Worldwide Delivery</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-star" style={{ color: '#F1C40F' }} />
                <span>500+ Happy Clients</span>
              </div>
            </div>
            {/* Group 2 (Duplicate for infinite seamless scroll) */}
            <div className="trust-strip-group" aria-hidden="true">
              <div className="trust-item">
                <i className="fa-solid fa-circle-check" style={{ color: '#2ECC71' }} />
                <span>Handpicked Crystals</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#F1C40F' }} />
                <span>Cleansed &amp; Energised</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-globe" style={{ color: '#3498DB' }} />
                <span>Worldwide Delivery</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-star" style={{ color: '#F1C40F' }} />
                <span>500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hero-editorial-stats">
          <div className="hero-editorial-stat">
            <span className="hero-editorial-stat-num"><Counter target={500} suffix="+" /></span>
            <span className="hero-editorial-stat-lbl">Crystals Sold</span>
          </div>
          <div className="hero-editorial-stat">
            <span className="hero-editorial-stat-num"><Counter target={200} suffix="+" /></span>
            <span className="hero-editorial-stat-lbl">Happy Clients</span>
          </div>
          <div className="hero-editorial-stat">
            <span className="hero-editorial-stat-num">4</span>
            <span className="hero-editorial-stat-lbl">Healing Services</span>
          </div>
          <div className="hero-editorial-stat">
            <span className="hero-editorial-stat-num"><Counter target={98} suffix="%" /></span>
            <span className="hero-editorial-stat-lbl">Satisfaction</span>
          </div>
        </div>

        {/* ===== BOTTOM-MOST TRUST STRIP (FORWARD - BELOW STATS) ===== */}
        <div className="trust-strip trust-strip-hero">
          <div className="trust-strip-track">
            {/* Group 1 */}
            <div className="trust-strip-group">
              <div className="trust-item">
                <i className="fa-solid fa-globe" style={{ color: '#3498DB' }} />
                <span>Worldwide Delivery</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-certificate" style={{ color: '#F1C40F' }} />
                <span>100% Authentic &amp; Certified</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#9B59B6' }} />
                <span>Ritually Cleansed &amp; Energised</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-moon" style={{ color: '#F1C40F' }} />
                <span>Intuitively Chosen For You</span>
              </div>
            </div>
            {/* Group 2 (Duplicate for infinite seamless scroll) */}
            <div className="trust-strip-group" aria-hidden="true">
              <div className="trust-item">
                <i className="fa-solid fa-globe" style={{ color: '#3498DB' }} />
                <span>Worldwide Delivery</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-certificate" style={{ color: '#F1C40F' }} />
                <span>100% Authentic &amp; Certified</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#9B59B6' }} />
                <span>Ritually Cleansed &amp; Energised</span>
              </div>
              <div className="trust-item">
                <i className="fa-solid fa-moon" style={{ color: '#F1C40F' }} />
                <span>Intuitively Chosen For You</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
