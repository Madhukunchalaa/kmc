/**
 * fix-db-urls.ts
 * Fixes URL-encoded slashes (%2F) in MongoDB image URLs.
 */
import 'dotenv/config';
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  const Product = mongoose.connection.collection('products');
  
  const docs = await Product.find({}).toArray();
  let fixedCount = 0;

  for (const doc of docs) {
    let changed = false;
    
    // Fix main image
    let newImage = doc.image;
    if (newImage && newImage.includes('%2F')) {
      newImage = newImage.replace(/%2F/g, '/');
      changed = true;
    }

    // Fix images array
    let newImages = doc.images || [];
    const updatedImages = newImages.map((img: string) => {
      if (img && img.includes('%2F')) {
        changed = true;
        return img.replace(/%2F/g, '/');
      }
      return img;
    });

    if (changed) {
      await Product.updateOne({ _id: doc._id }, { $set: { image: newImage, images: updatedImages } });
      fixedCount++;
      console.log(`Fixed URL for: ${doc.name}`);
    }
  }

  console.log(`\n🎉 Done! Fixed ${fixedCount} products.`);
  await mongoose.disconnect();
}

main().catch(console.error);
