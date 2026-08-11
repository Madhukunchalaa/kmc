'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const timer = setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
          return () => clearTimeout(timer);
        }
      }
    };

    // Run on path/search changes
    handleScroll();

    // Listen for hash changes on the same page
    window.addEventListener('hashchange', handleScroll);
    return () => {
      window.removeEventListener('hashchange', handleScroll);
    };
  }, [pathname, searchParams]);

  return null;
}
