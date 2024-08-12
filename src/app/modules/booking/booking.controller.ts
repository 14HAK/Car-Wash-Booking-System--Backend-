import { RequestHandler } from 'express';
import mongoose, { AnyObject } from 'mongoose';
import createBookingData from './utils/createBookingData';
import {
  bookingGet,
  bookingsCreate,
  getAllBookings,
  myBookingsGet
} from './booking.service';
import { PartialBookings } from './booking.interface';
import AppError from '../../errors/AppError';
import catchAsync from '../../utils/catchAsync';

export const createBookings: RequestHandler = catchAsync(async (req, res, next) => {
  const rawData: AnyObject = await req.body;

  const currentUserId = await (req as any)?.userId;
  // console.log('managed');

  const bookingData: PartialBookings = await createBookingData(rawData, currentUserId);

  const result = await bookingsCreate(bookingData);
  if (!result) {
    return next(new AppError('data created unsuccessful', 500));
  }

  const getBooking = await bookingGet();
  if (!getBooking) {
    return next(new AppError('No Data Found', 404));
  }

  res.status(201).json({
    success: 'true',
    statusCode: 200,
    message: 'Booking successful',
    data: getBooking
  });
});

export const getBookingsAll: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await getAllBookings();
  if (!result) {
    return next(new AppError('No Data Found', 404));
  }

  res.status(201).json({
    success: 'true',
    statusCode: 200,
    message: 'All bookings retrieved successfully',
    data: result
  });
});

export const getMyBookings: RequestHandler = catchAsync(async (req, res, next) => {
  const userId: string = await (req as AnyObject)?.userId;
  const isValidObjectId = mongoose.Types.ObjectId.isValid(userId);

  if (!isValidObjectId) {
    return next(new AppError('invalid objectid', 400));
  }

  // console.log(userId);
  const result = await myBookingsGet(userId);
  if (!result) {
    return next(new AppError('No Data Found', 404));
  }

  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'User bookings retrieved successfully',
    data: result
  });
});