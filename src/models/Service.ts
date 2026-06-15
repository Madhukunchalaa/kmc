import mongoose, { Schema, models, model, Model } from 'mongoose';

export interface ServiceTier {
  label: string;
  price: number;
  usdPrice?: number;
}

export interface ServiceDoc {
  _id: mongoose.Types.ObjectId;
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: string;
  price: number;
  usdPrice?: number;
  durationMins: number;
  bullets: string[];
  tiers: ServiceTier[];
  active: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<ServiceDoc>(
  {
    slug: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    title: { type: String, required: true, trim: true },
    tagline: { type: String, default: '' },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    icon: { type: String, default: 'fa-solid fa-sparkles' },
    price: { type: Number, required: true, min: 0 },
    usdPrice: { type: Number, default: 0 },
    durationMins: { type: Number, default: 30 },
    bullets: { type: [String], default: [] },
    tiers: {
      type: [{ label: String, price: Number, usdPrice: Number }],
      default: [],
    },
    active: { type: Boolean, default: true, index: true },
    isDeleted: { type: Boolean, default: false, index: true },
  },
  { timestamps: true },
);

export const Service: Model<ServiceDoc> =
  (models.Service as Model<ServiceDoc>) || model<ServiceDoc>('Service', ServiceSchema);
