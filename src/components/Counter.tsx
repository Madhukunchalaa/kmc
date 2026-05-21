'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
}

export default function Counter({ target, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1800;
          const step = 16;
          const increment = target / (duration / step);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, step);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
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
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}
