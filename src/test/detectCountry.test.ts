import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { GET } from '../app/api/detect-country/route';

describe('/api/detect-country', () => {
  it('should detect country from x-vercel-ip-country header', async () => {
    const req = new NextRequest('http://localhost/api/detect-country', {
      headers: {
        'x-vercel-ip-country': 'US',
      },
    });
    const res = await GET(req);
    const data = await res.json();
    expect(data).toEqual({ ok: true, country: 'US' });
  });

  it('should detect country from cf-ipcountry header and capitalize it', async () => {
    const req = new NextRequest('http://localhost/api/detect-country', {
      headers: {
        'cf-ipcountry': 'gb',
      },
    });
    const res = await GET(req);
    const data = await res.json();
    expect(data).toEqual({ ok: true, country: 'GB' });
  });

  it('should default to IN if no geo headers are provided', async () => {
    const req = new NextRequest('http://localhost/api/detect-country');
    const res = await GET(req);
    const data = await res.json();
    expect(data).toEqual({ ok: true, country: 'IN' });
  });
});
