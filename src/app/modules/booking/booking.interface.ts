import { Document, Schema } from 'mongoose';

interface TBOOKING extends Document {
  customer: Schema.Types.ObjectId;
  service: Schema.Types.ObjectId;
  slot: Schema.Types.ObjectId;
  vehicleType:
    | 'car'
    | 'truck'
    | 'SUV'
    | 'van'
    | 'motorcycle'
    | 'bus'
    | 'electricVehicle'
    | 'hybridVehicle'
    | 'bicycle'
    | 'tractor';
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: string;
  registrationPlace: string;
}

export default TBOOKING;
