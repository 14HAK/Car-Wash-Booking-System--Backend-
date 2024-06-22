import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { isUser } from '../../middlewares/isUser';
import { createBookings } from './booking.controller';

const bookingRouter = express.Router();

bookingRouter.route('/bookings').post(authMiddleware, isUser, createBookings);

export default bookingRouter;
