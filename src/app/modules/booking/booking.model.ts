import mongoose, { Schema, model } from 'mongoose';
import TBOOKING from './booking.interface';

const bookingSchema = new Schema<TBOOKING>(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'userId is required']
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: [true, 'serviceId is required']
    },
    slot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Slot',
      required: [true, 'slotId is required']
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
      required: [true, 'vehicleType is required']
    },
    vehicleBrand: {
      type: String,
      required: [true, 'vehicleBrand is required']
    },
    vehicleModel: {
      type: String,
      required: [true, 'vehicleModel is required']
    },
    manufacturingYear: {
      type: Number,
      required: [true, 'manufacturingYear is required']
    },
    registrationPlate: {
      type: String,
      required: [true, 'registrationPlate is required']
    }
  },
  {
    timestamps: true
  }
);

// Define your mongoose model
const Booking = model<TBOOKING>('Booking', bookingSchema);

export default Booking;
