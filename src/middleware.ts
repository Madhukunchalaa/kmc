import { NextResponse, NextRequest } from 'next/server';
import { verifyAdminToken, ADMIN_COOKIE } from '@/lib/adminSession';
import { auth } from '@/auth';

const ADMIN_PREFIX = '/admin';
const USER_PREFIX = '/dashboard';

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  const isAdmin = pathname.startsWith(ADMIN_PREFIX);
  const isDashboard = pathname.startsWith(USER_PREFIX);

  if (!isAdmin && !isDashboard) return NextResponse.next();

  // Admin login page is always public
  if (pathname === '/admin/login') {
    const res = NextResponse.next();
    res.headers.set('x-pathname', pathname);
    return res;
  }

  if (isAdmin) {
    // Admin routes — check admin cookie (completely separate from user session)
    const adminToken = req.cookies.get(ADMIN_COOKIE)?.value;
    const admin = adminToken ? await verifyAdminToken(adminToken) : null;

    if (!admin) {
      const url = req.nextUrl.clone();
      url.pathname = '/admin/login';
      url.search = '';
      return NextResponse.redirect(url);
    }

    const res = NextResponse.next();
    res.headers.set('x-pathname', pathname);
    return res;
  }

  // Dashboard routes — check user session (NextAuth) using the official auth helper
  const session = await auth();

  if (!session?.user) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('callbackUrl', pathname + search);
    return NextResponse.redirect(url);
  }

  const res = NextResponse.next();
  res.headers.set('x-pathname', pathname);
  return res;
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};
