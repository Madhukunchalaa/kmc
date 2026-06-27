import PolicyPage from '@/components/PolicyPage';

export const metadata = { title: 'Privacy Policy · KrissMaagiic Crystals' };

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage eyebrow="Your Trust Matters" title="Privacy" highlight="Policy">
      <p><em>Last updated: 1 May 2026</em></p>

      <h2>What we collect</h2>
      <p>When you shop, book a session or contact us, we collect only what we need to serve you:</p>
      <ul>
        <li>Your name, email, phone and shipping address (orders & contact form)</li>
        <li>Order details and notes you share with us</li>
        <li>A small anonymous cookie (<code>kmc_sid</code>) that remembers your cart between visits</li>
        <li>Standard server logs (IP, browser, time) for security and debugging</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To fulfil your order and arrange shipping</li>
        <li>To reply to your queries and book your sessions</li>
        <li>To send occasional updates if you opt in to our newsletter</li>
        <li>To prevent fraud and keep our site secure</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        We never sell your data. We share details only with the shipping partner who delivers your order and with the payment platform we route your transaction through.
      </p>


      <h2>Cookies</h2>
      <p>
        We use a single first-party cookie to remember your cart. We do not use third-party advertising trackers.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Reach us at{' '}
        <a href="mailto:info@krissmaagiiccrystals.com">info@krissmaagiiccrystals.com</a> or on{' '}
        <a href="https://wa.me/918096223929" target="_blank" rel="noreferrer">WhatsApp</a>.
      </p>
    </PolicyPage>
  );
}
