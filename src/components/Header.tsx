'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import NotificationBell from '@/components/NotificationBell';

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const { countryCode, setCountryCode } = useCurrency();
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Pages without a dark hero need the solid navbar always — otherwise white-on-light is unreadable.
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solid = scrolled || !isHome;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Services', href: '/services' },
    { name: 'Crystal Strength', href: '/crystal-strength' },
    { name: 'Blog', href: '/blogs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark navbar-custom${solid ? ' scrolled' : ''}`}>
      <div className="container-fluid px-lg-5 px-3">
        <Link href="/" className="navbar-brand">
          <div className="navbar-logo-wrap">
            <img
              src="/site-logo.png"
              alt="KrissMaagiic Crystals Logo"
              className="navbar-logo-img"
            />
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-main">KrissMaagiic Crystals</span>
            <span className="navbar-brand-sub">Crystals &amp; Healing</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`} id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li className="nav-item" key={link.name}>
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {status === 'authenticated' && (
              <li className="nav-item d-flex align-items-center">
                <NotificationBell />
              </li>
            )}



            <li className="nav-item">
              <Link
                href="/cart"
                className="nav-link navbar-cart"
                onClick={() => setMobileOpen(false)}
                aria-label={`Cart (${count} items)`}
                style={{ position: 'relative' }}
              >
                <i className="fa-solid fa-bag-shopping"></i>
                {count > 0 && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute', top: 2, right: -2,
                      background: 'var(--primary, #C8956C)', color: '#fff',
                      borderRadius: 999, fontSize: '0.65rem',
                      minWidth: 18, height: 18,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      padding: '0 5px', fontWeight: 700, lineHeight: 1,
                    }}
                  >
                    {count}
                  </span>
                )}
              </Link>
            </li>

            {status === 'authenticated' ? (
              <li className="nav-item" style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="nav-link"
                  style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'inherit' }}
                >
                  <i className="fa-solid fa-user-circle me-1"></i>
                  {session?.user?.name?.split(' ')[0] || 'Account'}
                  <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '0.7rem' }}></i>
                </button>
                {userMenuOpen && (
                  <div
                    onMouseLeave={() => setUserMenuOpen(false)}
                    style={{
                      position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                      minWidth: 200, background: '#fff', color: '#2D1B0E',
                      borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      padding: 8, zIndex: 1000,
                    }}
                  >
                    <Link href="/dashboard" className="dropdown-menu-link" onClick={() => { setUserMenuOpen(false); setMobileOpen(false); }} style={menuItem}>
                      <i className="fa-solid fa-gauge-high"></i> My Dashboard
                    </Link>
                    <Link href="/dashboard/orders" onClick={() => { setUserMenuOpen(false); setMobileOpen(false); }} style={menuItem}>
                      <i className="fa-solid fa-bag-shopping"></i> My Orders
                    </Link>
                    <Link href="/dashboard/bookings" onClick={() => { setUserMenuOpen(false); setMobileOpen(false); }} style={menuItem}>
                      <i className="fa-solid fa-calendar-check"></i> My Bookings
                    </Link>
                    <Link href="/dashboard/profile" onClick={() => { setUserMenuOpen(false); setMobileOpen(false); }} style={menuItem}>
                      <i className="fa-solid fa-user"></i> My Profile
                    </Link>
                    {session.user.role === 'admin' && (
                      <Link href="/admin" onClick={() => { setUserMenuOpen(false); setMobileOpen(false); }} style={{ ...menuItem, background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff', borderRadius: 8 }}>
                        <i className="fa-solid fa-crown"></i> Admin Panel
                      </Link>
                    )}
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', margin: '6px 0' }} />
                    <button
                      type="button"
                      onClick={() => { setUserMenuOpen(false); signOut({ callbackUrl: '/' }); }}
                      style={{ ...menuItem, background: 'transparent', border: 0, color: '#D95F5F', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i> Sign out
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  href="/login"
                  className="nav-link navbar-cta"
                  onClick={() => setMobileOpen(false)}
                >
                  <i className="fa-solid fa-arrow-right-to-bracket me-1"></i>Sign in
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const menuItem: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 10,
  padding: '8px 12px', textDecoration: 'none', color: 'inherit',
  fontSize: '0.9rem', borderRadius: 8,
};
