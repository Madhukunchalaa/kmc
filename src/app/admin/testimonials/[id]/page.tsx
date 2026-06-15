import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectMongoose } from '@/lib/mongoose';
import Testimonial from '@/models/Testimonial';
import TestimonialForm from '../TestimonialForm';

export const metadata = { title: 'Edit Testimonial · Admin' };

export default async function AdminTestimonialEdit(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  await connectMongoose();
  const doc = await Testimonial.findById(params.id).lean();
  if (!doc) return notFound();

  const initial = {
    name: doc.name,
    role: doc.role,
    rating: doc.rating,
    text: doc.text,
    avatar: doc.avatar,
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-4 gap-3">
        <Link href="/admin/testimonials" className="btn-outline-custom" style={{ padding: '8px 14px' }}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', margin: 0 }}>Edit Testimonial</h1>
      </div>
      <TestimonialForm id={params.id} initial={initial} />
    </div>
  );
}
