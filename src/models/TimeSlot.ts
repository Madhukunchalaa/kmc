import mongoose, { Schema, models, model, Model } from 'mongoose';

// A "configured" available slot per service per day. Defaults can be generated
// dynamically (9 AM – 6 PM, hourly) when a service has no explicit slots set.
export interface TimeSlotDoc {
  _id: mongoose.Types.ObjectId;
  service: mongoose.Types.ObjectId;
  date: string; // YYYY-MM-DD
  timeSlot: string; // HH:mm
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TimeSlotSchema = new Schema<TimeSlotDoc>(
  {
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true, index: true },
    date: { type: String, required: true, index: true },
    timeSlot: { type: String, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true },
);

TimeSlotSchema.index({ service: 1, date: 1, timeSlot: 1 }, { unique: true });

export const TimeSlot: Model<TimeSlotDoc> =
  (models.TimeSlot as Model<TimeSlotDoc>) || model<TimeSlotDoc>('TimeSlot', TimeSlotSchema);
