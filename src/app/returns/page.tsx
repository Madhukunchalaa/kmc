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
      <p>
        Returns and refunds are <strong>only accepted if the product arrives damaged</strong>, and only after the damage is verified by our team.
      </p>
      <ul>
        <li>You must report the damage within 48 hours of delivery and provide an unboxing video/photos for verification.</li>
        <li>Items you received that are completely different from what you ordered.</li>
      </ul>

      <h2>What we can&apos;t accept back</h2>
      <ul>
        <li>Custom or personalised pieces (spell jars, made-to-order bracelets, name-based numerology reports).</li>
        <li>Services that have already been delivered (tarot, candle spells, numerology readings).</li>
        <li>Crystals returned more than <strong>7 days</strong> after delivery, or in used / cleansed condition.</li>
      </ul>

      <h2>Cancellations</h2>
      <p>
        You can cancel your order at any time before it is shipped for a full refund. Once the shipment has been dispatched, we cannot accept cancellations. To request a cancellation, please email us immediately with your order details.
      </p>

      <h2>Refunds Timeline & Method</h2>
      <p>
        If your return (due to transit damage) or cancellation is approved, we will initiate a refund. The refund will be processed and credited back to your original payment method (credit/debit card, UPI, net banking, or wallet) within <strong>5–7 working days</strong>.
      </p>

      <h2>How to request a Return or Cancellation</h2>
      <p>
        To initiate a return (for damaged items) or request an order cancellation before dispatch, please email us at{' '}
        <a href="mailto:krissmaagiicrystals@gmail.com">krissmaagiicrystals@gmail.com</a> with your order number and a brief description. We will guide you through the next steps.
      </p>

      <h2>Non-Refundable Items & Services</h2>
      <p>
        Please note that custom or personalized items (such as spell jars, made-to-order bracelets, name-based numerology reports) and services that have already been rendered/delivered are not eligible for cancellation or refunds once processing has begun.
      </p>
    </PolicyPage>
  );
}
