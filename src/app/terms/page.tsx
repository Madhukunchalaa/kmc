import PolicyPage from '@/components/PolicyPage';

export const metadata = { title: 'Terms & Conditions · KrissMaagiic Crystals' };

export default function TermsPage() {
  return (
    <PolicyPage eyebrow="Legal" title="Terms &" highlight="Conditions">
      <p>
        Welcome to KrissMaagiic Crystals. By accessing or using our website, purchasing products or services, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <h2>1. General Information</h2>
      <p>
        KrissMaagiic Crystals provides crystals, esoteric products, and spiritual services. 
        All information and services provided are for entertainment and spiritual purposes only and are not a substitute for professional medical, legal, or financial advice.
      </p>

      <h2>2. Payments and Pricing</h2>
      <ul>
        <li>All prices are listed in your selected currency and are subject to change without notice.</li>
        <li>We use secure third-party payment gateways (Razorpay). We do not store your credit card or payment details.</li>
        <li>Full payment must be received before any physical product is shipped or service is rendered.</li>
      </ul>

      <h2>3. Shipping and Delivery</h2>
      <p>
        Please refer to our <a href="/shipping-policy">Shipping Policy</a> for details on dispatch times and delivery estimates. We are not responsible for delays caused by customs or courier services.
      </p>

      <h2>4. Cancellations and Refunds</h2>
      <p>
        Please refer to our <a href="/returns">Cancellation & Refund Policy</a>. Due to the energetic nature of our products and the personalized nature of our services, strict guidelines apply.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on this website, including images, text, logos, and graphics, is the property of KrissMaagiic Crystals and is protected by copyright laws. You may not reproduce, distribute, or use our content without prior written permission.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        KrissMaagiic Crystals shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or services. The use of crystals and spiritual services is at your own discretion.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms & Conditions and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India, with jurisdiction in Hyderabad, Telangana.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about these Terms & Conditions, please contact us at:
        <br />
        <strong>Email:</strong> info@krissmaagiiccrystals.com
        <br />
        <strong>Phone:</strong> +91 80962 23929
        <br />
        <strong>Address:</strong> Hyderabad, Telangana - 500055, India
      </p>
    </PolicyPage>
  );
}
