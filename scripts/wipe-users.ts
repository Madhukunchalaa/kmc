import 'dotenv/config';
import { connectMongoose } from '../src/lib/mongoose';
import { User } from '../src/models/User';

async function main() {
  console.log('Connecting to database...');
  await connectMongoose();
  
  console.log('Wiping non-admin users...');
  const result = await User.deleteMany({ role: { $ne: 'admin' } });
  
  console.log(`Deleted ${result.deletedCount} non-admin users.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
