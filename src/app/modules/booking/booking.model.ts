import { Schema, model } from 'mongoose';
import TBOOKING from './booking.interface';

const bookingSchema = new Schema<TBOOKING>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: true
    },
    service: {
      type: Schema.Types.ObjectId,
      required: true
    },
    slot: {
      type: Schema.Types.ObjectId,
      required: true
    },
    vehicleType: {
      type: String,
      enum: [
        'car',
        'truck',
        'SUV',
        'van',
        'motorcycle',
        'bus',
        'electricVehicle',
        'hybridVehicle',
        'bicycle',
        'tractor'
      ],
      required: true
    },
    vehicleBrand: {
      type: String,
      required: true
    },
    vehicleModel: {
      type: String,
      required: true
    },
    manufacturingYear: {
      type: String,
      required: true
    },
    registrationPlace: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Define your mongoose model
const bookingModel = model<TBOOKING>('Booking', bookingSchema);

export default bookingModel;
