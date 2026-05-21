import mongoose, { Schema, models, model, Model } from 'mongoose';

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderLine {
  productId?: mongoose.Types.ObjectId | string | null;
  productSlug: string;
  name: string;
  price: number;
  qty: number;
  lineTotal: number;
}

export interface OrderDoc {
  _id: mongoose.Types.ObjectId;
  orderNumber: string;
  user?: mongoose.Types.ObjectId | null;
  sessionId?: string | null;
  items: OrderLine[];
  subtotal: number;
  currency: string;
  status: OrderStatus;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    notes?: string;
  };
  adminNote?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderLineSchema = new Schema<OrderLine>(
  {
    productId: { type: Schema.Types.Mixed, ref: 'Product', default: null },
    productSlug: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true, min: 1 },
    lineTotal: { type: Number, required: true },
  },
  { _id: false },
);

const OrderSchema = new Schema<OrderDoc>(
  {
    orderNumber: { type: String, required: true, unique: true, index: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', default: null, index: true },
    sessionId: { type: String, default: null, index: true },
    items: { type: [OrderLineSchema], required: true },
    subtotal: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
      index: true,
    },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      notes: { type: String, default: '' },
    },
    adminNote: { type: String, default: '' },
  },
  { timestamps: true },
);

// Hot query: "My Orders" list
OrderSchema.index({ user: 1, createdAt: -1 });
// Hot query: admin status filter
OrderSchema.index({ status: 1, createdAt: -1 });

export const Order: Model<OrderDoc> =
  (models.Order as Model<OrderDoc>) || model<OrderDoc>('Order', OrderSchema);
