import Link from 'next/link';
import TestimonialForm from '../TestimonialForm';

export const metadata = { title: 'New Testimonial · Admin' };

export default function AdminTestimonialNew() {
  return (
    <div>
      <div className="d-flex align-items-center mb-4 gap-3">
        <Link href="/admin/testimonials" className="btn-outline-custom" style={{ padding: '8px 14px' }}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', margin: 0 }}>Add New Testimonial</h1>
      </div>
      <TestimonialForm />
    </div>
  );
}
