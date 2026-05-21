import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { auth, signOut } from '@/auth';
import DashboardNav from './DashboardNav';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect('/login?callbackUrl=/dashboard');

  async function logout() {
    'use server';
    await signOut({ redirectTo: '/' });
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F1' }}>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
          <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <i className="fa-solid fa-gem me-2" style={{ color: 'var(--primary,#C8956C)' }}></i>
            KrissMaagiic
          </a>
          <span style={{ color: '#999', fontSize: '0.85rem', marginLeft: 8 }}>· My Dashboard</span>
        </div>
        <div className="d-flex align-items-center gap-3" style={{ fontSize: '0.85rem' }}>
          <span style={{ color: '#888' }}>Hi, {session.user.name?.split(' ')[0] || session.user.email}</span>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>
            <i className="fa-solid fa-house"></i> Site
          </a>
          <form action={logout}>
            <button
              type="submit"
              style={{
                background: 'transparent',
                border: '1px solid rgba(0,0,0,0.1)',
                color: '#666',
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
        <DashboardNav isAdmin={session.user.role === 'admin'} />
        <main style={{ padding: 'clamp(1rem, 2.5vw, 2rem)' }}>{children}</main>
      </div>
    </div>
  );
}
