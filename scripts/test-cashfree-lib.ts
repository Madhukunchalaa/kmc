import 'dotenv/config'; // Load .env/env.local automatically (dotenv loads .env.local if present in some configs, or we can configure it)
import dotenv from 'dotenv';
import path from 'path';

// Force load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { createCashfreeOrder, isCashfreeConfigured } from '../src/lib/cashfree';

async function testLib() {
  console.log('Is Cashfree configured?', isCashfreeConfigured());
  console.log('App ID:', process.env.CASHFREE_APP_ID ? 'SET' : 'NOT SET');
  console.log('Env:', process.env.CASHFREE_ENV);

  try {
    const result = await createCashfreeOrder({
      orderId: `test_lib_${Date.now()}`,
      amount: 2.00,
      customerId: 'test_lib_customer',
      customerName: 'Test Library Customer',
      customerEmail: 'test@example.com',
      customerPhone: '9876543210',
      returnUrl: 'https://example.com/return'
    });

    console.log('\nSUCCESS! createCashfreeOrder returned:');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('\nFAILED during createCashfreeOrder execution:', error);
  }
}

testLib();
