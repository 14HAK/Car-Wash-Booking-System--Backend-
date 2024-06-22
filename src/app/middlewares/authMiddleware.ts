import { RequestHandler } from 'express';
import AppError from '../errors/AppError';
import jwt from 'jsonwebtoken';

export const authMiddleware: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization as string | undefined;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Authorization header missing', 401));
  }
  // console.log(authHeader);

  const secretKey = 'ro8BS6Hiivgzy8Xuu09JDjlNLnSLldY5';
  const token = authHeader.split(' ')[1];

  if (!token) {
    return next(new AppError('Bearer token missing ', 401));
  }
  const decoded = jwt.verify(token, secretKey);
  // console.log(decoded);
  (req as any).decoded = decoded;
  next();
};
