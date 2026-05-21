'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { CartProvider } from '@/context/CartContext';
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
      <CartProvider>
        {chrome && !isAuth && <Preloader />}
        {chrome && <Header />}
        {children}
        {chrome && <Footer />}
        {chrome && !isAuth && <WhatsAppFloat />}
        {chrome && !isAuth && <BackToTop />}
      </CartProvider>
    </SessionProvider>
  );
}
