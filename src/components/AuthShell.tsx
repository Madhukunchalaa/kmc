import Link from 'next/link';
import { ReactNode } from 'react';

export default function AuthShell({
  eyebrow,
  title,
  highlight,
  subtitle,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '140px',
        paddingBottom: '60px',
        background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)',
      }}
    >
      <div className="container" style={{ maxWidth: 480 }}>
        <div className="text-center" style={{ color: '#fff', marginBottom: '2rem' }}>
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            {eyebrow}
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,4vw,2.4rem)', margin: 0 }}>
            {title} <span style={{ color: 'var(--gold-light,#E8C99A)', fontStyle: 'italic' }}>{highlight}</span>
          </h1>
          {subtitle && (
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.75rem' }}>{subtitle}</p>
          )}
        </div>
        <div
          style={{
            background: '#fff',
            padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            borderRadius: '20px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
          }}
        >
          {children}
        </div>
        {footer && (
          <div className="text-center" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.5rem', fontSize: '0.9rem' }}>
            {footer}
          </div>
        )}
        <div className="text-center" style={{ marginTop: '1.5rem' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
