import Link from 'next/link';
import AuthShell from '@/components/AuthShell';
import ForgotForm from './ForgotForm';

export const metadata = { title: 'Forgot Password · KrissMaagiic Crystals' };

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      eyebrow="Account Recovery"
      title="Forgot your"
      highlight="password?"
      subtitle="Enter your email and we'll send a reset link."
      footer={
        <>
          Remembered it?{' '}
          <Link href="/login" style={{ color: 'var(--gold-light,#E8C99A)' }}>
            Back to sign in
          </Link>
        </>
      }
    >
      <ForgotForm />
    </AuthShell>
  );
}
