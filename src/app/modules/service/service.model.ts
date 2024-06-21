import { Schema, model } from 'mongoose';
import { TSERVICE } from './service.interface';

const serviceSchema = new Schema<TSERVICE>(
  {
    name: {
      type: String,
      required: [true, 'name must be needed']
    },
    description: {
      type: String,
      required: [true, 'description must be needed']
    },
    price: {
      type: Number,
      required: [true, 'price must be needed']
    },
    duration: {
      type: Number,
      required: [true, 'name must be needed']
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Service = model<TSERVICE>('Service', serviceSchema);

export default Service;
