'use client';

import { ReactNode, useEffect } from 'react';
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

  useEffect(() => {
    if (chrome && !isAuth) {
      document.body.classList.add('has-test-banner');
    } else {
      document.body.classList.remove('has-test-banner');
    }
    return () => {
      document.body.classList.remove('has-test-banner');
    };
  }, [chrome, isAuth]);

  // Reset scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SessionProvider>
      <CurrencyProvider>
        <CartProvider>
          {chrome && !isAuth && <Preloader />}
          {chrome && (
            <div className="test-banner">
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
