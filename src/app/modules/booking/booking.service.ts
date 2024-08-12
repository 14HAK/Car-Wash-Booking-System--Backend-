import { Types } from 'mongoose';
import { PartialBookings } from './booking.interface';
import Booking from './booking.model';

export const bookingsCreate = async (bookingData: PartialBookings) => {
  const result = await Booking.create({ ...bookingData });
  return result;
};

export const bookingGet = async () => {
  const result = await Booking.find()
    .populate('customer')
    .populate('service')
    .populate('slot');
  return result;
};

export const getAllBookings = async () => {
  const result = await Booking.find()
    .populate('customer')
    .populate('service')
    .populate('slot');
  return result;
};

export const myBookingsGet = async (userId: string) => {
  const result = await Booking.find({ customer: userId })
    .populate('customer')
    .populate('service')
    .populate('slot');

  return result;
};
