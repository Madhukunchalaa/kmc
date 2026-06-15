'use client';

import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

export default function BookingSuccessAnimation({ onComplete }: Props) {
  const [phase, setPhase] = useState<'enter' | 'pulse' | 'exit'>('enter');

  useEffect(() => {
    // Phase 1: orb grows in (0–0.8s)
    // Phase 2: sparkles + message (0.8s–3.2s)
    const t1 = setTimeout(() => setPhase('pulse'), 800);
    // Phase 3: fade out (3.2s–3.8s), then call onComplete
    const t2 = setTimeout(() => setPhase('exit'), 3200);
    const t3 = setTimeout(() => onComplete(), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const particles = [
    { angle: 0,    dist: 130, size: 6,  delay: 0.1 },
    { angle: 30,   dist: 155, size: 4,  delay: 0.2 },
    { angle: 60,   dist: 140, size: 7,  delay: 0.15 },
    { angle: 90,   dist: 160, size: 5,  delay: 0.05 },
    { angle: 120,  dist: 135, size: 4,  delay: 0.25 },
    { angle: 150,  dist: 150, size: 6,  delay: 0.1 },
    { angle: 180,  dist: 145, size: 5,  delay: 0.2 },
    { angle: 210,  dist: 165, size: 4,  delay: 0.08 },
    { angle: 240,  dist: 138, size: 7,  delay: 0.18 },
    { angle: 270,  dist: 155, size: 5,  delay: 0.12 },
    { angle: 300,  dist: 142, size: 4,  delay: 0.22 },
    { angle: 330,  dist: 158, size: 6,  delay: 0.06 },
  ];

  const moonStars = ['✦', '✨', '🌙', '⭐', '✦', '💫', '✨', '🌟'];

  return (
    <>
      <style>{`
        @keyframes bsa-fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes bsa-fadeout {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes bsa-orb-grow {
          0%   { transform: scale(0.1); opacity: 0; filter: blur(20px); }
          60%  { transform: scale(1.12); opacity: 1; filter: blur(0); }
          100% { transform: scale(1);   opacity: 1; filter: blur(0); }
        }
        @keyframes bsa-orb-pulse {
          0%, 100% { box-shadow:
            0 0 40px 16px rgba(200,149,108,0.55),
            0 0 80px 32px rgba(162,59,236,0.25),
            0 0 0 1px rgba(200,149,108,0.3);
          }
          50% { box-shadow:
            0 0 60px 24px rgba(200,149,108,0.75),
            0 0 120px 50px rgba(162,59,236,0.35),
            0 0 0 2px rgba(200,149,108,0.5);
          }
        }
        @keyframes bsa-particle {
          0%   { transform: translate(0,0) scale(0); opacity: 0; }
          20%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes bsa-float-star {
          0%   { transform: translateY(0) rotate(0deg); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 0.7; }
          100% { transform: translateY(-80px) rotate(360deg); opacity: 0; }
        }
        @keyframes bsa-msg-in {
          0%   { opacity: 0; transform: translateY(18px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bsa-ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bsa-ring-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes bsa-crystal-shimmer {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 6px rgba(200,149,108,0.6)); }
          50%       { filter: brightness(1.3) drop-shadow(0 0 16px rgba(200,149,108,1)); }
        }
      `}</style>

      {/* Full-screen overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'radial-gradient(ellipse at center, #0d041a 0%, #06020c 60%, #010003 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        animation: phase === 'exit'
          ? 'bsa-fadeout 0.6s ease forwards'
          : 'bsa-fadein 0.4s ease forwards',
        overflow: 'hidden',
      }}>

        {/* ── Background twinkling stars ── */}
        {moonStars.map((s, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${10 + (i * 11) % 80}%`,
            top:  `${5  + (i * 13) % 85}%`,
            fontSize: `${0.7 + (i % 3) * 0.35}rem`,
            animation: `bsa-float-star ${2.5 + (i % 3) * 0.7}s ease-in-out ${i * 0.3}s infinite`,
            pointerEvents: 'none',
          }}>{s}</div>
        ))}

        {/* ── Outer rotating ring ── */}
        <div style={{
          position: 'absolute',
          width: 340, height: 340,
          borderRadius: '50%',
          border: '1px dashed rgba(200,149,108,0.2)',
          animation: 'bsa-ring-spin 12s linear infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          width: 260, height: 260,
          borderRadius: '50%',
          border: '1px solid rgba(162,59,236,0.15)',
          animation: 'bsa-ring-spin-rev 8s linear infinite',
          pointerEvents: 'none',
        }} />

        {/* ── Central orb / crystal ── */}
        <div style={{
          position: 'relative',
          width: 120, height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 38%, #F5EDD8 0%, #C8956C 40%, #6B21A8 100%)',
          animation: phase === 'enter'
            ? 'bsa-orb-grow 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards'
            : 'bsa-orb-grow 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards, bsa-orb-pulse 2s ease-in-out 0.8s infinite',
          boxShadow: '0 0 40px 16px rgba(200,149,108,0.55), 0 0 80px 32px rgba(162,59,236,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {/* Crystal gem icon inside */}
          <i className="fa-solid fa-gem" style={{
            fontSize: '2.6rem',
            color: 'rgba(255,255,255,0.92)',
            animation: 'bsa-crystal-shimmer 1.8s ease-in-out infinite',
            filter: 'drop-shadow(0 0 8px rgba(200,149,108,0.9))',
          }}></i>

          {/* Burst particles */}
          {phase !== 'enter' && particles.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * p.dist;
            const ty = Math.sin(rad) * p.dist;
            return (
              <div key={i} style={{
                position: 'absolute',
                width: p.size, height: p.size,
                borderRadius: '50%',
                background: i % 3 === 0
                  ? '#E8C99A'
                  : i % 3 === 1
                    ? '#C8956C'
                    : '#A78BFA',
                animation: `bsa-particle 2.4s ease-out ${p.delay}s infinite`,
                boxShadow: `0 0 ${p.size * 2}px currentColor`,
                transformOrigin: 'center',
                transform: `translate(${tx}px, ${ty}px)`,
              }} />
            );
          })}
        </div>

        {/* ── Message ── */}
        {phase !== 'enter' && (
          <div style={{
            marginTop: 40,
            textAlign: 'center',
            animation: 'bsa-msg-in 0.5s ease forwards',
            padding: '0 24px',
          }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.3rem, 4vw, 1.75rem)',
              fontWeight: 700,
              color: '#F5EDD8',
              marginBottom: 10,
              textShadow: '0 0 20px rgba(200,149,108,0.6)',
            }}>
              ✦ The Universe Has Heard You ✦
            </div>
            <div style={{
              fontSize: '0.92rem',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.06em',
              lineHeight: 1.7,
            }}>
              Your intention has been set.<br />
              Kriss will reach out via WhatsApp shortly.
            </div>
            <div style={{
              marginTop: 18,
              display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap',
            }}>
              {['🌙 Manifest', '✨ Aligned', '💎 Protected', '🌟 Blessed'].map((t) => (
                <span key={t} style={{
                  background: 'rgba(200,149,108,0.15)',
                  border: '1px solid rgba(200,149,108,0.3)',
                  borderRadius: 999,
                  padding: '4px 14px',
                  fontSize: '0.75rem',
                  color: '#E8C99A',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                }}>{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
