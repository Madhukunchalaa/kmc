import Link from 'next/link';
import { redirect, notFound } from 'next/navigation';
import { auth } from '@/auth';
import { getServiceById } from '@/lib/catalog';
import BookingFlow from './BookingFlow';

export const dynamic = 'force-dynamic';

export default async function BookingPage(props: PageProps<'/booking/[serviceId]'>) {
  const { serviceId } = await props.params;
  const session = await auth();
  if (!session?.user) redirect(`/login?callbackUrl=/booking/${serviceId}`);

  const service = await getServiceById(serviceId);
  if (!service) notFound();

  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '40px', background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}>
        <div className="container">
          <Link href="/services" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>← All services</Link>
          <h1 className="hero-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginTop: 10 }}>
            Book <span className="highlight">{service.title}</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '10px 0 0' }}>
            ₹{service.price.toLocaleString('en-IN')} · {service.durationMins} min
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container" style={{ maxWidth: 820 }}>
          <BookingFlow
            serviceId={service.id}
            servicePrice={service.price}
            serviceTitle={service.title}
            defaultName={session.user.name || ''}
            defaultEmail={session.user.email || ''}
          />
        </div>
      </section>
    </>
  );
}
