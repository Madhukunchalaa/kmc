import 'dotenv/config';
import mongoose from 'mongoose';
const P = mongoose.model('Product', new mongoose.Schema({slug:String,name:String,subcategory:String,price:Number,usdPrice:Number,images:[String]}));
async function main(){
  await mongoose.connect(process.env.MONGODB_URI!);
  const all = await P.find({subcategory:'Designer Bracelets'},{name:1,price:1,usdPrice:1,images:1}).lean();
  all.forEach((p:any)=>console.log(`${p.name} | ₹${p.price} | $${p.usdPrice} | ${p.images?.length||0} imgs`));
  console.log('\nTotal:',all.length);
  await mongoose.disconnect();
}
main().catch(console.error);
