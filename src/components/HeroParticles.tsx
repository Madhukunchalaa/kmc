'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  width: string;
  height: string;
  left: string;
  background: string;
  opacity: string;
  animationDuration: string;
  animationDelay: string;
}

export default function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 768 ? 12 : 22;
    const colors = ['#C8956C', '#7B5EA7', '#E8C99A', '#EBBCB8', '#C9A84C'];
    const generated: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 6 + 2;
      generated.push({
        id: i,
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        background: colors[Math.floor(Math.random() * colors.length)],
        opacity: String(Math.random() * 0.5 + 0.2),
        animationDuration: `${Math.random() * 12 + 8}s`,
        animationDelay: `${Math.random() * 8}s`,
      });
    }
    setParticles(generated);
  }, []);

  return (
    <div className="hero-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            background: p.background,
            opacity: p.opacity,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
