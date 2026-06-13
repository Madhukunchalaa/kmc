import mongoose, { Schema, models, model, Model } from 'mongoose';

export interface RegistrationOtpDoc {
  email: string;
  otp: string;
  expires: Date;
}

const RegistrationOtpSchema = new Schema<RegistrationOtpDoc>(
  {
    email: { type: String, required: true, index: true },
    otp: { type: String, required: true },
    expires: { type: Date, required: true, expires: 0 },
  },
  { timestamps: true }
);

export const RegistrationOtp: Model<RegistrationOtpDoc> =
  (models.RegistrationOtp as Model<RegistrationOtpDoc>) ||
  model<RegistrationOtpDoc>('RegistrationOtp', RegistrationOtpSchema);
