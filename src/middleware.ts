import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const ADMIN_PREFIX = '/admin';
const USER_PREFIX = '/dashboard';

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  const isAdmin = pathname.startsWith(ADMIN_PREFIX);
  const isDashboard = pathname.startsWith(USER_PREFIX);

  if (!isAdmin && !isDashboard) return NextResponse.next();

  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  });

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('callbackUrl', pathname + search);
    return NextResponse.redirect(url);
  }

  if (isAdmin && token.role !== 'admin') {
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};
