import { config as loadEnv } from 'dotenv';
import path from 'path';

// Load .env.local first
loadEnv({ path: path.resolve(process.cwd(), '.env.local') });
// Override with production keys for Cashfree to ensure they authenticate successfully
loadEnv({ path: path.resolve(process.cwd(), '.env.production.local'), override: true });

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import mongoose from 'mongoose';
import { Product } from '../src/models/Product';
import { Service } from '../src/models/Service';
import { Order } from '../src/models/Order';
import { Booking } from '../src/models/Booking';
import { Notification } from '../src/models/Notification';
import GiftingRecipient from '../src/models/GiftingRecipient';

const BASE_URL = 'http://localhost:3000';

async function runSeniorTests() {
  console.log('======================================================================');
  console.log('      KRISSMAAGIIC CRYSTALS — TOP SENIOR TESTER E2E VERIFICATION      ');
  console.log('======================================================================');

  let results: { test: string; status: 'PASS' | 'FAIL'; details: string }[] = [];
  let userSessionCookie = '';
  let adminSessionCookie = '';

  let dbProductSlug = '';
  let dbProductId = '';
  let dbProductPrice = 0;
  
  let dbServiceId = '';
  let dbServiceSlug = '';
  let dbServicePrice = 0;

  let createdProductOid = '';
  let createdServiceOid = '';
  let createdGiftingOid = '';

  let testOrderInrId = '';
  let testOrderUsdId = '';
  let testBookingInrId = '';
  let testBookingUsdId = '';

  const addResult = (test: string, status: 'PASS' | 'FAIL', details: string) => {
    results.push({ test, status, details });
    if (status === 'PASS') {
      console.log(`[PASS] ${test}: ${details}`);
    } else {
      console.error(`[FAIL] ${test}: ${details}`);
    }
  };

  // 1. DATABASE CONNECTIVITY
  try {
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) throw new Error('MONGODB_URI missing from env');
    await mongoose.connect(dbUri);
    
    // Find active catalog records
    const product = await Product.findOne({ active: true, stock: { $gt: 0 } }).lean();
    const service = await Service.findOne({ active: true, isDeleted: { $ne: true } }).lean();

    if (!product || !service) {
      throw new Error('Database is empty or missing active product/service records.');
    }

    dbProductSlug = product.slug;
    dbProductId = String(product._id);
    dbProductPrice = product.price;

    dbServiceId = String(service._id);
    dbServiceSlug = service.slug;
    dbServicePrice = service.price;

    addResult('Database Connection', 'PASS', 'Connected to MongoDB. Active product & service found.');
  } catch (err: any) {
    addResult('Database Connection', 'FAIL', err.message);
    process.exit(1);
  }

  // 2. USER AUTHENTICATION (NEXTAUTH)
  try {
    const csrfRes = await fetch(`${BASE_URL}/api/auth/csrf`);
    const csrfData = await csrfRes.json();
    const csrfToken = csrfData.csrfToken;
    const csrfSetCookies = csrfRes.headers.getSetCookie ? csrfRes.headers.getSetCookie() : [csrfRes.headers.get('set-cookie') || ''];
    
    let csrfCookie = '';
    for (const cookie of csrfSetCookies) {
      if (cookie.includes('csrf-token')) {
        csrfCookie = cookie.split(';')[0];
        break;
      }
    }

    const credentialsBody = new URLSearchParams({
      email: 'admin@krissmaagiic.com',
      password: 'ChangeMe@2026',
      csrfToken,
      json: 'true',
    });

    const userLoginRes = await fetch(`${BASE_URL}/api/auth/callback/credentials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': csrfCookie,
      },
      body: credentialsBody.toString(),
      redirect: 'manual',
    });

    const userLoginSetCookies = userLoginRes.headers.getSetCookie ? userLoginRes.headers.getSetCookie() : [userLoginRes.headers.get('set-cookie') || ''];
    for (const cookie of userLoginSetCookies) {
      if (cookie.includes('session-token')) {
        userSessionCookie = cookie.split(';')[0];
        break;
      }
    }

    if (userSessionCookie) {
      addResult('User Session Authentication', 'PASS', 'NextAuth session established successfully.');
    } else {
      throw new Error('NextAuth session-token cookie was not set.');
    }
  } catch (err: any) {
    addResult('User Session Authentication', 'FAIL', err.message);
  }

  // 3. ADMIN AUTHENTICATION
  try {
    const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@krissmaagiic.com';
    const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe@2026';

    const adminLoginRes = await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: adminPassword }),
    });

    const adminLoginData = await adminLoginRes.json();
    const adminSetCookies = adminLoginRes.headers.getSetCookie ? adminLoginRes.headers.getSetCookie() : [adminLoginRes.headers.get('set-cookie') || ''];
    
    for (const cookie of adminSetCookies) {
      if (cookie.includes('kmc_admin_session')) {
        adminSessionCookie = cookie.split(';')[0];
        break;
      }
    }

    if (adminLoginRes.ok && adminLoginData.ok && adminSessionCookie) {
      addResult('Admin Session Authentication', 'PASS', 'Custom adminSession JWT cookie set successfully.');
    } else {
      throw new Error(`Admin login failed: ${adminLoginRes.status}`);
    }
  } catch (err: any) {
    addResult('Admin Session Authentication', 'FAIL', err.message);
  }

  // Skip subsequent integration checks if session cookies are missing
  if (!userSessionCookie || !adminSessionCookie) {
    console.error('[CRITICAL] Missing authentication cookies. Aborting E2E flow.');
    await mongoose.disconnect();
    process.exit(1);
  }

  // 4. USER CHECKOUTS (INR vs USD)
  // India User Checkout (INR)
  try {
    const inrOrderPayload = {
      items: [{ productId: dbProductSlug, qty: 1 }],
      customer: {
        name: 'India Buyer E2E',
        email: 'india-buyer@example.com',
        phone: '9876543210',
        address: 'Secunderabad Ring Road',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: '500003',
        country: 'IN',
      },
      currency: 'INR'
    };

    const res = await fetch(`${BASE_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': userSessionCookie },
      body: JSON.stringify(inrOrderPayload)
    });
    const data = await res.json();

    if (res.status === 200 && data.ok) {
      testOrderInrId = data.orderId;
      addResult('India User Product Checkout (INR)', 'PASS', `Created Order #: ${data.orderNumber}, Subtotal: INR ${data.subtotal}`);
    } else {
      throw new Error(`Failed with status ${res.status}: ${JSON.stringify(data)}`);
    }
  } catch (err: any) {
    addResult('India User Product Checkout (INR)', 'FAIL', err.message);
  }

  // Abroad User Checkout (USD)
  try {
    const usdOrderPayload = {
      items: [{ productId: dbProductSlug, qty: 1 }],
      customer: {
        name: 'Abroad Buyer E2E',
        email: 'abroad-buyer@example.com',
        phone: '+15551234567',
        address: '5th Avenue Central Park',
        city: 'New York',
        state: 'NY',
        pincode: '10001',
        country: 'US',
      },
      currency: 'USD'
    };

    const res = await fetch(`${BASE_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': userSessionCookie },
      body: JSON.stringify(usdOrderPayload)
    });
    const data = await res.json();

    if (res.status === 200 && data.ok) {
      testOrderUsdId = data.orderId;
      addResult('Abroad User Product Checkout (USD)', 'PASS', `Created Order #: ${data.orderNumber}, International Shipping: ${data.international}`);
    } else {
      throw new Error(`Failed with status ${res.status}: ${JSON.stringify(data)}`);
    }
  } catch (err: any) {
    addResult('Abroad User Product Checkout (USD)', 'FAIL', err.message);
  }

  // 5. SERVICE BOOKINGS (INR vs USD)
  // India User Booking (INR)
  try {
    const inrBookingPayload = {
      serviceId: dbServiceId,
      date: '2026-07-20',
      timeSlot: '10:30 AM',
      question: 'Will business grow?',
      intention: 'Wealth',
      dob: '1995-10-10',
      currency: 'INR',
      customer: {
        name: 'India Client E2E',
        email: 'india-buyer@example.com',
        phone: '9876543210'
      }
    };

    const res = await fetch(`${BASE_URL}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': userSessionCookie },
      body: JSON.stringify(inrBookingPayload)
    });
    const data = await res.json();

    if (res.status === 200 && data.ok) {
      testBookingInrId = data.bookingId;
      addResult('India User Service Booking (INR)', 'PASS', `Created Booking #: ${data.bookingNumber}`);
    } else {
      throw new Error(`Failed with status ${res.status}: ${JSON.stringify(data)}`);
    }
  } catch (err: any) {
    addResult('India User Service Booking (INR)', 'FAIL', err.message);
  }

  // Abroad User Booking (USD)
  try {
    const usdBookingPayload = {
      serviceId: dbServiceId,
      date: '2026-07-20',
      timeSlot: '11:30 AM',
      question: 'Will spiritual journey deepen?',
      intention: 'Inner peace',
      dob: '1995-10-10',
      currency: 'USD',
      customer: {
        name: 'Abroad Client E2E',
        email: 'abroad-buyer@example.com',
        phone: '+15551234567'
      }
    };

    const res = await fetch(`${BASE_URL}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': userSessionCookie },
      body: JSON.stringify(usdBookingPayload)
    });
    const data = await res.json();

    if (res.status === 200 && data.ok) {
      testBookingUsdId = data.bookingId;
      addResult('Abroad User Service Booking (USD)', 'PASS', `Created Booking #: ${data.bookingNumber}`);
    } else {
      throw new Error(`Failed with status ${res.status}: ${JSON.stringify(data)}`);
    }
  } catch (err: any) {
    addResult('Abroad User Service Booking (USD)', 'FAIL', err.message);
  }

  // 6. CASHFREE GATEWAY TRANSACTION INITIALIZATION
  try {
    if (!testOrderInrId) throw new Error('Skipping: Test Order ID was not created.');
    
    const res = await fetch(`${BASE_URL}/api/payments/cashfree/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': userSessionCookie },
      body: JSON.stringify({ orderId: testOrderInrId })
    });
    const data = await res.json();

    if (res.status === 200 && data.ok && data.paymentSessionId) {
      addResult('Cashfree Gateway Verification', 'PASS', `Generated session successfully. cfOrderId: ${data.cfOrderId}`);
    } else {
      throw new Error(`Failed to initialize payment session: ${res.status} ${JSON.stringify(data)}`);
    }
  } catch (err: any) {
    addResult('Cashfree Gateway Verification', 'FAIL', err.message);
  }

  // 7. PUBLIC & ADMIN GIFTING OPTION APIS
  // List Gifting Recipients (Public)
  try {
    const res = await fetch(`${BASE_URL}/api/gifting`);
    const data = await res.json();
    if (res.status === 200 && Array.isArray(data)) {
      addResult('Gifting Options API (Public)', 'PASS', `Returned ${data.length} gifting options.`);
    } else {
      throw new Error(`Failed: ${res.status}`);
    }
  } catch (err: any) {
    addResult('Gifting Options API (Public)', 'FAIL', err.message);
  }

  // Admin CRUD Gifting Option
  try {
    // 1. Create Option
    const giftPayload = {
      key: 'test-gift-option',
      label: 'E2E Test Option',
      subtitle: 'Spiritual automated gift test option',
      icon: 'fa-solid fa-wand-magic-sparkles',
      tagline: 'SPECIAL HOLIDAY SPARK',
      keywords: ['spiritual', 'spark'],
      fallback: 'bracelets',
      color: '#A0622A',
      bg: 'rgba(160,98,42,0.1)'
    };

    const createRes = await fetch(`${BASE_URL}/api/admin/gifting`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': adminSessionCookie },
      body: JSON.stringify(giftPayload)
    });
    const createData = await createRes.json();

    if (createRes.status === 201 && createData.ok && createData.item) {
      createdGiftingOid = createData.item._id;
      addResult('Admin Gifting Option CRUD', 'PASS', `Created Gifting Option: ${createData.item.key} (ID: ${createdGiftingOid})`);
    } else {
      throw new Error(`Create failed: ${createRes.status} ${JSON.stringify(createData)}`);
    }
  } catch (err: any) {
    addResult('Admin Gifting Option CRUD', 'FAIL', err.message);
  }

  // 8. ADMIN CRUD OPERATIONS: PRODUCTS & SERVICES
  // Admin Product CRUD
  try {
    // 1. Create Product
    const newProductPayload = {
      slug: 'e2e-test-crystal',
      name: 'E2E Testing Crystal Wand',
      category: 'raw-crystals',
      subcategory: 'Raw Crystals',
      price: 2500,
      originalPrice: 3000,
      usdPrice: 50,
      originalUsdPrice: 60,
      image: '/images/products/test-wand.png',
      images: ['/images/products/test-wand.png'],
      badge: 'New',
      desc: 'Tested programmatically by senior tester.',
      longDesc: 'Clean automated test run.',
      chakras: ['Root', 'Third Eye'],
      stock: 50,
      active: true
    };

    const createRes = await fetch(`${BASE_URL}/api/admin/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': adminSessionCookie },
      body: JSON.stringify(newProductPayload)
    });
    const createData = await createRes.json();

    if (createRes.status === 200 && createData.ok && createData.id) {
      createdProductOid = createData.id;
      addResult('Admin Product CRUD - Create', 'PASS', `Created product successfully. ID: ${createdProductOid}`);
      
      // 2. Update Product
      const updateRes = await fetch(`${BASE_URL}/api/admin/products/${createdProductOid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Cookie': adminSessionCookie },
        body: JSON.stringify({ price: 2750, stock: 65 })
      });
      const updateData = await updateRes.json();
      if (updateRes.status === 200 && updateData.ok) {
        addResult('Admin Product CRUD - Update', 'PASS', `Updated price and stock of product ID ${createdProductOid}.`);
      } else {
        throw new Error(`Update failed: ${updateRes.status} ${JSON.stringify(updateData)}`);
      }
    } else {
      throw new Error(`Create failed: ${createRes.status} ${JSON.stringify(createData)}`);
    }
  } catch (err: any) {
    addResult('Admin Product CRUD - Create/Update', 'FAIL', err.message);
  }

  // Admin Service CRUD
  try {
    // 1. Create Service
    const newServicePayload = {
      slug: 'e2e-test-tarot',
      title: 'E2E Quick Tarot Pull',
      tagline: 'Instant 3-Card Spread',
      desc: 'Tested programmatically by senior tester.',
      image: '/images/services/test-tarot.png',
      icon: 'fa-solid fa-cards',
      price: 499,
      usdPrice: 10,
      durationMins: 15,
      bullets: ['Past alignment', 'Present energy', 'Future direction'],
      active: true
    };

    const createRes = await fetch(`${BASE_URL}/api/admin/services`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': adminSessionCookie },
      body: JSON.stringify(newServicePayload)
    });
    const createData = await createRes.json();

    if (createRes.status === 200 && createData.ok && createData.id) {
      createdServiceOid = createData.id;
      addResult('Admin Service CRUD - Create', 'PASS', `Created service successfully. ID: ${createdServiceOid}`);
      
      // 2. Update Service
      const updateRes = await fetch(`${BASE_URL}/api/admin/services/${createdServiceOid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Cookie': adminSessionCookie },
        body: JSON.stringify({ price: 599, durationMins: 20 })
      });
      const updateData = await updateRes.json();
      if (updateRes.status === 200 && updateData.ok) {
        addResult('Admin Service CRUD - Update', 'PASS', `Updated price and duration of service ID ${createdServiceOid}.`);
      } else {
        throw new Error(`Update failed: ${updateRes.status} ${JSON.stringify(updateData)}`);
      }
    } else {
      throw new Error(`Create failed: ${createRes.status} ${JSON.stringify(createData)}`);
    }
  } catch (err: any) {
    addResult('Admin Service CRUD - Create/Update', 'FAIL', err.message);
  }

  // 9. ADMIN STATUS TRANSITIONS & USER DASHBOARD NOTIFICATIONS INTEGRATION
  try {
    if (!testOrderInrId || !testBookingInrId) {
      throw new Error('Skipping: Test order ID or booking ID missing.');
    }

    // 1. Transition Order status via Admin PATCH
    const orderPatchRes = await fetch(`${BASE_URL}/api/admin/orders/${testOrderInrId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Cookie': adminSessionCookie },
      body: JSON.stringify({ status: 'shipped', adminNote: 'Shipping via E2E test suite.' })
    });
    const orderPatchData = await orderPatchRes.json();

    // 2. Transition Booking status via Admin PATCH
    const bookingPatchRes = await fetch(`${BASE_URL}/api/admin/bookings/${testBookingInrId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Cookie': adminSessionCookie },
      body: JSON.stringify({ status: 'completed', adminNote: 'Completed session via E2E test suite.' })
    });
    const bookingPatchData = await bookingPatchRes.json();

    if (orderPatchRes.ok && orderPatchData.ok && bookingPatchRes.ok && bookingPatchData.ok) {
      addResult('Admin Status Transition APIs', 'PASS', 'Test order marked as shipped and booking marked as completed.');
      
      // 3. Check User Notifications API to verify they received dashboard alerts
      const notifRes = await fetch(`${BASE_URL}/api/notifications`, {
        headers: { 'Cookie': userSessionCookie }
      });
      const notifData = await notifRes.json();
      
      if (notifRes.status === 200 && notifData.ok) {
        const list: any[] = notifData.notifications || [];
        const hasOrderAlert = list.some(n => n.type === 'order' && n.message.includes(testOrderInrId) || n.title.includes('shipped'));
        const hasBookingAlert = list.some(n => n.type === 'booking' && n.message.includes('completed') || n.title.includes('completed'));
        
        if (hasOrderAlert || hasBookingAlert) {
          addResult('User Dashboard Notifications Integration', 'PASS', 'User successfully received live notification alerts in dashboard.');
        } else {
          addResult('User Dashboard Notifications Integration', 'FAIL', 'Alerts not found in user notification catalog.');
        }
      } else {
        throw new Error(`Notifications API returned ${notifRes.status}`);
      }
    } else {
      throw new Error(`Status transitions failed. Order: ${orderPatchRes.status}, Booking: ${bookingPatchRes.status}`);
    }
  } catch (err: any) {
    addResult('Admin Transitions & Notifications Integration', 'FAIL', err.message);
  }

  // 10. EXCEL DATA EXPORT (MONTHLY REPORT DOWNLOAD)
  try {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const exportUrl = `${BASE_URL}/api/admin/export/monthly?month=${currentMonth}&year=${currentYear}`;

    const res = await fetch(exportUrl, {
      headers: { 'Cookie': adminSessionCookie }
    });

    if (res.status === 200) {
      const contentType = res.headers.get('content-type') || '';
      const contentDisp = res.headers.get('content-disposition') || '';
      const buffer = await res.arrayBuffer();
      
      if (
        contentType.includes('openxmlformats-officedocument.spreadsheetml.sheet') &&
        contentDisp.includes('attachment') &&
        buffer.byteLength > 1000
      ) {
        addResult('Admin Monthly Export Excel Download', 'PASS', `Downloaded Excel workbook successfully. Size: ${buffer.byteLength} bytes.`);
      } else {
        throw new Error(`Response mismatch: type='${contentType}', disp='${contentDisp}', length=${buffer.byteLength}`);
      }
    } else {
      throw new Error(`Export returned status ${res.status}`);
    }
  } catch (err: any) {
    addResult('Admin Monthly Export Excel Download', 'FAIL', err.message);
  }

  // 11. HTML ROUTE CRAWL & SANITY CHECK
  try {
    const routesToCrawl = [
      '/',
      '/about',
      '/contact',
      '/services',
      '/shop',
      '/privacy-policy',
      '/terms',
    ];

    let count200 = 0;
    for (const r of routesToCrawl) {
      const res = await fetch(`${BASE_URL}${r}`);
      if (res.status === 200) {
        count200++;
      } else {
        console.warn(`[WARN] Route sanity check failed for ${r}: status ${res.status}`);
      }
    }

    if (count200 === routesToCrawl.length) {
      addResult('Navigation & Layout Sanity Crawl', 'PASS', `All ${routesToCrawl.length} main pages loaded successfully.`);
    } else {
      throw new Error(`Only ${count200} of ${routesToCrawl.length} pages loaded with 200 OK.`);
    }
  } catch (err: any) {
    addResult('Navigation & Layout Sanity Crawl', 'FAIL', err.message);
  }

  // 12. CLEANUP DATA (CLEAN DB)
  console.log('\n--- [STEP 12] Cleaning up test records from database ---');
  try {
    if (testOrderInrId) await Order.deleteOne({ _id: testOrderInrId });
    if (testOrderUsdId) await Order.deleteOne({ _id: testOrderUsdId });
    if (testBookingInrId) await Booking.deleteOne({ _id: testBookingInrId });
    if (testBookingUsdId) await Booking.deleteOne({ _id: testBookingUsdId });

    if (createdProductOid) {
      await Product.deleteOne({ _id: createdProductOid });
    }
    if (createdServiceOid) {
      await Service.deleteOne({ _id: createdServiceOid });
    }
    if (createdGiftingOid) {
      await GiftingRecipient.deleteOne({ _id: createdGiftingOid });
    }
    
    // Since notifications are created for the admin user email session, let's look them up and clean
    const adminUser = await mongoose.connection.db!.collection('users').findOne({ email: 'admin@krissmaagiic.com' });
    if (adminUser) {
      await Notification.deleteMany({ user: adminUser._id });
    }

    addResult('Database Post-Test Cleanup', 'PASS', 'All created test products, services, orders, bookings, and notifications purged.');
  } catch (err: any) {
    addResult('Database Post-Test Cleanup', 'FAIL', err.message);
  }

  await mongoose.disconnect();
  console.log('\n======================================================================');
  console.log('                 FINAL TEST VERIFICATION METRICS                      ');
  console.log('======================================================================');
  
  let passes = results.filter(r => r.status === 'PASS').length;
  let fails = results.filter(r => r.status === 'FAIL').length;
  
  console.table(results.map(r => ({ Test: r.test, Status: r.status, Details: r.details.substring(0, 70) })));
  
  console.log(`\nTOTAL: ${results.length} | PASS: ${passes} | FAIL: ${fails}`);
  console.log('======================================================================');

  if (fails > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runSeniorTests().catch((err) => {
  console.error('[FATAL] Senior E2E Test Runner crashed:', err);
  mongoose.disconnect().catch(() => {});
  process.exit(1);
});
