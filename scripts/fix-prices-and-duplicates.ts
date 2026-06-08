/**
 * fix-prices-and-duplicates.ts
 * 1. Updates prices for Moonstone and Multi-Fluorite.
 * 2. Deletes duplicate older entries for Jade and Om Mani Padme Hum + Pixiu Black Obsidian.
 */
import 'dotenv/config';
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  const Product = mongoose.connection.collection('products');
  
  console.log('🔄 Fixing Prices...');
  const res1 = await Product.updateOne(
    { name: /Moonstone Bracelet \(White Moonstone\)/i },
    { $set: { price: 1450, usdPrice: 28 } }
  );
  console.log(`  Moonstone updated: ${res1.modifiedCount}`);

  const res2 = await Product.updateOne(
    { name: /Multi-Fluorite Bracelet \(Rainbow Fluorite\)/i },
    { $set: { price: 1450, usdPrice: 28 } }
  );
  console.log(`  Multi-Fluorite updated: ${res2.modifiedCount}`);

  console.log('\n🧹 Removing Duplicates...');
  // Find all Jade Bracelets
  const jades = await Product.find({ name: 'Jade Bracelet', subcategory: 'Designer Bracelets' }).sort({ createdAt: 1 }).toArray();
  if (jades.length > 1) {
    // Keep the latest one, delete the older one(s)
    const toDelete = jades.slice(0, jades.length - 1);
    for (const doc of toDelete) {
      await Product.deleteOne({ _id: doc._id });
      console.log(`  Deleted old Jade Bracelet (slug: ${doc.slug})`);
    }
  }

  // Find all Om Mani Padme Hum + Pixiu Black Obsidian Bracelets
  const pixius = await Product.find({ name: 'Om Mani Padme Hum + Pixiu Black Obsidian Bracelet', subcategory: 'Designer Bracelets' }).sort({ createdAt: 1 }).toArray();
  if (pixius.length > 1) {
    const toDelete = pixius.slice(0, pixius.length - 1);
    for (const doc of toDelete) {
      await Product.deleteOne({ _id: doc._id });
      console.log(`  Deleted old Pixiu Black Obsidian Bracelet (slug: ${doc.slug})`);
    }
  }

  console.log('\n✅ Fixes Applied! Checking 3 random products to verify...');
  const sample = await Product.find({}).limit(3).toArray();
  for (const doc of sample) {
    console.log(`  Name: ${doc.name}`);
    console.log(`  Price: ₹${doc.price}`);
    console.log(`  Image: ${doc.image}`);
    console.log('  ---');
  }

  await mongoose.disconnect();
}

main().catch(console.error);
