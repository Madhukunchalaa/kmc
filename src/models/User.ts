import mongoose, { Schema, models, model, Model } from 'mongoose';

export interface UserDoc {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone?: string;
  passwordHash?: string; // Optional now, since OTP takes over
  role: 'user' | 'admin';
  active: boolean;
  country?: string;
  otp?: string | null;
  otpExpires?: Date | null;
  resetToken?: string | null;
  resetTokenExpires?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDoc>(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    phone: { type: String, trim: true, maxlength: 30 },
    passwordHash: { type: String }, // No longer strictly required if they log in via OTP
    role: { type: String, enum: ['user', 'admin'], default: 'user', index: true },
    active: { type: Boolean, default: true },
    country: { type: String, trim: true },
    otp: { type: String, default: null },
    otpExpires: { type: Date, default: null },
    resetToken: { type: String, default: null },
    resetTokenExpires: { type: Date, default: null },
  },
  { timestamps: true },
);

// Hot query: login by email+active
UserSchema.index({ email: 1, active: 1 });
// Hot query: password reset lookup
UserSchema.index({ resetToken: 1 });

export const User: Model<UserDoc> =
  (models.User as Model<UserDoc>) || model<UserDoc>('User', UserSchema);
