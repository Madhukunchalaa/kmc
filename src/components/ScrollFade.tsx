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
          // Disconnect after becoming visible (performance optimization)
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start animation slightly before element enters viewport
      }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${isVisible ? 'visible' : ''} ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : undefined,
        willChange: isVisible ? 'auto' : 'opacity, transform', // Only hint before animation
      }}
    >
      {children}
    </div>
  );
}
