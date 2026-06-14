import PolicyPage from '@/components/PolicyPage';

export const metadata = { title: 'Shipping Policy · KrissMaagiic Crystals' };

export default function ShippingPolicyPage() {
  return (
    <PolicyPage eyebrow="Shipping & Delivery" title="Shipping" highlight="Policy">
      <h2>Where we ship</h2>
      <p>We ship pan-India from Hyderabad, Telangana. For international orders, please reach out on WhatsApp for a custom quote.</p>

      <h2>Processing time</h2>
      <p>
        Most ready-stock crystals dispatch within <strong>2–3 business days</strong> of confirmed payment. Custom pieces (spell jars, personalised bracelets) take <strong>5–7 days</strong> to craft.
      </p>

      <h2>Delivery time</h2>
      <ul>
        <li>Metros (Hyderabad, Bangalore, Mumbai, Delhi, Chennai): <strong>3–5 business days</strong></li>
        <li>Rest of India: <strong>5–8 business days</strong></li>
        <li>Remote pincodes may take an extra 2–3 days.</li>
      </ul>

      <h2>Shipping charges</h2>
      <p>
        Shipping is calculated based on weight and destination, and confirmed before payment. Orders above ₹3,000 usually ship free within India.
      </p>

      <h2>Tracking</h2>
      <p>
        Once your order is dispatched, you&apos;ll receive a tracking link by WhatsApp or email. Most shipments are sent via reputable couriers like Delhivery, BlueDart, DTDC, or India Post.
      </p>

      <h2>If your package is delayed or damaged</h2>
      <p>
        Crystals are packed with care, but if your package arrives damaged, please share unboxing photos within <strong>48 hours</strong> of delivery at{' '}
        <a href="mailto:krissmaagiicrystals@gmail.com">krissmaagiicrystals@gmail.com</a> so we can sort it out for you.
      </p>
    </PolicyPage>
  );
}
