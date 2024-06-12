import { z } from 'zod';
import { Types } from 'mongoose';

// Custom validation function for MongoDB ObjectId
const isObjectId = (value: string) => Types.ObjectId.isValid(value);

const bookingValidation = z.object({
  customer: z.string().refine(isObjectId),
  service: z.string().refine(isObjectId),
  slot: z.string().refine(isObjectId), // Validate against MongoDB ObjectId
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
