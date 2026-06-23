import mongoose, { Schema, Document } from 'mongoose';

export interface IReel extends Document {
  title: string;
  caption: string;
  src: string;       // Cloudflare R2 video URL
  image: string;     // Cloudflare R2 thumbnail / fallback image URL
  order: number;     // display order
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReelSchema: Schema = new Schema(
  {
    title:   { type: String, required: true },
    caption: { type: String, default: '' },
    src:     { type: String, required: true },
    image:   { type: String, default: '' },
    order:   { type: Number, default: 0 },
    active:  { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Reel || mongoose.model<IReel>('Reel', ReelSchema);
