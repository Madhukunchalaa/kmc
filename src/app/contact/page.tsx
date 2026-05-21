import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact · KrissMaagiic Crystals',
  description: 'Reach out to Kriss for crystal guidance, custom orders, or session bookings.',
};

export default function ContactPage() {
  return (
    <>
      <section style={{ paddingTop: '160px', paddingBottom: '60px', background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}>
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

      <section className="section-pad">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h3 className="footer-heading" style={{ color: 'var(--text,#2D1B0E)' }}>Reach me here</h3>
              <p style={{ color: 'var(--text-light,#666)', marginTop: '1rem', lineHeight: 1.7 }}>
                I personally answer every message. Replies usually arrive within a day — sometimes sooner if the moon is kind.
              </p>

              <div style={{ display: 'grid', gap: '1.25rem', marginTop: '2rem' }}>
                <div className="d-flex gap-3 align-items-start">
                  <div className="service-icon" style={{ width: 48, height: 48, fontSize: '1.1rem' }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <strong>Studio</strong>
                    <p style={{ color: 'var(--text-light,#666)', margin: 0 }}>Hyderabad, Telangana, India</p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="service-icon" style={{ width: 48, height: 48, fontSize: '1.1rem' }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p style={{ margin: 0 }}>
                      <a href="tel:+918096223929" style={{ color: 'var(--text-light,#666)', textDecoration: 'none' }}>+91 80962 23929</a>
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="service-icon" style={{ width: 48, height: 48, fontSize: '1.1rem' }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p style={{ margin: 0 }}>
                      <a href="mailto:krissmaagiicrystals@gmail.com" style={{ color: 'var(--text-light,#666)', textDecoration: 'none' }}>
                        krissmaagiicrystals@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="service-icon" style={{ width: 48, height: 48, fontSize: '1.1rem' }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <strong>WhatsApp</strong>
                    <p style={{ margin: 0 }}>
                      <a
                        href="https://wa.me/918096223929"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-light,#666)', textDecoration: 'none' }}
                      >
                        Start a chat
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div
                style={{
                  background: '#fff',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                }}
              >
                <h3 className="footer-heading" style={{ color: 'var(--text,#2D1B0E)' }}>Send a message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
