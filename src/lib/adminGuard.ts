import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAdminToken, ADMIN_COOKIE } from '@/lib/adminSession';

export async function requireAdmin(): Promise<{ ok: true; userId: string } | { ok: false; res: Response }> {
  const jar = await cookies();
  const token = jar.get(ADMIN_COOKIE)?.value;
  const admin = token ? await verifyAdminToken(token) : null;

  if (!admin) {
    return { ok: false, res: NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 }) };
  }

  return { ok: true, userId: admin.userId };
}
