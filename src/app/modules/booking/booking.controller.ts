import { RequestHandler } from 'express';
import { AnyObject } from 'mongoose';
import createBookingData from './utils/createBookingData';
import { bookingGet, bookingsCreate, getAllBookings } from './booking.service';
import { PartialBookings } from './booking.interface';
import AppError from '../../errors/AppError';

export const createBookings: RequestHandler = async (req, res, next) => {
  const rawData: AnyObject = await req.body;
  const userId = (req as AnyObject)?.user?.id;

  const bookingData: PartialBookings = await createBookingData(rawData, userId);

  const result = await bookingsCreate(bookingData);
  if (!result) {
    return next(new AppError('data created unsuccessful', 500));
  }

  const getBooking = await bookingGet();
  if (!getBooking) {
    return next(new AppError('not found data', 400));
  }

  res.status(201).json({
    status: 'true',
    statusCode: 200,
    message: 'Booking successful',
    data: getBooking
  });
};

export const getBookingsAll: RequestHandler = async (req, res, next) => {
  const result = await getAllBookings();
  if (!result) {
    return next(new AppError('not found data', 400));
  }

  res.status(201).json({
    status: 'true',
    statusCode: 200,
    message: 'All bookings retrieved successfully',
    data: result
  });
};
