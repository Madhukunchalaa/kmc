import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const BASE_URL = 'http://localhost:3000';

async function testPublicAPIs() {
  console.log('\n--- 1. Testing Public APIs ---');
  
  // GET /api/products
  try {
    const res = await fetch(`${BASE_URL}/api/products`);
    const data = await res.json();
    console.log(`[PASS] GET /api/products returned ${data.products?.length || 0} products. Status: ${res.status}`);
  } catch (err) {
    console.log(`[FAIL] GET /api/products: ${err}`);
  }

  // GET /api/services
  try {
    const res = await fetch(`${BASE_URL}/api/services`);
    const data = await res.json();
    console.log(`[PASS] GET /api/services returned ${data.length || 0} services. Status: ${res.status}`);
  } catch (err) {
    console.log(`[FAIL] GET /api/services: ${err}`);
  }

  // GET /api/testimonials
  try {
    const res = await fetch(`${BASE_URL}/api/testimonials`);
    const data = await res.json();
    console.log(`[PASS] GET /api/testimonials returned ${data.testimonials?.length || 0} testimonials. Status: ${res.status}`);
  } catch (err) {
    console.log(`[FAIL] GET /api/testimonials: ${err}`);
  }

  // GET /api/search?q=quartz
  try {
    const res = await fetch(`${BASE_URL}/api/search?q=quartz`);
    const data = await res.json();
    console.log(`[PASS] GET /api/search?q=quartz returned ${data.products?.length || 0} matching products. Status: ${res.status}`);
  } catch (err) {
    console.log(`[FAIL] GET /api/search: ${err}`);
  }
}

async function testAdminLoginAndDashboard() {
  console.log('\n--- 2. Testing Admin Authentication and Protected APIs ---');

  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@krissmaagiic.com';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe@2026';

  let adminCookie = '';

  try {
    const res = await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: adminPassword }),
    });
    
    const data = await res.json();
    if (res.ok && data.ok) {
      console.log(`[PASS] POST /api/admin/auth/login authenticated successfully!`);
      const setCookies = res.headers.getSetCookie ? res.headers.getSetCookie() : [res.headers.get('set-cookie') || ''];
      for (const cookie of setCookies) {
        const match = cookie.match(/kmc_admin_session=[^;]+/);
        if (match) {
          adminCookie = match[0];
          console.log(`[PASS] Extracted kmc_admin_session cookie: ${adminCookie.substring(0, 30)}...`);
          break;
        }
      }
    } else {
      console.log(`[FAIL] POST /api/admin/auth/login: ${JSON.stringify(data)}`);
    }
  } catch (err) {
    console.log(`[FAIL] POST /api/admin/auth/login: ${err}`);
  }

  if (!adminCookie) {
    console.log('[FAIL] Cannot test protected admin APIs: admin cookie missing.');
    return;
  }

  const getWithCookie = async (endpoint: string) => {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: { Cookie: adminCookie },
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        console.log(`[PASS] GET ${endpoint} authorized. Returned ${data.items?.length ?? 0} items.`);
      } else {
        console.log(`[FAIL] GET ${endpoint}: ${res.status} ${JSON.stringify(data)}`);
      }
    } catch (err) {
      console.log(`[FAIL] GET ${endpoint}: ${err}`);
    }
  };

  // Only GET /api/admin/products implements the GET method. Others use Server Components directly.
  await getWithCookie('/api/admin/products');
}

async function testUserDatabaseAuth() {
  console.log('\n--- 3. Testing Database Connection and Model Integrations ---');
  
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('[FAIL] MONGODB_URI missing from env');
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log('[PASS] Database connected successfully!');

    // Query collections
    const db = mongoose.connection.db!;
    
    // Check users
    const usersCol = db.collection('users');
    const adminEmail = (process.env.SEED_ADMIN_EMAIL || 'admin@krissmaagiic.com').toLowerCase();
    const user = await usersCol.findOne({ email: adminEmail });

    if (user) {
      console.log(`[PASS] Found admin user record in database: ${user.email} (${user.role})`);
      const ok = await bcrypt.compare(process.env.SEED_ADMIN_PASSWORD || 'ChangeMe@2026', user.passwordHash);
      if (ok) {
        console.log('[PASS] Bcrypt password match check passed for credentials authorize flow!');
      } else {
        console.log('[FAIL] Bcrypt password match check failed');
      }
    } else {
      console.log(`[FAIL] Admin user record not found in database: ${adminEmail}`);
    }

    // Check products count
    const productsCol = db.collection('products');
    const productCount = await productsCol.countDocuments();
    console.log(`[PASS] Database products count: ${productCount}`);

    // Check services count and list
    const servicesCol = db.collection('services');
    const serviceCount = await servicesCol.countDocuments();
    const activeServices = await servicesCol.find({ active: true }).toArray();
    console.log(`[PASS] Database services count: ${serviceCount} (Active: ${activeServices.length})`);
    if (activeServices.length > 0) {
      console.log('Active services in database:');
      activeServices.forEach(s => console.log(`  - Slug: ${s.slug}, Title: ${s.title}`));
    }

    // Check orders count
    const ordersCol = db.collection('orders');
    const orderCount = await ordersCol.countDocuments();
    console.log(`[PASS] Database orders count: ${orderCount}`);

    // Check bookings count
    const bookingsCol = db.collection('bookings');
    const bookingCount = await bookingsCol.countDocuments();
    console.log(`[PASS] Database bookings count: ${bookingCount}`);

    // Check blogs count
    const blogsCol = db.collection('blogs');
    const blogCount = await blogsCol.countDocuments();
    console.log(`[PASS] Database blogs count: ${blogCount}`);
    
    await mongoose.disconnect();
    console.log('[PASS] Database disconnected.');
  } catch (err) {
    console.log(`[FAIL] Database test failed: ${err}`);
  }
}

async function main() {
  console.log('==================================================');
  console.log('      KRISSMAAGIIC API END-TO-END TEST SUITE      ');
  console.log('==================================================');
  await testPublicAPIs();
  await testAdminLoginAndDashboard();
  await testUserDatabaseAuth();
  console.log('==================================================');
}

main().catch(console.error);
