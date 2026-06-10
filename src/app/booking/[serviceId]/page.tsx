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
      <section style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url("/services-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
      }}>
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

      <section style={{
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 20%, #0d041a 0%, #06020c 60%, #010003 100%)',
        borderTop: '1px solid rgba(200,149,108,0.15)',
        width: '100%',
        display: 'block',
        boxSizing: 'border-box'
      }}>
        {/* Galaxy layers */}
        <div className="galaxy-stars-wrapper">
          <div className="galaxy-nebula nebula-purple"></div>
          <div className="galaxy-nebula nebula-blue"></div>
          <div className="space-stars stars-small"></div>
          <div className="space-stars stars-medium"></div>
          <div className="space-stars stars-large"></div>
          <div className="celestial-orbit-1"></div>
          <div className="celestial-orbit-2"></div>
          <div className="svc-planet svc-planet--1"><div className="svc-planet__ring"></div></div>
          <div className="svc-planet svc-planet--2"></div>
          <div className="svc-planet svc-planet--4"></div>
          <div className="svc-planet svc-planet--5"></div>
          <div className="svc-asteroid svc-asteroid--2"></div>
          <div className="svc-asteroid svc-asteroid--4"></div>
          <div className="svc-asteroid svc-asteroid--6"></div>
          <div className="svc-asteroid svc-asteroid--9"></div>
        </div>

        <div style={{ maxWidth: '820px', width: '100%', padding: '0 15px', marginLeft: 'auto', marginRight: 'auto', boxSizing: 'border-box', position: 'relative', zIndex: 2 }}>
          <BookingFlow
            serviceId={service.id}
            servicePrice={service.price}
            serviceTitle={service.title}
            tiers={service.tiers}
            defaultName={session.user.name || ''}
            defaultEmail={session.user.email || ''}
          />
        </div>
      </section>

    </>
  );
}
