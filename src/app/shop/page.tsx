import ShopPageClient from './ShopPageClient';
import { getAllProducts } from '@/lib/catalog';

// ISR: Cache page for 60 seconds, then rebuild
export const revalidate = 60;

export const metadata = {
  title: 'Shop · KrissMaagiic Crystals',
  description: 'Handpicked, energised crystals — bracelets, malas, pendants, towers and more.',
};

export default async function ShopPage() {
  const products = await getAllProducts();
  return <ShopPageClient products={products} />;
}
