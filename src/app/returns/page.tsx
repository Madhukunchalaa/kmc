import PolicyPage from '@/components/PolicyPage';

export const metadata = { title: 'Returns & Refunds · KrissMaagiic Crystals' };

export default function ReturnsPage() {
  return (
    <PolicyPage eyebrow="Returns & Refunds" title="Returns" highlight="Policy">
      <h2>Our approach</h2>
      <p>
        Every crystal is intuitively selected and energetically prepared for its new home. Because of the personal, energetic nature of our products, we follow a careful — but caring — return policy.
      </p>

      <h2>What you can return</h2>
      <ul>
        <li>Items that arrive <strong>damaged or broken</strong> in transit (report within 48 hours with unboxing photos).</li>
        <li>Items you received that are <strong>different from what you ordered</strong>.</li>
      </ul>

      <h2>What we can&apos;t accept back</h2>
      <ul>
        <li>Custom or personalised pieces (spell jars, made-to-order bracelets, name-based numerology reports).</li>
        <li>Services that have already been delivered (tarot, candle spells, numerology readings).</li>
        <li>Crystals returned more than <strong>7 days</strong> after delivery, or in used / cleansed condition.</li>
      </ul>

      <h2>How to start a return</h2>
      <p>
        Email{' '}
        <a href="mailto:krissmaagiicrystals@gmail.com">krissmaagiicrystals@gmail.com</a> with your order number and a short description. We&apos;ll send a return address and walk you through it.
      </p>

      <h2>Refunds</h2>
      <p>
        Once we receive and inspect the returned item, refunds are processed within <strong>5–7 business days</strong> to the original payment method. Original shipping is non-refundable unless the return is due to our error.
      </p>

      <h2>Exchanges</h2>
      <p>
        Prefer a different crystal? Let us know — we&apos;re happy to arrange an exchange whenever possible, subject to availability.
      </p>
    </PolicyPage>
  );
}
