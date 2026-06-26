import Link from 'next/link';
import ProductForm from '../ProductForm';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'New Product · Admin' };

export default function NewProductPage() {
  return (
    <div>
      <Link href="/admin/products" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>← All products</Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 12 }}>New product</h1>
      <ProductForm />
    </div>
  );
}
