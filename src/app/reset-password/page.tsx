import { Suspense } from 'react';
import AuthShell from '@/components/AuthShell';
import ResetForm from './ResetForm';

export const metadata = { title: 'Reset Password · KrissMaagiic Crystals' };

export default function ResetPasswordPage() {
  return (
    <AuthShell eyebrow="Account Recovery" title="Set a new" highlight="password">
      <Suspense fallback={<p style={{ color: '#888' }}>Loading…</p>}>
        <ResetForm />
      </Suspense>
    </AuthShell>
  );
}
