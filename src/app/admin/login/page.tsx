import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { verifyAdminToken, ADMIN_COOKIE } from '@/lib/adminSession';
import AdminLoginForm from './AdminLoginForm';

export const metadata = { title: 'Admin Login · KrissMaagiic Crystals' };

export default async function AdminLoginPage() {
  const jar = await cookies();
  const token = jar.get(ADMIN_COOKIE)?.value;
  const admin = token ? await verifyAdminToken(token) : null;
  if (admin) redirect('/admin');

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,#0D0402 0%,#1C0A02 50%,#2D1B0E 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: 'rgba(200,149,108,0.15)',
              border: '1px solid rgba(200,149,108,0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <i className="fa-solid fa-crown" style={{ fontSize: '1.4rem', color: '#C8956C' }}></i>
          </div>
          <div style={{ fontFamily: 'var(--font-heading,Georgia,serif)', fontSize: '1.3rem', color: '#fff', letterSpacing: 1 }}>
            KrissMaagiic Admin
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: 4 }}>
            Restricted access — authorised personnel only
          </div>
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16,
            padding: '2rem',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h1 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 1.5rem' }}>
            Admin Sign In
          </h1>
          <Suspense fallback={<p style={{ color: 'rgba(255,255,255,0.5)' }}>Loading…</p>}>
            <AdminLoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
