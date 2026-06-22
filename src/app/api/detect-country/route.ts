import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // Check common reverse proxy & CDN geolocation headers
  const country = (
    req.headers.get('x-vercel-ip-country') ||
    req.headers.get('cf-ipcountry') ||
    req.headers.get('x-country-code') ||
    req.headers.get('x-visitor-country') ||
    'IN'
  ).toUpperCase();

  return NextResponse.json({ ok: true, country });
}
