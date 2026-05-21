'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/dashboard', label: 'Overview', icon: 'fa-solid fa-gauge-high', exact: true },
  { href: '/dashboard/orders', label: 'My Orders', icon: 'fa-solid fa-bag-shopping' },
  { href: '/dashboard/bookings', label: 'My Bookings', icon: 'fa-solid fa-calendar-check' },
  { href: '/dashboard/notifications', label: 'Notifications', icon: 'fa-solid fa-bell' },
  { href: '/dashboard/profile', label: 'My Profile', icon: 'fa-solid fa-user' },
];

export default function DashboardNav({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname() ?? '';

  return (
    <aside style={{ background: '#fff', borderRight: '1px solid rgba(0,0,0,0.06)', padding: '1.5rem 0.75rem', position: 'sticky', top: 60, height: 'calc(100vh - 60px)', overflowY: 'auto' }}>
      <nav style={{ display: 'grid', gap: 4 }}>
        {LINKS.map((l) => {
          const active = l.exact ? pathname === l.href : pathname === l.href || pathname.startsWith(l.href + '/');
          return (
            <Link key={l.href} href={l.href} style={{
              display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '10px 14px',
              borderRadius: 10, textDecoration: 'none',
              color: active ? '#fff' : 'var(--text,#2D1B0E)',
              background: active ? 'var(--primary,#C8956C)' : 'transparent',
              fontWeight: active ? 600 : 500, fontSize: '0.92rem',
            }}>
              <i className={l.icon} style={{ width: 16, textAlign: 'center' }}></i>
              {l.label}
            </Link>
          );
        })}
        {isAdmin && (
          <Link href="/admin" style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '10px 14px', borderRadius: 10, background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            <i className="fa-solid fa-crown" style={{ color: 'var(--gold-light,#E8C99A)' }}></i>
            Admin Panel
          </Link>
        )}
      </nav>
    </aside>
  );
}
