'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/dashboard', label: 'Overview', icon: 'fa-solid fa-gauge-high', exact: true },
  { href: '/dashboard/orders', label: 'Orders', icon: 'fa-solid fa-bag-shopping' },
  { href: '/dashboard/bookings', label: 'Bookings', icon: 'fa-solid fa-calendar-check' },
  { href: '/dashboard/notifications', label: 'Alerts', icon: 'fa-solid fa-bell' },
  { href: '/dashboard/profile', label: 'Profile', icon: 'fa-solid fa-user' },
];

export default function DashboardNav({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname() ?? '';

  return (
    <aside className="dashboard-sidebar">
      <nav style={{ display: 'grid', gap: 4 }}>
        {LINKS.map((l) => {
          const active = l.exact ? pathname === l.href : pathname === l.href || pathname.startsWith(l.href + '/');
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`dashboard-nav-link${active ? ' active' : ''}`}
            >
              <i className={l.icon} style={{ width: 16, textAlign: 'center', flexShrink: 0 }}></i>
              {l.label}
            </Link>
          );
        })}
        {isAdmin && (
          <Link
            href="/admin"
            className="dashboard-nav-link"
            style={{ marginTop: 12, background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}
          >
            <i className="fa-solid fa-crown" style={{ color: '#E8C99A', width: 16, textAlign: 'center', flexShrink: 0 }}></i>
            Admin
          </Link>
        )}
      </nav>
    </aside>
  );
}
