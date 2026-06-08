import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, default: 'Kriss' },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to set publishedAt when published becomes true
BlogSchema.pre<IBlog>('save', async function () {
  if (this.isModified('published') && this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
});

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
