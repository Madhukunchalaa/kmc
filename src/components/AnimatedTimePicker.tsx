'use client';
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTimePickerProps {
  value: string; // e.g. "10:30 AM"
  onChange: (time: string) => void;
}

export default function AnimatedTimePicker({ value, onChange }: AnimatedTimePickerProps) {
  const [hour, setHour] = useState('10');
  const [min, setMin] = useState('00');
  const [period, setPeriod] = useState('AM');

  // Parse initial value once on mount
  useEffect(() => {
    if (value) {
      const match = value.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
      if (match) {
        setHour(match[1].padStart(2, '0'));
        setMin(match[2]);
        setPeriod(match[3].toUpperCase());
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update parent when pieces change
  useEffect(() => {
    onChange(`${hour}:${min} ${period}`);
  }, [hour, min, period, onChange]);

  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const mins = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      height: 180,
      background: 'rgba(255,255,255,0.03)',
      borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Highlight bar in the middle */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: 44,
        marginTop: -22,
        background: 'rgba(200,149,108,0.15)',
        borderTop: '1px solid rgba(200,149,108,0.3)',
        borderBottom: '1px solid rgba(200,149,108,0.3)',
        pointerEvents: 'none'
      }}></div>

      <ScrollColumn items={hours} value={hour} onChange={setHour} />
      <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', zIndex: 1, marginTop: -2 }}>:</div>
      <ScrollColumn items={mins} value={min} onChange={setMin} />
      <div style={{ width: 8 }}></div>
      <ScrollColumn items={periods} value={period} onChange={setPeriod} />
    </div>
  );
}

function ScrollColumn({ items, value, onChange }: { items: string[], value: string, onChange: (v: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll to snap
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let timeout: any;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const itemHeight = 44;
        const scrollY = el.scrollTop;
        const index = Math.round(scrollY / itemHeight);
        if (items[index] && items[index] !== value) {
          onChange(items[index]);
        }
      }, 100);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [items, value, onChange]);

  // Sync scroll position with value initially and when value changes externally
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const index = items.indexOf(value);
    if (index >= 0) {
      const targetScroll = index * 44;
      if (Math.abs(el.scrollTop - targetScroll) > 5) {
        el.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  }, [value, items]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '100%',
        overflowY: 'auto',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        padding: '68px 0', // padding so first and last can center
        width: 60,
        textAlign: 'center',
        zIndex: 1,
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none' // IE/Edge
      }}
    >
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {items.map((item) => (
        <div
          key={item}
          style={{
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            scrollSnapAlign: 'center',
            fontSize: item === value ? '1.4rem' : '1.1rem',
            fontWeight: item === value ? 700 : 500,
            color: item === value ? '#fff' : 'rgba(255,255,255,0.4)',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onClick={() => onChange(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
