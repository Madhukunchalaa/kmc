import dotenv from 'dotenv';
import path from 'path';

// Force load .env.production.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.production.local') });

const appId = process.env.CASHFREE_APP_ID;
const secret = process.env.CASHFREE_SECRET_KEY;
const env = process.env.CASHFREE_ENV;

console.log('Testing with Live Production Credentials:');
console.log('AppId:', appId ? `${appId.substring(0, 8)}... (length: ${appId.length})` : 'NOT SET');
console.log('Secret:', secret ? `${secret.substring(0, 25)}... (length: ${secret.length})` : 'NOT SET');
console.log('Env:', env);

const baseUrl = 'https://api.cashfree.com/pg/orders';

async function testAuth() {
  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'x-api-version': '2023-08-01',
        'x-client-id': appId || '',
        'x-client-secret': secret || '',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_id: `test_direct_prod_${Date.now()}`,
        order_amount: 1.00,
        order_currency: 'INR',
        customer_details: {
          customer_id: 'test_prod_direct_user',
          customer_phone: '9999999999'
        }
      })
    });

    const status = res.status;
    const body = await res.json();
    console.log('\nResponse status:', status);
    console.log('Response body:', JSON.stringify(body, null, 2));

    if (res.ok) {
      console.log('\nSUCCESS! Production credentials are fully authenticated & valid.');
    } else {
      console.log('\nFAILED! Check the error details above.');
    }
  } catch (error) {
    console.error('Network or system error:', error);
  }
}

testAuth();
