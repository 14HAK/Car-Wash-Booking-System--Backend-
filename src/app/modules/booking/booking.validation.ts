import mongoose from 'mongoose';
import { z } from 'zod';
import AppError from '../../errors/AppError';

// Custom validation function for MongoDB ObjectId
// Custom Zod type for Mongoose ObjectId
const ObjectId = z.custom<string>((value) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    throw new AppError('invalid ObjectId', 400);
  }
});

const bookingValidation = z.object({
  customer: ObjectId,
  service: ObjectId,
  slot: ObjectId, // Validate against MongoDB ObjectId
  vehicleType: z.enum([
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
  ]),
  vehicleBrand: z.string(),
  vehicleModel: z.string(),
  manufacturingYear: z.string(),
  registrationPlace: z.string()
});

export default bookingValidation;
