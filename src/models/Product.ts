import mongoose, { Schema, models, model, Model } from 'mongoose';

export interface ProductDoc {
  _id: mongoose.Types.ObjectId;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  badge?: 'Popular' | 'New' | 'Sale' | 'Bestseller' | null;
  desc: string;
  longDesc?: string;
  chakras: string[];
  stock: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<ProductDoc>(
  {
    slug: { type: String, required: true, unique: true, index: true, trim: true, lowercase: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true },
    subcategory: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, default: null, min: 0 },
    image: { type: String, required: true },
    badge: { type: String, enum: ['Popular', 'New', 'Sale', 'Bestseller', null], default: null },
    desc: { type: String, required: true },
    longDesc: { type: String, default: '' },
    chakras: { type: [String], default: [] },
    stock: { type: Number, default: 99, min: 0 },
    active: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

export const Product: Model<ProductDoc> =
  (models.Product as Model<ProductDoc>) || model<ProductDoc>('Product', ProductSchema);
