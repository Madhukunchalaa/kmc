import { SignJWT, jwtVerify } from 'jose';

export const ADMIN_COOKIE = 'kmc_admin_session';

const secret = () => new TextEncoder().encode(process.env.AUTH_SECRET ?? 'fallback-secret-change-me');

export async function createAdminToken(userId: string, email: string): Promise<string> {
  return new SignJWT({ userId, email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .setIssuedAt()
    .sign(secret());
}

export async function verifyAdminToken(token: string): Promise<{ userId: string; email: string } | null> {
  try {
    const { payload } = await jwtVerify(token, secret());
    if (payload.role !== 'admin') return null;
    return { userId: payload.userId as string, email: payload.email as string };
  } catch {
    return null;
  }
}
