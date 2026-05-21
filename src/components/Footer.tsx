import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-brand d-flex align-items-center gap-3 mb-3">
              <img
                src="https://krissmaagiiccrystals.com/wp-content/uploads/2026/01/site-logo.webp"
                alt="KrissMaagiic Crystals Logo"
                className="navbar-logo-img"
                style={{ width: '56px', height: '56px' }}
              />
              <div>
                <span className="navbar-brand-main">KrissMaagiic Crystals</span>
                <span className="navbar-brand-sub">Energised · Authentic · Selected</span>
              </div>
            </div>
            <p className="footer-tagline">
              &quot;Guided by Intuition, Curated by Kriss&quot; — where every crystal carries a story and every stone is chosen with soul.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-btn" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="social-btn" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
              <a href="https://wa.me/918096223929" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><Link href="/"><i className="fa-solid fa-chevron-right"></i> Home</Link></li>
              <li><Link href="/shop"><i className="fa-solid fa-chevron-right"></i> Shop</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right"></i> Services</Link></li>
              <li><Link href="/crystal-strength"><i className="fa-solid fa-chevron-right"></i> Crystal Guide</Link></li>
              <li><Link href="/about"><i className="fa-solid fa-chevron-right"></i> About</Link></li>
              <li><Link href="/contact"><i className="fa-solid fa-chevron-right"></i> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><Link href="/services#tarot"><i className="fa-solid fa-chevron-right"></i> Tarot Readings</Link></li>
              <li><Link href="/services#candle"><i className="fa-solid fa-chevron-right"></i> Candle Spells</Link></li>
              <li><Link href="/services#spelljar"><i className="fa-solid fa-chevron-right"></i> Spell Jars</Link></li>
              <li><Link href="/services#numerology"><i className="fa-solid fa-chevron-right"></i> Numerology</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <h6 className="footer-heading">Contact Us</h6>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Hyderabad, Telangana, India</span>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+918096223929" style={{ color: 'rgba(255,255,255,0.55)' }}>+91 80962 23929</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:krissmaagiicrystals@gmail.com" style={{ color: 'rgba(255,255,255,0.55)' }}>
                krissmaagiicrystals@gmail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-brands fa-whatsapp"></i>
              <a
                href="https://wa.me/918096223929"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 KrissMaagiic Crystals. All rights reserved.</p>
          <div className="d-flex gap-3">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/shipping-policy">Shipping Policy</Link>
            <Link href="/returns">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
