import { AnyObject } from 'mongoose';
import Slot from '../../slot/slot.model';
import AppError from '../../../errors/AppError';

const createBookingData = async (rawData: AnyObject, userId: string) => {
  const user = userId;
  // console.log(user);
  const {
    serviceId,
    slotId,
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate
  } = rawData;

  const slot = await Slot.findById(slotId);
  if (!slot || slot.isBooked === 'booked') {
    throw new AppError('slot is already booked', 400);
  }

  const bookingData: AnyObject = {
    customer: user,
    service: serviceId,
    slot: slotId,
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate
  };

  return bookingData;
};

export default createBookingData;
