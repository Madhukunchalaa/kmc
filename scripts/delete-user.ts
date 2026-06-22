import dotenv from 'dotenv';
import path from 'path';

// Load Next.js environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.production.local') });
dotenv.config({ path: path.resolve(process.cwd(), 'production.env') });

// Use require to avoid ES6 import hoisting
const { connectMongoose } = require('../src/lib/mongoose');
const { User } = require('../src/models/User');

async function main() {
  console.log('Connecting to database...');
  await connectMongoose();
  
  const emailToDelete = 'madhukunchala0607@gmail.com';
  console.log(`Deleting user with email: ${emailToDelete}...`);
  const result = await User.deleteOne({ email: emailToDelete.toLowerCase().trim() });
  
  console.log(`Deleted ${result.deletedCount} user(s).`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
