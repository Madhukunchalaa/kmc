import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact · KrissMaagiic Crystals',
  description: 'Reach out to Kriss for crystal guidance, custom orders, or session bookings.',
};

export default function ContactPage() {
  return (
    <>
      <section style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url("/contact-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
      }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Get in Touch
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>
            Talk to <span className="highlight">Kriss</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, margin: '1rem auto 0' }}>
            Have a question about a crystal, a custom order or a session? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section style={{
        background: 'linear-gradient(135deg, #0d0418 0%, #120818 50%, #0a0212 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow orbs */}
        <div style={{ position: 'absolute', top: '20%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,149,108,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(120,60,180,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5 align-items-start">

            {/* LEFT — contact info */}
            <div className="col-lg-5">
              <span style={{
                display: 'inline-block', fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--primary,#C8956C)',
                marginBottom: '1rem', fontFamily: 'var(--font-display)',
              }}>Reach Me Here</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.3,
              }}>
                Let&apos;s <span style={{ color: 'var(--primary,#C8956C)' }}>Connect</span>
              </h2>
              <div style={{ width: 48, height: 2, background: 'var(--primary,#C8956C)', borderRadius: 2, marginBottom: '1.5rem', opacity: 0.6 }} />
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.92rem' }}>
                I personally answer every message. Replies usually arrive within a day — sometimes sooner if the moon is kind.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: 'fa-solid fa-phone', label: 'Phone', value: '+91 80962 23929', href: 'tel:+918096223929' },
                  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'krissmaagiicrystals@gmail.com', href: 'mailto:krissmaagiicrystals@gmail.com' },
                  { icon: 'fa-solid fa-location-dot', label: 'Address', value: 'Hyderabad, Telangana, India', href: '#' },
                  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', value: 'Start a chat', href: 'https://wa.me/918096223929' },
                ].map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', gap: '1.1rem', alignItems: 'center' }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                      background: 'rgba(200,149,108,0.1)',
                      border: '1px solid rgba(200,149,108,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(200,149,108,0.08)',
                      transition: 'all 0.3s ease',
                    }}>
                      <i className={item.icon} style={{ color: 'var(--primary,#C8956C)', fontSize: '1.15rem' }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>{item.label}</p>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', fontWeight: 500 }}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Decorative quote */}
              <div style={{
                marginTop: '3rem', padding: '1.25rem 1.5rem',
                background: 'rgba(200,149,108,0.04)',
                border: '1px solid rgba(200,149,108,0.15)',
                borderLeft: '3px solid var(--primary,#C8956C)',
                borderRadius: '0 12px 12px 0',
              }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  &quot;Every crystal starts with a conversation. Reach out — your stone is waiting.&quot;
                </p>
                <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary,#C8956C)' }}>— Kriss</span>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="col-lg-7">
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}>
                {/* Form header */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary,#C8956C)', boxShadow: '0 0 8px rgba(200,149,108,0.6)' }} />
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--primary,#C8956C)', fontFamily: 'var(--font-display)' }}>Send a Message</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4rem', margin: 0 }}>
                    How can I help you?
                  </h3>
                </div>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
