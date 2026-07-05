import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGiftingRecipient extends Document {
  key: string;
  label: string;
  subtitle: string;
  icon: string;
  tagline: string;
  keywords: string[];
  productSlugs: string[];
  fallback: string;
  color: string;
  bg: string;
  order: number;
}

const GiftingRecipientSchema = new Schema<IGiftingRecipient>(
  {
    key:      { type: String, required: true, unique: true, trim: true },
    label:    { type: String, required: true, trim: true },
    subtitle: { type: String, default: '', trim: true },
    icon:     { type: String, default: 'fa-solid fa-gift', trim: true },
    tagline:  { type: String, default: '', trim: true },
    keywords: [{ type: String }],
    // Hand-picked product slugs — when set, these override keyword matching on the site
    productSlugs: [{ type: String }],
    fallback: { type: String, default: 'bracelets', trim: true },
    color:    { type: String, default: '#C8956C', trim: true },
    bg:       { type: String, default: 'rgba(200,149,108,0.12)', trim: true },
    order:    { type: Number, default: 0 },
  },
  { timestamps: true },
);

const GiftingRecipient: Model<IGiftingRecipient> =
  mongoose.models.GiftingRecipient ||
  mongoose.model<IGiftingRecipient>('GiftingRecipient', GiftingRecipientSchema);

export default GiftingRecipient;
