import express from 'express';
import serviceRouter from '../modules/service/service.router';
import slotRouter from '../modules/slot/slot.router';
import bookingRouter from '../modules/booking/booking.router';
import userRouter from '../modules/auth/user.router';
const router = express.Router();

const modularRouter = [
  {
    path: '/auth',
    route: userRouter
  },
  {
    path: '/',
    route: serviceRouter
  },
  {
    path: '/',
    route: slotRouter
  },
  {
    path: '/',
    route: bookingRouter
  }
];

modularRouter.forEach((route) => router.use(route.path, route.route));

export default router;
