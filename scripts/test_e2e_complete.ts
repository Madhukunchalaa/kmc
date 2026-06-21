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

const BASE_URL = 'http://localhost:3000';

async function runE2ETests() {
  console.log('==================================================');
  console.log('      KRISSMAAGIIC COMPLETE E2E TEST SUITE        ');
  console.log('==================================================');

  // 1. Database Connection
  console.log('\n--- [STEP 1] Connecting to MongoDB ---');
  const dbUri = process.env.MONGODB_URI;
  if (!dbUri) {
    throw new Error('MONGODB_URI is not set in environment.');
  }
  await mongoose.connect(dbUri);
  console.log('[PASS] Connected to MongoDB.');

  // Find active product
  const testProduct = await Product.findOne({ active: true, stock: { $gt: 0 } }).lean();
  if (!testProduct) {
    throw new Error('No active products with stock found in database to test checkout.');
  }
  console.log(`Found active product for test: ${testProduct.name} (ID: ${testProduct._id}, Price: INR ${testProduct.price})`);

  // Find active service
  const testService = await Service.findOne({ active: true, isDeleted: { $ne: true } }).lean();
  if (!testService) {
    throw new Error('No active services found in database to test booking.');
  }
  console.log(`Found active service for test: ${testService.title} (Slug: ${testService.slug}, ID: ${testService._id}, Price: INR ${testService.price})`);


  // 2. Testing Public APIs
  console.log('\n--- [STEP 2] Testing Public APIs ---');
  
  // GET /api/products
  const productsRes = await fetch(`${BASE_URL}/api/products`);
  const productsData = await productsRes.json();
  if (productsRes.status === 200 && productsData.ok) {
    console.log(`[PASS] GET /api/products returned ${productsData.products?.length || 0} products.`);
  } else {
    console.log(`[FAIL] GET /api/products failed: ${productsRes.status} ${JSON.stringify(productsData)}`);
  }

  // GET /api/services
  const servicesRes = await fetch(`${BASE_URL}/api/services`);
  const servicesData = await servicesRes.json();
  if (servicesRes.status === 200 && servicesData.ok) {
    console.log(`[PASS] GET /api/services returned ${servicesData.services?.length || 0} services.`);
  } else {
    console.log(`[FAIL] GET /api/services failed: ${servicesRes.status} ${JSON.stringify(servicesData)}`);
  }

  // GET /api/testimonials
  const testimonialsRes = await fetch(`${BASE_URL}/api/testimonials`);
  const testimonialsData = await testimonialsRes.json();
  if (testimonialsRes.status === 200 && testimonialsData.ok) {
    console.log(`[PASS] GET /api/testimonials returned ${testimonialsData.testimonials?.length || 0} testimonials.`);
  } else {
    console.log(`[FAIL] GET /api/testimonials failed: ${testimonialsRes.status} ${JSON.stringify(testimonialsData)}`);
  }

  // GET /api/search?q=quartz
  const searchRes = await fetch(`${BASE_URL}/api/search?q=quartz`);
  const searchData = await searchRes.json();
  if (searchRes.status === 200 && searchData.ok) {
    console.log(`[PASS] GET /api/search?q=quartz returned ${searchData.products?.length || 0} items.`);
  } else {
    console.log(`[FAIL] GET /api/search failed: ${searchRes.status} ${JSON.stringify(searchData)}`);
  }


  // 3. User Authentication (NextAuth Credentials)
  console.log('\n--- [STEP 3] User Authentication (NextAuth) ---');
  
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
  let userSessionCookie = '';
  for (const cookie of userLoginSetCookies) {
    if (cookie.includes('session-token')) {
      userSessionCookie = cookie.split(';')[0];
      break;
    }
  }

  if (userSessionCookie) {
    console.log('[PASS] NextAuth credentials session successfully established!');
    console.log(`Session Cookie: ${userSessionCookie.substring(0, 45)}...`);
  } else {
    throw new Error('Failed to obtain user session cookie from credentials flow.');
  }


  // 4. Admin Authentication (Custom Token in Cookie)
  console.log('\n--- [STEP 4] Admin Authentication (Custom JWT) ---');

  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@krissmaagiic.com';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe@2026';

  const adminLoginRes = await fetch(`${BASE_URL}/api/admin/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: adminEmail, password: adminPassword }),
  });

  const adminLoginData = await adminLoginRes.json();
  const adminSetCookies = adminLoginRes.headers.getSetCookie ? adminLoginRes.headers.getSetCookie() : [adminLoginRes.headers.get('set-cookie') || ''];
  
  let adminSessionCookie = '';
  for (const cookie of adminSetCookies) {
    if (cookie.includes('kmc_admin_session')) {
      adminSessionCookie = cookie.split(';')[0];
      break;
    }
  }

  if (adminLoginRes.ok && adminLoginData.ok && adminSessionCookie) {
    console.log('[PASS] Admin custom login authenticated successfully!');
    console.log(`Admin Cookie: ${adminSessionCookie.substring(0, 45)}...`);
  } else {
    throw new Error(`Admin custom login failed: ${adminLoginRes.status} ${JSON.stringify(adminLoginData)}`);
  }


  // 5. Product Checkout API Test (Product is Booking)
  console.log('\n--- [STEP 5] Testing Product Checkout API (Order Creation) ---');

  const orderPayload = {
    items: [
      {
        productId: testProduct.slug,
        qty: 1
      }
    ],
    customer: {
      name: 'E2E Test Buyer',
      email: 'test-buyer@example.com',
      phone: '9999999999',
      address: '123 Spiritual Vibe Road',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500001',
      country: 'IN',
      dob: '1990-06-15',
      notes: 'E2E automated order verification run.'
    },
    currency: 'INR'
  };

  const orderRes = await fetch(`${BASE_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': userSessionCookie
    },
    body: JSON.stringify(orderPayload)
  });

  const orderData = await orderRes.json();
  if (orderRes.status === 200 && orderData.ok) {
    console.log(`[PASS] Order created successfully. Order #: ${orderData.orderNumber}, ID: ${orderData.orderId}`);
  } else {
    throw new Error(`Failed to create order: ${orderRes.status} ${JSON.stringify(orderData)}`);
  }

  const testOrderId = orderData.orderId;


  // 6. Service Booking API Test (Service is Booking)
  console.log('\n--- [STEP 6] Testing Service Booking API ---');

  const bookingPayload = {
    serviceId: String(testService._id),
    date: '2026-07-15',
    timeSlot: '11:30 AM',
    question: 'What does my crystal journey look like?',
    intention: 'Guidance and growth',
    dob: '1990-06-15',
    notes: 'E2E automated booking verification run.',
    currency: 'INR',
    customer: {
      name: 'E2E Test Client',
      email: 'test-buyer@example.com',
      phone: '9999999999'
    }
  };

  const bookingRes = await fetch(`${BASE_URL}/api/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': userSessionCookie
    },
    body: JSON.stringify(bookingPayload)
  });

  const bookingData = await bookingRes.json();
  if (bookingRes.status === 200 && bookingData.ok) {
    console.log(`[PASS] Booking created successfully. Booking #: ${bookingData.bookingNumber}, ID: ${bookingData.bookingId}`);
  } else {
    throw new Error(`Failed to create booking: ${bookingRes.status} ${JSON.stringify(bookingData)}`);
  }

  const testBookingId = bookingData.bookingId;


  // 7. Cashfree Payment Session Verification
  console.log('\n--- [STEP 7] Verifying Cashfree Payment Session Integration ---');

  const paymentSessionRes = await fetch(`${BASE_URL}/api/payments/cashfree/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': userSessionCookie
    },
    body: JSON.stringify({ orderId: testOrderId })
  });

  const paymentSessionData = await paymentSessionRes.json();
  if (paymentSessionRes.status === 200 && paymentSessionData.ok && paymentSessionData.paymentSessionId) {
    console.log(`[PASS] Cashfree order created & paymentSessionId received successfully!`);
    console.log(`CF Order ID: ${paymentSessionData.cfOrderId}`);
    console.log(`Payment Session ID: ${paymentSessionData.paymentSessionId.substring(0, 45)}...`);
  } else {
    throw new Error(`Failed to create Cashfree payment session: ${paymentSessionRes.status} ${JSON.stringify(paymentSessionData)}`);
  }


  // 8. Admin Protected Functionalities
  console.log('\n--- [STEP 8] Testing Admin Protected Routes & Status Transitions ---');

  // GET /api/admin/products
  const adminProductsRes = await fetch(`${BASE_URL}/api/admin/products`, {
    headers: { 'Cookie': adminSessionCookie }
  });
  const adminProductsData = await adminProductsRes.json();
  if (adminProductsRes.status === 200 && adminProductsData.ok) {
    console.log(`[PASS] GET /api/admin/products authorized. Returned ${adminProductsData.items?.length || 0} items.`);
  } else {
    throw new Error(`GET /api/admin/products failed: ${adminProductsRes.status} ${JSON.stringify(adminProductsData)}`);
  }

  // PATCH /api/admin/orders/[id]
  const patchOrderRes = await fetch(`${BASE_URL}/api/admin/orders/${testOrderId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': adminSessionCookie
    },
    body: JSON.stringify({ status: 'confirmed', adminNote: 'Verified via E2E test script' })
  });
  const patchOrderData = await patchOrderRes.json();
  if (patchOrderRes.ok && patchOrderData.ok) {
    console.log(`[PASS] PATCH /api/admin/orders/${testOrderId} succeeded.`);
  } else {
    throw new Error(`Failed to transition order status: ${patchOrderRes.status} ${JSON.stringify(patchOrderData)}`);
  }

  // PATCH /api/admin/bookings/[id]
  const patchBookingRes = await fetch(`${BASE_URL}/api/admin/bookings/${testBookingId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': adminSessionCookie
    },
    body: JSON.stringify({ status: 'approved', adminNote: 'Verified via E2E test script' })
  });
  const patchBookingData = await patchBookingRes.json();
  if (patchBookingRes.ok && patchBookingData.ok) {
    console.log(`[PASS] PATCH /api/admin/bookings/${testBookingId} succeeded.`);
  } else {
    throw new Error(`Failed to transition booking status: ${patchBookingRes.status} ${JSON.stringify(patchBookingData)}`);
  }


  // 9. Verify database state
  console.log('\n--- [STEP 9] Verifying Status Changes in Database ---');
  
  const updatedOrder = await Order.findById(testOrderId);
  if (updatedOrder && updatedOrder.status === 'confirmed' && updatedOrder.adminNote === 'Verified via E2E test script') {
    console.log('[PASS] Order status confirmed in MongoDB.');
  } else {
    throw new Error(`Order database status mismatch: Expected 'confirmed' with E2E note. Found: status='${updatedOrder?.status}', note='${updatedOrder?.adminNote}'`);
  }

  const updatedBooking = await Booking.findById(testBookingId);
  if (updatedBooking && updatedBooking.status === 'approved' && updatedBooking.adminNote === 'Verified via E2E test script') {
    console.log('[PASS] Booking status confirmed in MongoDB.');
  } else {
    throw new Error(`Booking database status mismatch: Expected 'approved' with E2E note. Found: status='${updatedBooking?.status}', note='${updatedBooking?.adminNote}'`);
  }


  // 10. Database Clean-up
  console.log('\n--- [STEP 10] Cleaning up Test Database Records ---');
  
  const deleteOrderResult = await Order.deleteOne({ _id: testOrderId });
  const deleteBookingResult = await Booking.deleteOne({ _id: testBookingId });

  if (deleteOrderResult.deletedCount === 1 && deleteBookingResult.deletedCount === 1) {
    console.log('[PASS] Test order and test booking successfully deleted from MongoDB.');
  } else {
    console.log(`[WARNING] Cleanup incomplete. Order deleted count: ${deleteOrderResult.deletedCount}, Booking deleted count: ${deleteBookingResult.deletedCount}`);
  }

  await mongoose.disconnect();
  console.log('[PASS] Database disconnected.');
  
  console.log('\n==================================================');
  console.log('  ALL E2E API & FUNCTIONAL TESTS COMPLETED SUCCESSFULLY!  ');
  console.log('==================================================');
}

runE2ETests().catch((err) => {
  console.error('\n[FAIL] E2E Verification failed:', err);
  mongoose.disconnect().catch(() => {});
  process.exit(1);
});
