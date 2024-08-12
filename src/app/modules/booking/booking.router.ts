import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { createBookings, getBookingsAll, getMyBookings } from './booking.controller';
import isAuthenticate from '../../middlewares/isAuthenticate';

const bookingRouter = express.Router();

bookingRouter
  .route('/bookings')
  .post(authMiddleware, isAuthenticate(['user']), createBookings)
  .get(authMiddleware, isAuthenticate(['admin']), getBookingsAll);

bookingRouter
  .route('/bookings/my-bookings')
  .get(authMiddleware, isAuthenticate(['user']), getMyBookings);
  

export default bookingRouter;
