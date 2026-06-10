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
                <span className="footer-brand-name">KrissMaagiic Crystals</span>
                <span className="footer-brand-sub">Energised · Authentic · Selected</span>
              </div>
            </div>
            <p className="footer-tagline">
              &ldquo;Guided by Intuition, Curated by Kriss&rdquo; — where every crystal carries a story and every stone is chosen with soul.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" className="footer-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
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
                <i className="fa-solid fa-comments" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
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

          {/* Services */}
          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><Link href="/services#tarot">Tarot Readings</Link></li>
              <li><Link href="/services#candle">Candle Spells</Link></li>
              <li><Link href="/services#spelljar">Spell Jars</Link></li>
              <li><Link href="/services#numerology">Numerology</Link></li>
            </ul>
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
                <i className="fa-solid fa-comments" />
                <a href="https://wa.me/918096223929" target="_blank" rel="noopener noreferrer">Instant Chat</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2025 KrissMaagiic Crystals. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/shipping-policy">Shipping Policy</Link>
            <Link href="/returns">Returns</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
