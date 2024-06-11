import express from 'express';
import userRouter from './../modules/user/user.router';
const router = express.Router();

const modularRouter = [
  {
    path: '/user',
    route: userRouter
  }
];

modularRouter?.forEach((element) => router.use(element?.path, element?.route));

export default router;
