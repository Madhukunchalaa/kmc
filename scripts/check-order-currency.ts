import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  const col = mongoose.connection.db!.collection('orders');
  const orders = await col.find({}).sort({ createdAt: -1 }).limit(10).toArray();
  console.log(`last ${orders.length} orders:\n`);
  for (const o of orders) {
    console.log(`${o.orderNumber} | currency=${o.currency} | international=${o.international} | country=${o.customer?.country} | subtotal=${o.subtotal} total=${o.total} | shipPay=${o.shippingPayment?.status}`);
  }
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
