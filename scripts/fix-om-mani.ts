import 'dotenv/config';
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  const Product = mongoose.connection.collection('products');
  
  const images = [
    'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%201',
    'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%202',
    'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%203',
    'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%204'
  ];

  await Product.updateOne(
    { name: 'Om Mani Padme Hum + Pixiu Black Obsidian Bracelet', subcategory: 'Designer Bracelets' },
    { $set: { image: images[0], images: images } }
  );

  console.log('✅ Fixed Om Mani Padme Hum images!');
  await mongoose.disconnect();
}

main().catch(console.error);
