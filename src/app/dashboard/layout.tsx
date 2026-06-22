import { ReactNode } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { auth, signOut } from '@/auth';
import DashboardNav from './DashboardNav';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect('/login?callbackUrl=/dashboard');

  await connectMongoose();
  let dbUser = await User.findById(session.user.id, 'country').lean() as { country?: string } | null;
  let hasCountry = !!(dbUser?.country);

  if (!hasCountry) {
    try {
      const reqHeaders = await headers();
      let detectedCountry = reqHeaders.get('x-vercel-ip-country') || reqHeaders.get('cf-ipcountry') || 'IN';
      detectedCountry = detectedCountry.toUpperCase();
      
      // Auto-assign detected country in DB
      await User.findByIdAndUpdate(session.user.id, { country: detectedCountry });
      hasCountry = true;
    } catch (err) {
      console.error('Failed to auto-detect and save country for user:', err);
    }
  }

  async function logout() {
    'use server';
    await signOut({ redirectTo: '/' });
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F1' }}>
      {/* Top header */}
      <header className="dashboard-header">
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            <i className="fa-solid fa-gem" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.9rem' }}></i>
            <span>Kriss Maagiic</span>
          </Link>
        </div>

        <div className="dashboard-header-actions">
          <span className="dashboard-header-name">
            Hi, {session.user.name?.split(' ')[0] || session.user.email}
          </span>

          <Link href="/" className="dashboard-header-site" aria-label="Back to site">
            <i className="fa-solid fa-house me-1"></i>
            <span>Site</span>
          </Link>

          <form action={logout} style={{ margin: 0 }}>
            <button type="submit" className="dashboard-header-logout">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span className="ms-1">Logout</span>
            </button>
          </form>
        </div>
      </header>

      {/* Body: sidebar + main */}
      <div className="dashboard-body">
        <DashboardNav isAdmin={session.user.role === 'admin'} />

        <main className="dashboard-main">
          {!hasCountry && (
            <div style={{ background: '#FFF4E5', border: '1px solid #FFE0B2', padding: '14px 16px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <i className="fa-solid fa-earth-americas" style={{ color: '#E6A23C', fontSize: '1.3rem', marginTop: 2 }}></i>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', color: '#B06500' }}>Country Selection Required</h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#D97706' }}>
                  Please complete your profile by selecting your country for correct pricing.{' '}
                  <Link href="/dashboard/profile" style={{ fontWeight: 600, color: '#B06500' }}>Update Profile →</Link>
                </p>
              </div>
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
