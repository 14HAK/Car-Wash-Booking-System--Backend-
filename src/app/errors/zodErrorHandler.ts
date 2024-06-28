import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import AppError from './AppError';

const zodErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const message = err.errors.map((error) => error.message).join('. ');
    err = new AppError(message, 404);
  }
  next(err);
};

export default zodErrorHandler;
