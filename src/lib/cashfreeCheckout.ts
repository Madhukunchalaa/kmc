'use client';

export interface CashfreeCheckoutParams {
  paymentSessionId: string;
  orderId: string;       // our internal reference
  mode?: 'production' | 'sandbox';
}

export interface CashfreeCheckoutResult {
  paymentDetails?: {
    paymentMessage: string;
  };
  error?: {
    message: string;
    type?: string;
  };
  redirect?: boolean;
}

declare global {
  interface Window {
    // Cashfree SDK loaded via CDN script
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cashfree?: any;
  }
}

const CF_SDK_URL = 'https://sdk.cashfree.com/js/v3/cashfree.js';

let sdkPromise: Promise<void> | null = null;

function loadCashfreeScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('browser-only'));
  if (window.Cashfree) return Promise.resolve();
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${CF_SDK_URL}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('cashfree-script-failed')));
      return;
    }
    const script = document.createElement('script');
    script.src = CF_SDK_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('cashfree-script-failed'));
    document.body.appendChild(script);
  });

  return sdkPromise;
}

/**
 * Opens the Cashfree Drop-in modal.
 * Resolves on success (paymentDetails present), rejects on cancellation or error.
 */
export async function openCashfreeCheckout(
  params: CashfreeCheckoutParams,
): Promise<CashfreeCheckoutResult> {
  await loadCashfreeScript();

  const mode = params.mode || (process.env.NEXT_PUBLIC_CASHFREE_ENV === 'production' ? 'production' : 'sandbox');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cashfree = (window as any).Cashfree({ mode });

  return new Promise((resolve, reject) => {
    const checkoutOptions = {
      paymentSessionId: params.paymentSessionId,
      redirectTarget: '_modal',
    };

    cashfree
      .checkout(checkoutOptions)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((result: CashfreeCheckoutResult) => {
        if (result.error) {
          if (
            result.error.type === 'payment_cancelled' ||
            result.error.message?.toLowerCase().includes('cancel')
          ) {
            reject(new Error('payment-cancelled'));
          } else {
            reject(new Error(result.error.message ?? 'cashfree-error'));
          }
        } else {
          resolve(result);
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => reject(err));
  });
}
