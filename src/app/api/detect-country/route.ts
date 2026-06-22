import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // Check common reverse proxy & CDN geolocation headers
  const xVercel = req.headers.get('x-vercel-ip-country');
  const cfIp = req.headers.get('cf-ipcountry');
  const xCountry = req.headers.get('x-country-code');
  const xVisitor = req.headers.get('x-visitor-country');

  console.log('[API detect-country] Incoming headers:', {
    'x-vercel-ip-country': xVercel,
    'cf-ipcountry': cfIp,
    'x-country-code': xCountry,
    'x-visitor-country': xVisitor,
  });

  let country = xVercel || cfIp || xCountry || xVisitor;

  if (country) {
    country = country.toUpperCase();
  } else {
    // Default to 'IN' (India) if no geo headers are found (e.g. in local development)
    country = 'IN';
  }

  console.log('[API detect-country] Resolved country:', country);
  return NextResponse.json({ ok: true, country });
}
