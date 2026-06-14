'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { CartProvider } from '@/context/CartContext';
import { CurrencyProvider } from '@/context/CurrencyContext';
import Preloader from './Preloader';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import BackToTop from './BackToTop';

export default function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';
  const isAdmin = pathname.startsWith('/admin');
  const isDashboard = pathname.startsWith('/dashboard');
  const isAuth =
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/forgot-password' ||
    pathname === '/reset-password';
  const chrome = !isAdmin && !isDashboard;

  return (
    <SessionProvider>
      <CurrencyProvider>
        <CartProvider>
          {chrome && !isAuth && <Preloader />}
          {chrome && (
            <div style={{
              background: 'linear-gradient(135deg, #1C0A02, #2D1B0E)',
              borderBottom: '1px solid rgba(200, 149, 108, 0.25)',
              color: '#FAF6F1',
              padding: '10px 16px',
              textAlign: 'center',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              position: 'relative',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justify-content: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
              <span>✨ <strong>Digital Temple Testing Phase:</strong> KrissMaagiic is undergoing final spiritual alignment tests. Payments are in simulated testing mode. To confirm actual orders or bookings, please connect on WhatsApp: <a href="https://wa.me/918096223929" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary,#C8956C)', textDecoration: 'underline', fontWeight: 700 }}>+91 80962 23929</a>. ✨</span>
            </div>
          )}
          {chrome && <Header />}
          {children}
          {chrome && <Footer />}
          {chrome && !isAuth && <WhatsAppFloat />}
          {chrome && !isAuth && <BackToTop />}
        </CartProvider>
      </CurrencyProvider>
    </SessionProvider>
  );
}
