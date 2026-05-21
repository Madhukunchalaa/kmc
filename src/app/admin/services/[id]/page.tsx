import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectMongoose } from '@/lib/mongoose';
import { Service } from '@/models/Service';
import ServiceForm from '../ServiceForm';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Edit Service · Admin' };

export default async function EditServicePage(props: PageProps<'/admin/services/[id]'>) {
  const { id } = await props.params;
  await connectMongoose();
  const s = await Service.findById(id).lean();
  if (!s) notFound();
  return (
    <div>
      <Link href="/admin/services" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>← All services</Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 12 }}>Edit service</h1>
      <ServiceForm
        id={String(s._id)}
        initial={{
          slug: s.slug, title: s.title, tagline: s.tagline, desc: s.desc, image: s.image,
          icon: s.icon, price: s.price, durationMins: s.durationMins, bullets: s.bullets, active: s.active,
        }}
      />
    </div>
  );
}
