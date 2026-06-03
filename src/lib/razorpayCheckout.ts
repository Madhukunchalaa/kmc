export interface RazorpayCheckoutResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface OpenRazorpayCheckoutParams {
  keyId: string;
  amount: number;
  currency: string;
  razorpayOrderId: string;
  orderNumber: string;
  name: string;
  email: string;
  phone: string;
  description?: string;
}

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: (response: RazorpayCheckoutResponse) => void) => void;
    };
  }
}

const SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';

let scriptPromise: Promise<void> | null = null;

function loadRazorpayScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('browser-only'));
  if (window.Razorpay) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('razorpay-script-failed')));
      return;
    }
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('razorpay-script-failed'));
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export async function openRazorpayCheckout(
  params: OpenRazorpayCheckoutParams,
): Promise<RazorpayCheckoutResponse> {
  await loadRazorpayScript();
  if (!window.Razorpay) throw new Error('razorpay-unavailable');

  return new Promise((resolve, reject) => {
    const rzp = new window.Razorpay!({
      key: params.keyId,
      amount: params.amount,
      currency: params.currency,
      name: 'KrissMaagiic Crystals',
      description: params.description ?? `Order ${params.orderNumber}`,
      order_id: params.razorpayOrderId,
      prefill: {
        name: params.name,
        email: params.email,
        contact: params.phone,
      },
      theme: { color: '#C8956C' },
      handler: (response: RazorpayCheckoutResponse) => resolve(response),
      modal: {
        ondismiss: () => reject(new Error('payment-cancelled')),
      },
    });
    rzp.open();
  });
}
