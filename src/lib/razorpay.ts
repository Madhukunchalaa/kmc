import crypto from 'crypto';
import Razorpay from 'razorpay';

export function isRazorpayConfigured(): boolean {
  return Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
}

export function getRazorpayKeyId(): string | null {
  return process.env.RAZORPAY_KEY_ID ?? null;
}

export function getRazorpayClient(): Razorpay | null {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) return null;
  return new Razorpay({ key_id, key_secret });
}

export function verifyPaymentSignature(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  signature: string,
): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) return false;
  const body = `${razorpayOrderId}|${razorpayPaymentId}`;
  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex');
  return expected === signature;
}

export function verifyRazorpayWebhook(
  rawBody: string,
  signature: string,
): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return false;
  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  return expected === signature;
}


/** Razorpay expects amount in paise (INR × 100). */
export function toPaise(amountInr: number): number {
  return Math.round(amountInr * 100);
}

export async function getRazorpayOrderStatus(
  razorpayOrderId: string,
): Promise<{ orderStatus: string; razorpayPaymentId?: string }> {
  const client = getRazorpayClient();
  if (!client) throw new Error('Razorpay client not configured');

  const order = await client.orders.fetch(razorpayOrderId);
  
  let razorpayPaymentId: string | undefined;
  if (order.status === 'paid') {
    try {
      const response = await client.orders.fetchPayments(razorpayOrderId);
      const payments = Array.isArray(response) ? response : (response?.items || []);
      const successfulPayment = payments.find(
        (p: any) => p.status === 'captured'
      );
      if (successfulPayment) {
        razorpayPaymentId = successfulPayment.id;
      }
    } catch (err) {
      console.error(`Failed to fetch payments for Razorpay order ${razorpayOrderId}:`, err);
    }
  }

  return {
    orderStatus: order.status, // 'created' | 'attempted' | 'paid'
    razorpayPaymentId,
  };
}

export function getActivePaymentGateway(): 'razorpay' | 'cashfree' {
  const envGateway = process.env.NEXT_PUBLIC_PAYMENT_GATEWAY || process.env.PAYMENT_GATEWAY;
  if (envGateway === 'razorpay') return 'razorpay';
  if (envGateway === 'cashfree') return 'cashfree';

  if (isRazorpayConfigured()) return 'razorpay';
  return 'cashfree';
}


