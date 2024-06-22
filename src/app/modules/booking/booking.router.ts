import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { isUser } from '../../middlewares/isUser';
import { createBookings, getBookingsAll } from './booking.controller';

const bookingRouter = express.Router();

bookingRouter
  .route('/bookings')
  .post(authMiddleware, isUser, createBookings)
  .get(getBookingsAll);

export default bookingRouter;
