import mongoose, { Schema, models, model, Model } from 'mongoose';

export interface NotificationDoc {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  type: 'order' | 'booking' | 'system';
  title: string;
  message: string;
  link?: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const NotificationSchema = new Schema<NotificationDoc>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    type: { type: String, enum: ['order', 'booking', 'system'], default: 'system' },
    title: { type: String, required: true },
    message: { type: String, required: true },
    link: { type: String, default: '' },
    read: { type: Boolean, default: false, index: true },
  },
  { timestamps: true },
);

// Hot query: notifications list newest first
NotificationSchema.index({ user: 1, createdAt: -1 });
// Hot query: unread count badge
NotificationSchema.index({ user: 1, read: 1 });

export const Notification: Model<NotificationDoc> =
  (models.Notification as Model<NotificationDoc>) ||
  model<NotificationDoc>('Notification', NotificationSchema);
