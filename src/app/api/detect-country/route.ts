import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // Check common reverse proxy & CDN geolocation headers
  let country = req.headers.get('x-vercel-ip-country') ||
                req.headers.get('cf-ipcountry') ||
                req.headers.get('x-country-code') ||
                req.headers.get('x-visitor-country');

  if (country) {
    country = country.toUpperCase();
  } else {
    // Default to 'IN' (India) if no geo headers are found (e.g. in local development)
    country = 'IN';
  }

  return NextResponse.json({ ok: true, country });
}
