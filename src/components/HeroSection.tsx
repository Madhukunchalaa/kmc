'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroParticles from '@/components/HeroParticles';
import Counter from '@/components/Counter';

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
    <section className="hero-split">

      {/* Subtle ambient particles */}
      <HeroParticles />

      {/* Decorative background gradient blobs */}
      <div className="hero-split-blob hero-split-blob--1" aria-hidden="true" />
      <div className="hero-split-blob hero-split-blob--2" aria-hidden="true" />

      {/* ══ LEFT — Text Content ══ */}
      <div className="hero-split-left">

        {/* Eyebrow badge */}
        <div className="hero-split-eyebrow">
          <i className="fa-solid fa-star-and-crescent" />
          <span>Guided by Intuition · Curated by Kriss</span>
          <i className="fa-solid fa-star-and-crescent" />
        </div>

        {/* Main headline */}
        <h1 className="hero-split-title">
          <span className="hero-split-title-plain">Crystals That</span>{' '}
          <span className="hero-split-title-accent">Speak to</span>{' '}
          <span className="hero-split-title-soul">Your Soul</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-split-subtitle">
          Every crystal is handpicked, cleansed, and chosen with intention — 
          bringing earth’s energy closer to your journey.
        </p>

        {/* CTA buttons */}
        <div className="hero-split-ctas">
          <Link href="/shop" className="hero-split-btn-primary">
            Explore Collection
          </Link>
          <Link href="/services" className="hero-split-btn-ghost">
            Book Guidance Session
          </Link>
        </div>

        {/* Social Proof Rating */}
        <div className="hero-split-social-proof">
          <div className="social-proof-stars">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <span className="social-proof-text">
            Trusted by <strong>500+</strong> customers &amp; rated <strong>4.9/5</strong>
          </span>
        </div>

      </div>

      {/* ══ RIGHT — Floating Crystal Image ══ */}
      <div className="hero-split-right">

        {/* Decorative large ring */}
        <div 
          className="hero-split-ring hero-split-ring--outer" 
          style={{ transform: `translate3d(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px, 0)` }}
          aria-hidden="true" 
        />
        <div 
          className="hero-split-ring hero-split-ring--inner" 
          style={{ transform: `translate3d(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px, 0)` }}
          aria-hidden="true" 
        />

        {/* Glow orb behind image */}
        <div 
          className="hero-split-glow" 
          style={{ transform: `translate3d(${mousePos.x * -0.15}px, ${mousePos.y * -0.15}px, 0)` }}
          aria-hidden="true" 
        />

        {/* Image container wrapped for parallax */}
        <div 
          className="hero-split-parallax-img-wrap"
          style={{ transform: `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px, 0)` }}
        >
          <div className="hero-split-img-wrap">
            <img
              src="https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/IMG_3040-convert.io_.webp"
              alt="KrissMaagiic Crystal Collection"
              className="hero-split-img"
              loading="eager"
            />
            {/* Soft edge fade on left so it blends into text side */}
            <div className="hero-split-img-fade" aria-hidden="true" />
          </div>
        </div>

        {/* Floating badge cards */}
        <div className="hero-split-card hero-split-card--top">
          <i className="fa-solid fa-star" />
          <span>Est. by Kriss</span>
        </div>
        <div className="hero-split-card hero-split-card--bottom">
          <i className="fa-solid fa-gem" />
          <span>Certified Natural</span>
        </div>

      </div>

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

      {/* ══ Stats Bar — full width ══ */}
      <div className="hero-split-stats">
        <div className="hero-split-stat">
          <span className="hero-split-stat-num"><Counter target={500} suffix="+" /></span>
          <span className="hero-split-stat-lbl">Crystals Sold</span>
        </div>
        <div className="hero-split-stat">
          <span className="hero-split-stat-num"><Counter target={200} suffix="+" /></span>
          <span className="hero-split-stat-lbl">Happy Clients</span>
        </div>
        <div className="hero-split-stat">
          <span className="hero-split-stat-num">4</span>
          <span className="hero-split-stat-lbl">Healing Services</span>
        </div>
        <div className="hero-split-stat">
          <span className="hero-split-stat-num"><Counter target={98} suffix="%" /></span>
          <span className="hero-split-stat-lbl">Satisfaction Rate</span>
        </div>
      </div>

    </section>
  );
}
