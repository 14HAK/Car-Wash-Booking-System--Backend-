import { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Server error';

  res.status(err.statusCode).json({
    status: err.status,
    statusCode: err.statusCode,
    message: err.message
  });

  next();
};

export default globalErrorHandler;
