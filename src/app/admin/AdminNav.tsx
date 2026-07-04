'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const LINKS = [
  { href: '/admin', label: 'Dashboard', icon: 'fa-solid fa-gauge-high', exact: true },
  { href: '/admin/orders', label: 'Orders', icon: 'fa-solid fa-bag-shopping' },
  { href: '/admin/bookings', label: 'Bookings', icon: 'fa-solid fa-calendar-check' },
  { href: '/admin/products', label: 'Products', icon: 'fa-solid fa-gem' },
  { href: '/admin/services', label: 'Services', icon: 'fa-solid fa-wand-magic-sparkles' },
  { href: '/admin/home-services', label: 'Home Services', icon: 'fa-solid fa-layer-group' },
  { href: '/admin/blogs', label: 'Blogs', icon: 'fa-solid fa-pen-nib' },
  { href: '/admin/testimonials', label: 'Testimonials', icon: 'fa-solid fa-comment-dots' },
  { href: '/admin/reviews', label: 'Reviews', icon: 'fa-solid fa-star' },
  { href: '/admin/gifting', label: 'Gifting', icon: 'fa-solid fa-gift' },
  { href: '/admin/reels', label: 'Reels', icon: 'fa-solid fa-film' },
  { href: '/admin/messages', label: 'Messages', icon: 'fa-solid fa-envelope' },
  { href: '/admin/settings', label: 'Settings', icon: 'fa-solid fa-sliders' },
  { href: '/admin/users', label: 'Users', icon: 'fa-solid fa-users' },
];

export default function AdminNav() {
  const pathname = usePathname() ?? '';
  const [open, setOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navLinks = (
    <nav style={{ display: 'grid', gap: '4px' }}>
      {LINKS.map((l) => {
        const active = l.exact ? pathname === l.href : pathname === l.href || pathname.startsWith(l.href + '/');
        return (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '10px 14px',
              borderRadius: 10,
              textDecoration: 'none',
              color: active ? '#fff' : 'var(--text,#2D1B0E)',
              background: active ? 'var(--primary,#C8956C)' : 'transparent',
              fontWeight: active ? 600 : 500,
              fontSize: '0.92rem',
            }}
          >
            <i className={l.icon} style={{ width: 16, textAlign: 'center' }}></i>
            {l.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 200,
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'var(--primary,#C8956C)',
          color: '#fff',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(200,149,108,0.4)',
        }}
        className="admin-mobile-fab"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
            zIndex: 299, backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* Sidebar — desktop sticky, mobile slide-in drawer */}
      <aside
        className="admin-sidebar"
        style={{
          background: '#fff',
          borderRight: '1px solid rgba(0,0,0,0.06)',
          padding: '1.5rem 0.75rem',
          position: 'sticky',
          top: '60px',
          height: 'calc(100vh - 60px)',
          overflowY: 'auto',
        }}
      >
        {navLinks}
      </aside>

      {/* Mobile drawer */}
      <div
        className="admin-mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 260,
          height: '100vh',
          background: '#fff',
          zIndex: 300,
          padding: '1.5rem 0.75rem',
          overflowY: 'auto',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: open ? '4px 0 24px rgba(0,0,0,0.12)' : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text,#2D1B0E)' }}>
            <i className="fa-solid fa-crown me-2" style={{ color: 'var(--primary,#C8956C)' }}></i>Menu
          </span>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#888' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {navLinks}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admin-sidebar { display: none !important; }
          .admin-mobile-fab { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </>
  );
}
