import { ReactNode } from 'react';

export default function PolicyPage({
  eyebrow,
  title,
  highlight,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  children: ReactNode;
}) {
  return (
    <>
      <section style={{ paddingTop: '160px', paddingBottom: '60px', background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            {eyebrow}
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            {title} <span className="highlight">{highlight}</span>
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            style={{
              background: '#fff',
              padding: 'clamp(1.5rem, 3vw, 2.75rem)',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              lineHeight: 1.75,
              color: 'var(--text,#2D1B0E)',
            }}
            className="policy-body"
          >
            {children}
          </div>
        </div>
      </section>

      <style>{`
        .policy-body h2 { font-family: var(--font-heading); font-size: 1.5rem; margin: 2rem 0 0.75rem; color: var(--text, #2D1B0E); }
        .policy-body h2:first-child { margin-top: 0; }
        .policy-body p { color: var(--text-light, #555); margin: 0.75rem 0; }
        .policy-body ul { color: var(--text-light, #555); padding-left: 1.25rem; }
        .policy-body li { margin: 0.4rem 0; }
        .policy-body a { color: var(--primary, #C8956C); }
      `}</style>
    </>
  );
}
