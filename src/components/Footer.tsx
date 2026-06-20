import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-top-decor mb-3">
          <div className="decor-line"></div>
          <div className="decor-center">
            <i className="fa-solid fa-gem"></i>
          </div>
          <div className="decor-line"></div>
        </div>

        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <img
                src="/site-logo.png"
                alt="KrissMaagiic Crystals"
                className="footer-logo"
              />
              <div>
                <span className="footer-brand-name">Kriss Maagiic Crystals</span>
                <span className="footer-brand-sub">Energised · Authentic · Selected</span>
              </div>
            </div>
            <p className="footer-tagline">
              &ldquo;Guided by Intuition, Curated by Kriss&rdquo; — where every crystal carries a story and every stone is chosen with soul.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/krissmaagiiccrystals/" className="footer-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://www.facebook.com/share/17dNNvnBcT/?mibextid=wwXIfr" className="footer-social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="https://pin.it/YqVn24vHD" className="footer-social-btn" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-pinterest-p" />
              </a>
              <a href="https://youtube.com/@empresstarot3355?si=lei9i1tWehE-N_0C" className="footer-social-btn" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube" />
              </a>
              <a href="https://wa.me/918096223929" className="footer-social-btn" aria-label="Instant Chat" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick Links — desktop only */}
          <div className="col-6 col-lg-2 d-none d-lg-block">
            <h6 className="footer-heading">Navigate</h6>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/crystal-strength">Crystal Guide</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services — desktop only */}
          <div className="col-6 col-lg-2 d-none d-lg-block">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><Link href="/services#tarot">Tarot Readings</Link></li>
              <li><Link href="/services#candle">Candle Spells</Link></li>
              <li><Link href="/services#spelljar">Spell Jars</Link></li>
              <li><Link href="/services#numerology">Numerology</Link></li>
            </ul>
          </div>

          {/* ── Mobile-only: all links in one centered strip ── */}
          <div className="col-12 d-lg-none">
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px 6px',
              padding: '4px 0 8px',
            }}>
              {[
                { label: 'Home',          href: '/' },
                { label: 'Shop',          href: '/shop' },
                { label: 'Services',      href: '/services' },
                { label: 'Crystal Guide', href: '/crystal-strength' },
                { label: 'About',         href: '/about' },
                { label: 'Contact',       href: '/contact' },
                { label: 'Tarot',         href: '/services#tarot' },
                { label: 'Candle Spells', href: '/services#candle' },
                { label: 'Spell Jars',    href: '/services#spelljar' },
                { label: 'Numerology',    href: '/services#numerology' },
              ].map((item, i, arr) => (
                <span key={item.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Link
                    href={item.href}
                    style={{
                      display: 'inline-block',
                      padding: '5px 13px',
                      borderRadius: 30,
                      border: '1px solid rgba(160,98,42,0.35)',
                      background: 'rgba(200,149,108,0.1)',
                      color: '#5C3D2E',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'background 0.18s, color 0.18s, border-color 0.18s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(200,149,108,0.22)';
                      (e.currentTarget as HTMLElement).style.color = '#A0622A';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(160,98,42,0.65)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(200,149,108,0.1)';
                      (e.currentTarget as HTMLElement).style.color = '#5C3D2E';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(160,98,42,0.35)';
                    }}
                  >
                    {item.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <i className="fa-solid fa-diamond" style={{ fontSize: '0.3rem', color: 'rgba(160,98,42,0.55)', flexShrink: 0 }}></i>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <h6 className="footer-heading">Contact Us</h6>
            <ul className="footer-contact">
              <li>
                <i className="fa-solid fa-location-dot" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li>
                <i className="fa-solid fa-phone" />
                <a href="tel:+918096223929">+91 80962 23929</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
                <a href="mailto:krissmaagiicrystals@gmail.com">krissmaagiicrystals@gmail.com</a>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp" />
                <a href="https://wa.me/918096223929" target="_blank" rel="noopener noreferrer">Instant Chat</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2025 KrissMaagiic Crystals. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/shipping-policy">Shipping Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/return-policy">Return Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
