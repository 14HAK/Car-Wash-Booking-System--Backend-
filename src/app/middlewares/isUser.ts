// import catchAsync from '../utils/catchAsync';
import User from '../modules/auth/user.model';
import { TUSER } from '../modules/auth/user.interface';
import AppError from '../errors/AppError';
import { RequestHandler } from 'express';

export const isUser: RequestHandler = async (req, res, next) => {
  const userEmail = await (req as any)?.decoded?.email;

  const userExist: TUSER | null = await User.findOne({ email: userEmail });

  // check user exist
  if (!userExist) {
    return next(new AppError('User not found', 404));
  }
  // check user role
  if (userExist?.role !== 'user') {
    return next(new AppError('Access denied! you are not a user', 403));
  }

  (req as any).user = userExist;
  next();
};
