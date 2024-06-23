import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { isUser } from '../../middlewares/isUser';
import { createBookings, getBookingsAll, getMyBookings } from './booking.controller';

const bookingRouter = express.Router();

bookingRouter
  .route('/bookings')
  .post(authMiddleware, isUser, createBookings)
  .get(getBookingsAll);

bookingRouter.route('/bookings/my-bookings').get(authMiddleware, isUser, getMyBookings);
  

export default bookingRouter;
