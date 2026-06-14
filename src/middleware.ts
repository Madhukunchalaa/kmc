import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { verifyAdminToken, ADMIN_COOKIE } from '@/lib/adminSession';

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

  // Dashboard routes — check user session (NextAuth) in Edge runtime
  const allCookies = req.cookies.getAll();
  console.log(`[Middleware] Path: ${pathname}, Cookies: ${allCookies.map(c => c.name).join(', ')}`);

  const sessionCookies = allCookies.filter(c => c.name.includes('session-token'));
  
  let token = null;
  for (const cookie of sessionCookies) {
    try {
      const t = await getToken({
        req,
        secret: process.env.AUTH_SECRET,
        cookieName: cookie.name,
        salt: cookie.name,
      });
      if (t) {
        token = t;
        console.log(`[Middleware] Successfully decrypted token from cookie: ${cookie.name}`);
        break;
      }
    } catch (err) {
      console.error(`[Middleware] Error decrypting token with cookie ${cookie.name}:`, err);
    }
  }

  if (!token) {
    // Fallback to default next-auth getToken behavior
    try {
      token = await getToken({
        req,
        secret: process.env.AUTH_SECRET,
      });
      if (token) {
        console.log(`[Middleware] Successfully decrypted token using default getToken`);
      }
    } catch (err) {
      console.error(`[Middleware] Fallback getToken failed:`, err);
    }
  }

  if (!token) {
    console.log(`[Middleware] No valid session token found. Redirecting to login.`);
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
