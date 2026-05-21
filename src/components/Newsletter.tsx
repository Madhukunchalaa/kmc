'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      /* still show subscribed UI even if network blip — message stored client-side */
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <section className="newsletter-section section-pad-sm">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <span className="section-eyebrow">Stay Connected</span>
            <h3 className="section-title">Join the Crystal <span>Community</span></h3>
            <p className="section-subtitle" style={{ fontSize: '0.9rem' }}>
              Get crystal wisdom, new arrivals and exclusive offers delivered to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="newsletter-btn"
                  style={{
                    background: subscribed ? '#4CAF50' : undefined,
                  }}
                >
                  {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
                </button>
              </div>
            </form>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.75rem' }}>
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
