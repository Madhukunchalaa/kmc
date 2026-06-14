import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import mongoose from 'mongoose';
import { Order } from '../src/models/Order';

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  console.log('Connected to MongoDB.');

  const order = await Order.findOne({ orderNumber: 'KMC-MQDT69U2' }).lean();
  if (!order) {
    console.error('Order not found!');
    await mongoose.disconnect();
    return;
  }

  console.log('Order found:', order.orderNumber);
  console.log('Items:', JSON.stringify(order.items, null, 2));

  await mongoose.disconnect();
}

main().catch(console.error);
