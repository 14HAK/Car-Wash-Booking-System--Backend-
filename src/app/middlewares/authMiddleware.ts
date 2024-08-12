import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import jwt from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync';
import envConfig from '../config';
import { JwtPayload } from '../../types/express';

export const authMiddleware = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization as string | undefined;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return next(new AppError('You have no access to this route', 401));
    }
    // console.log(authHeader);
    const token = authHeader.split(' ')[1];

    if (!token) {
      return next(new AppError('You have no access to this route', 401));
    }
    jwt.verify(token, envConfig?.jwt_String as string, (err, decoded) => {
      if (err) {
        return next(new AppError('token is not verified, Forbidden!', 403));
      }

      (req as any).userInfo = decoded as JwtPayload; // `user` is now recognized by TypeScript
      // console.log(decoded);
      next();
    });
  }
);
