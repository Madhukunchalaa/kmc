import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import ProfileForm from './ProfileForm';
import PasswordForm from './PasswordForm';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'My Profile' };

export default async function ProfilePage() {
  const session = (await auth())!;
  await connectMongoose();
  const user = await User.findById(session.user.id).lean();
  if (!user) return null;

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 0 }}>My Profile</h1>
      <div className="row g-4">
        <div className="col-lg-6">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Personal details</h4>
            <ProfileForm initial={{ name: user.name, phone: user.phone || '', email: user.email, country: user.country || 'IN' }} />
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Change password</h4>
            <PasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
}
