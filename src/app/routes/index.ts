import express from 'express';
import userRouter from './../modules/user/user.router';
import serviceRouter from '../modules/service/service.router';
import slotRouter from '../modules/slot/slot.router';
import bookingRouter from '../modules/booking/booking.router';
const router = express.Router();

const modularRouter = [
  {
    path: '/user',
    route: userRouter
  },
  {
    path: '/service',
    route: serviceRouter
  },
  {
    path: '/slot',
    route: slotRouter
  },
  {
    path: '/booking',
    route: bookingRouter
  }
];

modularRouter?.forEach((element) => router.use(element?.path, element?.route));

export default router;
