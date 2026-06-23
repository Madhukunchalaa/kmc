import mongoose, { Schema, models, model, Model } from 'mongoose';

export interface SettingDoc {
  key: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

const SettingSchema = new Schema<SettingDoc>(
  {
    key: { type: String, required: true, unique: true, index: true },
    value: { type: String, required: true },
  },
  { timestamps: true },
);

export const Setting: Model<SettingDoc> =
  (models.Setting as Model<SettingDoc>) || model<SettingDoc>('Setting', SettingSchema);
