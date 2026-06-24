'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchResult {
  products: { id: string; name: string; category: string; subcategory?: string; image: string; price: number }[];
  services: { slug: string; title: string; tagline: string; icon: string; price: number }[];
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

export default function MobileSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult>({ products: [], services: [] });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
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

  const go = (href: string) => {
    setOpen(false);
    setFocused(false);
    setQuery('');
    router.push(href);
  };

  const hasResults = results.products.length > 0 || results.services.length > 0;

  return (
    /* Only visible on mobile — hidden on lg+ */
    <div className="d-lg-none" style={{ background: 'radial-gradient(circle at 50% 0%, #2D1B0E 0%, #1C0A02 100%)', padding: '0 0 28px' }}>
      {/* Decorative top separator */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, paddingTop: 20, marginBottom: 18 }}>
        <div style={{ height: 1, flex: 1, background: 'linear-gradient(to right, transparent, rgba(200,149,108,0.35))' }} />
        <i className="fa-solid fa-gem" style={{ color: '#C8956C', fontSize: '0.65rem', opacity: 0.7 }}></i>
        <span style={{ color: 'rgba(200,149,108,0.7)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>Discover</span>
        <i className="fa-solid fa-gem" style={{ color: '#C8956C', fontSize: '0.65rem', opacity: 0.7 }}></i>
        <div style={{ height: 1, flex: 1, background: 'linear-gradient(to left, transparent, rgba(200,149,108,0.35))' }} />
      </div>

      <div ref={ref} style={{ position: 'relative', padding: '0 20px' }}>
        {/* Input pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(255,255,255,0.04)',
          border: `1.5px solid ${focused ? '#C8956C' : 'rgba(200,149,108,0.35)'}`,
          borderRadius: 50,
          padding: '10px 18px',
          boxShadow: focused
            ? '0 0 0 3px rgba(200,149,108,0.12), 0 8px 24px rgba(0,0,0,0.4)'
            : '0 4px 20px rgba(0,0,0,0.35)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          backdropFilter: 'blur(8px)',
        }}>
          {loading
            ? <i className="fa-solid fa-spinner fa-spin" style={{ color: '#C8956C', fontSize: '0.85rem', flexShrink: 0 }}></i>
            : <i className="fa-solid fa-magnifying-glass" style={{ color: '#C8956C', fontSize: '0.85rem', flexShrink: 0 }}></i>
          }
          <input
            type="text"
            value={query}
            onChange={(e) => search(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && query.trim().length >= 2) {
                go(`/shop?category=view-all&search=${encodeURIComponent(query.trim())}`);
              }
            }}
            onFocus={() => { setFocused(true); if (hasResults) setOpen(true); }}
            placeholder="Search crystals, bracelets, services…"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#F5EDD8',
              fontSize: '0.88rem',
              minWidth: 0,
            }}
          />
          {query && (
            <button type="button" onClick={() => { setQuery(''); setOpen(false); }}
              style={{ background: 'rgba(200,149,108,0.15)', border: 'none', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
              <i className="fa-solid fa-xmark" style={{ color: '#C8956C', fontSize: '0.65rem' }}></i>
            </button>
          )}
        </div>

        {/* Hint text below input */}
        {!focused && !query && (
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', margin: '8px 0 0', letterSpacing: '0.05em' }}>
            Find products &amp; services instantly
          </p>
        )}

        {/* Dropdown results */}
        {open && (hasResults || (!loading && query.length >= 2)) && (
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 20,
            right: 20,
            background: 'linear-gradient(160deg, #1C0A02 0%, #2D1B0E 100%)',
            border: '1px solid rgba(200,149,108,0.3)',
            borderRadius: 16,
            boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,149,108,0.1)',
            zIndex: 500,
            overflow: 'hidden',
            maxHeight: 360,
            overflowY: 'auto',
          }}>
            {!hasResults && (
              <div style={{ padding: '18px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                No results for &ldquo;<span style={{ color: '#C8956C' }}>{query}</span>&rdquo;
              </div>
            )}

            {results.services.length > 0 && (
              <div>
                <div style={{ padding: '8px 14px 4px', fontSize: '0.62rem', fontWeight: 700, color: '#C8956C', textTransform: 'uppercase', letterSpacing: '0.14em', borderBottom: '1px solid rgba(200,149,108,0.1)' }}>
                  <i className="fa-solid fa-moon me-1"></i> Services
                </div>
                {results.services.map((s) => (
                  <button key={s.slug} type="button" onClick={() => go(`/services#${s.slug}`)}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 14px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(200,149,108,0.1)', border: '1px solid rgba(200,149,108,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={s.icon} style={{ color: '#C8956C', fontSize: '0.85rem' }}></i>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#F5EDD8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.title}</div>
                      {s.tagline && <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.tagline}</div>}
                    </div>
                    <span style={{ fontSize: '0.76rem', color: '#E8C99A', fontWeight: 700, flexShrink: 0 }}>₹{s.price.toLocaleString('en-IN')}</span>
                  </button>
                ))}
              </div>
            )}

            {results.products.length > 0 && (
              <div style={{ borderTop: results.services.length > 0 ? '1px solid rgba(200,149,108,0.15)' : 'none' }}>
                <div style={{ padding: '8px 14px 4px', fontSize: '0.62rem', fontWeight: 700, color: '#C8956C', textTransform: 'uppercase', letterSpacing: '0.14em', borderBottom: '1px solid rgba(200,149,108,0.1)' }}>
                  <i className="fa-solid fa-gem me-1"></i> Products
                </div>
                {results.products.map((p) => (
                  <button key={p.id} type="button" onClick={() => go(`/shop/${p.id}`)}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 14px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <img src={p.image} alt={p.name} style={{ width: 34, height: 34, borderRadius: 8, objectFit: 'cover', flexShrink: 0, border: '1px solid rgba(200,149,108,0.2)' }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#F5EDD8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>{p.category}</div>
                    </div>
                    <span style={{ fontSize: '0.76rem', color: '#E8C99A', fontWeight: 700, flexShrink: 0 }}>₹{p.price.toLocaleString('en-IN')}</span>
                  </button>
                ))}
                <button type="button" onClick={() => {
                  go(`/shop?category=view-all&search=${encodeURIComponent(query.trim())}`);
                }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, width: '100%', padding: '10px 14px', background: 'rgba(200,149,108,0.07)', border: 'none', color: '#C8956C', fontSize: '0.78rem', cursor: 'pointer', fontWeight: 600, letterSpacing: '0.04em' }}>
                  View all in Shop <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.65rem' }}></i>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
