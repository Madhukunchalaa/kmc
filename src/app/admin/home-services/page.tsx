import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { Service } from '@/models/Service';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Home Services · Admin' };

const PATHS = ['PATH I', 'PATH II', 'PATH III', 'PATH IV', 'PATH V'];

export default async function AdminHomeServices() {
  await connectMongoose();
  const services = await Service.find({ active: true, isDeleted: { $ne: true } })
    .sort({ createdAt: 1 })
    .lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
            Homepage Service Cards
          </h1>
          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
            These service cards correspond directly to the carousel pathways on the homepage.
          </p>
        </div>
        <Link href="/admin/services" className="btn-outline-custom" style={{ textDecoration: 'none' }}>
          <i className="fa-solid fa-list me-2"></i>Manage Bookable Services
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
        {services.map((s, idx) => {
          const pathLabel = PATHS[idx] ?? `PATH ${idx + 1}`;
          
          // Calculate price tier range
          const tiers = (s.tiers ?? []) as Array<{ label: string; price: number; usdPrice: number }>;
          const hasTiers = tiers.length > 0;
          const minPrice = hasTiers ? Math.min(...tiers.map(t => t.price)) : s.price;
          const maxPrice = hasTiers ? Math.max(...tiers.map(t => t.price)) : s.price;
          const minUsd = hasTiers ? Math.min(...tiers.map(t => t.usdPrice)) : ((s as any).usdPrice ?? 0);
          const maxUsd = hasTiers ? Math.max(...tiers.map(t => t.usdPrice)) : ((s as any).usdPrice ?? 0);

          return (
            <div
              key={String(s._id)}
              style={{
                background: '#fff',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: '#FAF6F1',
                  padding: '16px 20px',
                  borderBottom: '1px solid rgba(0,0,0,0.04)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--primary,#C8956C)',
                    background: 'rgba(200,149,108,0.1)',
                    padding: '4px 10px',
                    borderRadius: '30px',
                    textTransform: 'uppercase',
                  }}
                >
                  {pathLabel}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#999', fontFamily: 'monospace' }}>
                  /{s.slug}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(200,149,108,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary,#C8956C)',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                    }}
                  >
                    <i className={s.icon || 'fa-solid fa-sparkles'}></i>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600 }}>{s.title}</h3>
                    {s.tagline && (
                      <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--primary,#C8956C)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {s.tagline}
                      </p>
                    )}
                  </div>
                </div>

                {s.image && (
                  <div style={{ position: 'relative', height: '140px', width: '100%', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <img
                      src={s.image}
                      alt={s.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}

                <p style={{ margin: 0, fontSize: '0.85rem', color: '#555', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {s.desc}
                </p>

                {s.bullets && s.bullets.length > 0 && (
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#666', display: 'block', marginBottom: '6px' }}>
                      Key Features:
                    </span>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '4px' }}>
                      {s.bullets.slice(0, 3).map((b, bIdx) => (
                        <li key={bIdx} style={{ fontSize: '0.8rem', color: '#666', display: 'flex', gap: '6px', alignItems: 'center' }}>
                          <span style={{ color: 'var(--primary,#C8956C)' }}>✦</span>
                          <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{b}</span>
                        </li>
                      ))}
                      {s.bullets.length > 3 && (
                        <li style={{ fontSize: '0.78rem', color: '#999', paddingLeft: '12px' }}>
                          + {s.bullets.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Price Range */}
                <div
                  style={{
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    paddingTop: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#999', display: 'block', textTransform: 'uppercase' }}>
                      Energy Exchange
                    </span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text,#2D1B0E)' }}>
                      {hasTiers ? (
                        <>
                          ₹{minPrice.toLocaleString('en-IN')} - ₹{maxPrice.toLocaleString('en-IN')}
                          <span style={{ fontSize: '0.78rem', fontWeight: 500, color: '#666', marginLeft: '6px' }}>
                            (${minUsd} - ${maxUsd})
                          </span>
                        </>
                      ) : (
                        <>
                          ₹{s.price.toLocaleString('en-IN')}
                          <span style={{ fontSize: '0.78rem', fontWeight: 500, color: '#666', marginLeft: '6px' }}>
                            (${(s as any).usdPrice ?? 0})
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div
                style={{
                  borderTop: '1px solid rgba(0,0,0,0.05)',
                  padding: '12px 20px',
                  background: '#FCFBF9',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Link
                  href={`/admin/home-services/${s._id}`}
                  className="btn-primary-custom"
                  style={{ textDecoration: 'none', padding: '6px 16px', fontSize: '0.85rem' }}
                >
                  <i className="fa-solid fa-pen-to-square me-2"></i>Edit Card Content
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
