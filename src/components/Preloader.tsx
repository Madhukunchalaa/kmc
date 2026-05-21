'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hide, setHide] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 600);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div id="preloader" className={hide ? 'hide' : ''}>
      <div className="preloader-crystal">
        <img
          src="https://krissmaagiiccrystals.com/wp-content/uploads/2026/01/site-logo.webp"
          alt="Pulsing crystal logo"
        />
      </div>
      <div className="preloader-text">KRISSMAAGIIC CRYSTALS</div>
    </div>
  );
}
