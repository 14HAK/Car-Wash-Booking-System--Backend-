import express, { Request, Response } from 'express';
import User from '../modules/auth/user.model';
import AppError from '../errors/AppError';

const isAuthenticate = (roles: string[]) => {
  return async (req: Request, res: Response, next: express.NextFunction) => {
    const userDecoded = await (req as any)?.userInfo;
    const userEmail = await (req as any)?.userInfo?.email;

    const userExist: any | null = await User.findOne({ email: userEmail });

    // check user exist
    if (!userExist) {
      return next(new AppError('User not found', 404));
    }
    // Assuming req.user is set by an authentication middleware
    const userRole = await userExist?.role;

    if (!userRole || !roles.includes(userRole)) {
      return next(new AppError('user not authorized', 500));
    }
    (req as any).userInfo = userDecoded;
    (req as any).userId = userExist?._id;
    next();
  };
};

export default isAuthenticate;
