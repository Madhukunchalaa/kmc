import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectMongoose } from '@/lib/mongoose';
import { Service } from '@/models/Service';
import HomeServiceForm from '../HomeServiceForm';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Edit Homepage Service · Admin' };

const PATHS = ['PATH I', 'PATH II', 'PATH III', 'PATH IV', 'PATH V'];

export default async function EditHomeServicePage(props: PageProps<'/admin/home-services/[id]'>) {
  const { id } = await props.params;
  await connectMongoose();
  
  // Find all active services to determine the correct path label
  const allServices = await Service.find({ active: true, isDeleted: { $ne: true } })
    .sort({ createdAt: 1 })
    .lean();
    
  const idx = allServices.findIndex((s) => String(s._id) === id);
  if (idx === -1) notFound();
  
  const s = allServices[idx];
  const pathLabel = PATHS[idx] ?? `PATH ${idx + 1}`;

  return (
    <div>
      <Link href="/admin/home-services" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', textDecoration: 'none' }}>
        ← All Homepage Cards
      </Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 12 }}>
        Edit Homepage Pathway Card
      </h1>
      <HomeServiceForm
        id={String(s._id)}
        pathLabel={pathLabel}
        initial={{
          slug: s.slug,
          title: s.title,
          tagline: s.tagline || '',
          desc: s.desc || '',
          image: s.image || '',
          icon: s.icon || 'fa-solid fa-sparkles',
          price: s.price,
          usdPrice: (s as any).usdPrice ?? 0,
          durationMins: s.durationMins || 30,
          bullets: s.bullets || [],
          tiers: ((s as any).tiers ?? []).map((t: any) => ({
            label: t.label,
            price: t.price,
            usdPrice: t.usdPrice ?? 0,
          })),
          active: s.active ?? true,
        }}
      />
    </div>
  );
}
