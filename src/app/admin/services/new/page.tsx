import Link from 'next/link';
import ServiceForm from '../ServiceForm';

export const metadata = { title: 'New Service · Admin' };

export default function NewServicePage() {
  return (
    <div>
      <Link href="/admin/services" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>← All services</Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 12 }}>New service</h1>
      <ServiceForm />
    </div>
  );
}
