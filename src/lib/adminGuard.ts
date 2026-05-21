import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function requireAdmin(): Promise<{ ok: true; userId: string } | { ok: false; res: Response }> {
  const session = await auth();
  if (!session?.user) {
    return { ok: false, res: NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 }) };
  }
  if (session.user.role !== 'admin') {
    return { ok: false, res: NextResponse.json({ ok: false, reason: 'forbidden' }, { status: 403 }) };
  }
  return { ok: true, userId: session.user.id };
}
