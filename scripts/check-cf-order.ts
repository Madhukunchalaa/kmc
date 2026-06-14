import dotenv from 'dotenv';
import path from 'path';

// Force load .env.production.local (which has the correct production credentials we validated)
dotenv.config({ path: path.resolve(process.cwd(), '.env.production.local') });

const appId = process.env.CASHFREE_APP_ID;
const secret = process.env.CASHFREE_SECRET_KEY;
const env = process.env.CASHFREE_ENV;

const cfOrderId = 'KMC-KMC-MQDQG9GV'; // The merchant order ID
const baseUrl = `https://api.cashfree.com/pg/orders/${cfOrderId}`;

async function checkOrder() {
  try {
    const res = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'x-api-version': '2023-08-01',
        'x-client-id': appId || '',
        'x-client-secret': secret || '',
        'Content-Type': 'application/json'
      }
    });

    const status = res.status;
    const body = await res.json();
    console.log('CF Order Status Check:');
    console.log('Status Code:', status);
    console.log('Body:', JSON.stringify(body, null, 2));
  } catch (error) {
    console.error('Error fetching order status:', error);
  }
}

checkOrder();
