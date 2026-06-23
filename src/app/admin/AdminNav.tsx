'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/admin', label: 'Dashboard', icon: 'fa-solid fa-gauge-high', exact: true },
  { href: '/admin/orders', label: 'Orders', icon: 'fa-solid fa-bag-shopping' },
  { href: '/admin/bookings', label: 'Bookings', icon: 'fa-solid fa-calendar-check' },
  { href: '/admin/products', label: 'Products', icon: 'fa-solid fa-gem' },
  { href: '/admin/services', label: 'Services', icon: 'fa-solid fa-wand-magic-sparkles' },
  { href: '/admin/home-services', label: 'Home Services', icon: 'fa-solid fa-layer-group' },
  { href: '/admin/blogs', label: 'Blogs', icon: 'fa-solid fa-pen-nib' },
  { href: '/admin/testimonials', label: 'Testimonials', icon: 'fa-solid fa-comment-dots' },
  { href: '/admin/gifting', label: 'Gifting', icon: 'fa-solid fa-gift' },
  { href: '/admin/reels', label: 'Reels', icon: 'fa-solid fa-film' },
  { href: '/admin/messages', label: 'Messages', icon: 'fa-solid fa-envelope' },
  { href: '/admin/settings', label: 'Settings', icon: 'fa-solid fa-sliders' },
  { href: '/admin/users', label: 'Users', icon: 'fa-solid fa-users' },
];

export default function AdminNav() {
  const pathname = usePathname() ?? '';

  return (
    <aside
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
      <nav style={{ display: 'grid', gap: '4px' }}>
        {LINKS.map((l) => {
          const active = l.exact ? pathname === l.href : pathname === l.href || pathname.startsWith(l.href + '/');
          return (
            <Link
              key={l.href}
              href={l.href}
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
    </aside>
  );
}
