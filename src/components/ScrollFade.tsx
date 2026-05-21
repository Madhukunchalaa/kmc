'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollFade({ children, delay = 0, className = '' }: ScrollFadeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
