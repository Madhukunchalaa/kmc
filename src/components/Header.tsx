'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import NotificationBell from '@/components/NotificationBell';

interface SearchResult {
  products: { id: string; name: string; category: string; subcategory?: string; image: string; price: number }[];
  services: { slug: string; title: string; tagline: string; icon: string; image: string; price: number }[];
}

function getCategorySlug(category: string, subcategory?: string): string {
  const cat = (category || '').toLowerCase().trim();
  const sub = (subcategory || '').toLowerCase().trim();
  if (sub === 'designer bracelets') return 'designer-bracelets';
  if (sub === 'signature bracelets') return 'signature';
  if (cat === 'bracelets') return 'bracelets-by-crystals';
  if (cat === 'malas') return 'malas';
  if (cat === 'pendants') return 'pendants';
  if (cat === 'designer-pendants') return 'designer-pendants';
  if (cat === 'silver-jewelry') return 'silver-jewelry';
  if (cat === 'anklets') return 'anklets';
  if (cat === 'glow-essentials') return 'glow-essentials';
  if (cat === 'crystal-towers') return 'crystal-towers';
  if (cat === 'pyramids') return 'pyramids';
  if (cat === 'raw-crystal') return 'raw-crystal';
  if (cat === 'designer-crystals') return 'designer-crystals';
  if (cat === 'rings') return 'crystal-rings';
  if (cat === 'home-decor') return 'home-decor';
  if (cat === 'spell-jars') return 'spell-jars';
  return 'view-all';
}

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult>({ products: [], services: [] });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const search = (q: string) => {
    setQuery(q);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (q.trim().length < 2) { setResults({ products: [], services: [] }); setOpen(false); return; }
    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        if (data.ok) { setResults(data); setOpen(true); }
      } catch { /* ignore */ } finally { setLoading(false); }
    }, 300);
  };

  const hasResults = results.products.length > 0 || results.services.length > 0;
  const noResults = open && !loading && !hasResults && query.length >= 2;

  const go = (href: string) => { setOpen(false); setQuery(''); router.push(href); };

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <div
        id="search-pill"
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.92)',
          border: '1.5px solid rgba(200,149,108,0.35)',
          borderRadius: 40,
          padding: '7px 16px',
          width: '100%',
          boxShadow: '0 2px 12px rgba(200,149,108,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
          transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
        }}
      >
        <i className="fa-solid fa-magnifying-glass" style={{ color: '#C8956C', fontSize: '0.78rem', flexShrink: 0 }}></i>
        <input
          type="text"
          value={query}
          onChange={(e) => search(e.target.value)}
          onFocus={() => {
            hasResults && setOpen(true);
            const pill = document.getElementById('search-pill');
            if (pill) { pill.style.borderColor = '#C8956C'; pill.style.boxShadow = '0 0 0 3px rgba(200,149,108,0.18), 0 4px 20px rgba(200,149,108,0.15)'; }
          }}
          onBlur={() => {
            const pill = document.getElementById('search-pill');
            if (pill) { pill.style.borderColor = 'rgba(200,149,108,0.35)'; pill.style.boxShadow = '0 2px 12px rgba(200,149,108,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'; }
          }}
          placeholder="Search crystals & services…"
          style={{
            background: 'transparent', border: 'none', outline: 'none',
            color: '#2D1B0E', fontSize: '0.82rem', width: '100%', minWidth: 0,
          }}
        />
        {loading
          ? <i className="fa-solid fa-spinner fa-spin" style={{ color: '#C8956C', fontSize: '0.72rem' }}></i>
          : query
            ? <button type="button" onClick={() => { setQuery(''); setOpen(false); }} style={{ background: 'rgba(200,149,108,0.12)', border: 'none', color: '#A0622A', cursor: 'pointer', padding: '2px 5px', borderRadius: 20, lineHeight: 1, flexShrink: 0 }}>
                <i className="fa-solid fa-xmark" style={{ fontSize: '0.65rem' }}></i>
              </button>
            : <span style={{ fontSize: '0.6rem', color: 'rgba(160,98,42,0.4)', fontWeight: 600, letterSpacing: '0.04em', flexShrink: 0 }}>✦</span>
        }
      </div>

      {(open && (hasResults || noResults)) && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 10px)', left: 0, right: 'auto',
          width: 360,
          background: 'linear-gradient(135deg, #1C0A02 0%, #2D1B0E 100%)',
          border: '1px solid rgba(200,149,108,0.3)',
          borderRadius: 14,
          boxShadow: '0 20px 50px rgba(0,0,0,0.55), 0 0 20px rgba(200,149,108,0.08)',
          zIndex: 2000,
          overflow: 'hidden',
          maxHeight: 460,
          overflowY: 'auto',
        }}>
          {noResults && (
            <div style={{ padding: '20px 16px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>
              No results for &ldquo;<span style={{ color: '#C8956C' }}>{query}</span>&rdquo;
            </div>
          )}

          {results.services.length > 0 && (
            <div>
              <div style={{ padding: '10px 16px 4px', fontSize: '0.65rem', fontWeight: 700, color: '#C8956C', textTransform: 'uppercase', letterSpacing: '0.14em', borderBottom: '1px solid rgba(200,149,108,0.12)' }}>
                <i className="fa-solid fa-moon me-1"></i> Services
              </div>
              {results.services.map((s) => (
                <button key={s.slug} type="button" onClick={() => go(`/services#${s.slug}`)}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(200,149,108,0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(200,149,108,0.12)', border: '1px solid rgba(200,149,108,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={s.icon} style={{ color: '#C8956C', fontSize: '0.9rem' }}></i>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#F5EDD8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.title}</div>
                    {s.tagline && <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.tagline}</div>}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#E8C99A', fontWeight: 700, flexShrink: 0 }}>₹{s.price.toLocaleString('en-IN')}</div>
                </button>
              ))}
            </div>
          )}

          {results.products.length > 0 && (
            <div style={{ borderTop: results.services.length > 0 ? '1px solid rgba(200,149,108,0.15)' : 'none' }}>
              <div style={{ padding: '10px 16px 4px', fontSize: '0.65rem', fontWeight: 700, color: '#C8956C', textTransform: 'uppercase', letterSpacing: '0.14em', borderBottom: '1px solid rgba(200,149,108,0.12)' }}>
                <i className="fa-solid fa-gem me-1"></i> Products
              </div>
              {results.products.map((p) => (
                <button key={p.id} type="button" onClick={() => {
                  const catSlug = getCategorySlug(p.category, p.subcategory);
                  go(`/shop?category=${catSlug}&search=${encodeURIComponent(p.name)}`);
                }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(200,149,108,0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}>
                  <img src={p.image} alt={p.name} style={{ width: 38, height: 38, borderRadius: 10, objectFit: 'cover', flexShrink: 0, border: '1px solid rgba(200,149,108,0.2)' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#F5EDD8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>{p.category}</div>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#E8C99A', fontWeight: 700, flexShrink: 0 }}>₹{p.price.toLocaleString('en-IN')}</div>
                </button>
              ))}
              <button type="button" onClick={() => go(`/shop`)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, width: '100%', padding: '10px 16px', background: 'rgba(200,149,108,0.08)', border: 'none', color: '#C8956C', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600, letterSpacing: '0.04em' }}>
                View all in Shop <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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
            <img src="/site-logo.png" alt="KrissMaagiic Crystals Logo" className="navbar-logo-img" />
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-main">Kriss Maagiic Crystals</span>
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
          {/* Search bar — desktop only, left-side of nav links */}
          <div className="d-none d-lg-flex align-items-center me-auto" style={{ maxWidth: 280, padding: '0 1rem 0 0.5rem' }}>
            <SearchBar />
          </div>
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li className="nav-item" key={link.name}>
                  <Link href={link.href} className={`nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
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
              <Link href="/cart" className="nav-link navbar-cart" onClick={() => setMobileOpen(false)} aria-label={`Cart (${count} items)`} style={{ position: 'relative' }}>
                <i className="fa-solid fa-basket-shopping"></i>
                {count > 0 && (
                  <span aria-hidden="true" style={{ position: 'absolute', top: 2, right: -2, background: 'var(--primary, #C8956C)', color: '#fff', borderRadius: 999, fontSize: '0.65rem', minWidth: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px', fontWeight: 700, lineHeight: 1 }}>
                    {count}
                  </span>
                )}
              </Link>
            </li>

            {status === 'authenticated' ? (
              <li className="nav-item" style={{ position: 'relative' }}>
                <button type="button" onClick={() => setUserMenuOpen((v) => !v)} className="nav-link" style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'inherit' }}>
                  <i className="fa-solid fa-user-circle me-1"></i>
                  {session?.user?.name?.split(' ')[0] || 'Account'}
                  <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '0.7rem' }}></i>
                </button>
                {userMenuOpen && (
                  <div onMouseLeave={() => setUserMenuOpen(false)} style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, minWidth: 200, background: '#fff', color: '#2D1B0E', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.15)', padding: 8, zIndex: 1000 }}>
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
                    <button type="button" onClick={() => { setUserMenuOpen(false); signOut({ callbackUrl: window.location.origin }); }} style={{ ...menuItem, background: 'transparent', border: 0, color: '#D95F5F', cursor: 'pointer', width: '100%', textAlign: 'left' }}>
                      <i className="fa-solid fa-right-from-bracket"></i> Sign out
                    </button>
                  </div>
                )}
              </li>
            ) : (
              status !== 'loading' && (
                <li className="nav-item">
                  <Link href="/login" className="nav-link" onClick={() => setMobileOpen(false)}>
                    <i className="fa-solid fa-right-to-bracket me-1"></i> Sign In
                  </Link>
                </li>
              )
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
