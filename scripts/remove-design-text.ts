/**
 * remove-design-text.ts
 * Removes the text " - Design X" or " – Design X" from product names in MongoDB.
 */
import 'dotenv/config';
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  const Product = mongoose.connection.collection('products');
  
  console.log('🔄 Removing "Design 1 / 2" from product names...');
  
  const docs = await Product.find({ name: /Design [12]/i }).toArray();
  let updatedCount = 0;

  for (const doc of docs) {
    // Matches " - Design 1", " – Design 1", " Design 1"
    const newName = doc.name.replace(/\s*[-–]?\s*Design [12]/i, '').trim();
    
    if (newName !== doc.name) {
      await Product.updateOne({ _id: doc._id }, { $set: { name: newName } });
      console.log(`  Updated: "${doc.name}" -> "${newName}"`);
      updatedCount++;
    }
  }

  console.log(`\n✅ Done! Removed design text from ${updatedCount} products.`);
  await mongoose.disconnect();
}

main().catch(console.error);
