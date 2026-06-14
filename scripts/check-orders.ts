import 'dotenv/config';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  const OrderSchema = new mongoose.Schema({}, { strict: false });
  const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

  const latestOrders = await Order.find().sort({ createdAt: -1 }).limit(5).lean();
  console.log('--- LATEST 5 ORDERS ---');
  latestOrders.forEach((o: any) => {
    console.log(`Order Number: ${o.orderNumber}`);
    console.log(`Amount: ${o.subtotal}`);
    console.log(`Status: ${o.status}`);
    console.log(`Payment Status: ${o.paymentStatus}`);
    console.log(`CF Order ID: ${o.cfOrderId}`);
    console.log(`CF Payment ID: ${o.cfPaymentId}`);
    console.log(`Created At: ${o.createdAt}`);
    console.log('---------------------');
  });

  await mongoose.disconnect();
}

main().catch(console.error);
