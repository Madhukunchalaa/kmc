'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  width: string;
  height: string;
  left: string;
  background: string;
  opacity: string;
  floatDuration: string;
  floatDelay: string;
  twinkleDuration: string;
  twinkleDelay: string;
}

export default function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 768 ? 12 : 22;
    const colors = ['#C8956C', '#E8C99A', '#EBBCB8', '#C9A84C'];
    const generated: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 5 + 2; // 2px to 7px size
      generated.push({
        id: i,
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        background: colors[Math.floor(Math.random() * colors.length)],
        opacity: String(Math.random() * 0.5 + 0.3),
        floatDuration: `${Math.random() * 12 + 8}s`,
        floatDelay: `${Math.random() * 8}s`,
        twinkleDuration: `${Math.random() * 2 + 3}s`, // 3s to 5s twinkle pulse
        twinkleDelay: `${Math.random() * 3}s`,
      });
    }
    setParticles(generated);
  }, []);

  return (
    <div className="hero-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle-wrapper"
          style={{
            left: p.left,
            animationDuration: p.floatDuration,
            animationDelay: p.floatDelay,
          }}
        >
          <div
            className="particle"
            style={{
              width: p.width,
              height: p.height,
              background: p.background,
              opacity: p.opacity,
              animationDuration: p.twinkleDuration,
              animationDelay: p.twinkleDelay,
              color: p.background,
            }}
          />
        </div>
      ))}
    </div>
  );
}
