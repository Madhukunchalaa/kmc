import ShopPageClient from './ShopPageClient';
import { getAllProducts } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Shop · KrissMaagiic Crystals',
  description: 'Handpicked, energised crystals — bracelets, malas, pendants, towers and more.',
};

export default async function ShopPage() {
  const products = await getAllProducts();
  return <ShopPageClient products={products} />;
}
