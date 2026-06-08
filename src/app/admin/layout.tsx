import { ReactNode } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { headers, cookies } from 'next/headers';
import { verifyAdminToken, ADMIN_COOKIE } from '@/lib/adminSession';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = (await headers()).get('x-pathname') ?? '';

  // Let the login page render without the admin shell or auth check
  if (pathname === '/admin/login') return <>{children}</>;

  const jar = await cookies();
  const token = jar.get(ADMIN_COOKIE)?.value;
  const admin = token ? await verifyAdminToken(token) : null;

  if (!admin) redirect('/admin/login');

  async function logout() {
    'use server';
    const jar = await cookies();
    jar.delete(ADMIN_COOKIE);
    redirect('/admin/login');
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F1' }}>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)',
          color: '#fff',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
          <i className="fa-solid fa-crown me-2" style={{ color: 'var(--gold-light,#E8C99A)' }}></i>
          KrissMaagiic Admin
        </div>
        <div className="d-flex align-items-center gap-3" style={{ fontSize: '0.85rem' }}>
          <span style={{ opacity: 0.7 }}>{admin.email}</span>
          <Link href="/" style={{ color: '#fff', opacity: 0.7, textDecoration: 'none' }}>
            <i className="fa-solid fa-house"></i> Site
          </Link>
          <form action={logout}>
            <button
              type="submit"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                padding: '6px 12px',
                borderRadius: 999,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              <i className="fa-solid fa-right-from-bracket me-1"></i> Logout
            </button>
          </form>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(220px,260px) 1fr', minHeight: 'calc(100vh - 60px)' }}>
        <AdminNav />
        <main style={{ padding: 'clamp(1rem, 2.5vw, 2rem)' }}>{children}</main>
      </div>
    </div>
  );
}

// Inline to avoid circular import issues
import AdminNav from './AdminNav';
