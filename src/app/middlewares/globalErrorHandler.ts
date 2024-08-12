import { ErrorRequestHandler } from 'express';
import envConfig from '../config';
import AppError from '../errors/AppError';
import { TErrorSources } from '../errors/error.interface';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';
import mongoose from 'mongoose';
import handleMongooseValidationError from '../errors/handleMongooseValidationError';
import handleMongooseCastError from '../errors/handleMongooseCastError';
import handleMongooseDuplicateFieldError from '../errors/handleMongooseDuplicateFieldError';

// Error handling middleware globalErrorHandler:
const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  //setting default values if does not catch error reason
  let statusCode = 500;
  const status = 'error';
  let message = 'something went wrong';
  let errorSources: TErrorSources[] = [
    {
      path: '',
      message: 'something went wrong'
    }
  ];

  //Zod error handle:
  if (err instanceof ZodError) {
    const simpleFindError = await handleZodError(err);

    statusCode = simpleFindError?.statusCode;
    message = simpleFindError?.message;
    errorSources = simpleFindError?.errorSources;
  } else if (err instanceof mongoose.Error.ValidationError) {
    //Mongoose error handle:
    const simpleFindError = await handleMongooseValidationError(err);

    statusCode = simpleFindError?.statusCode;
    message = simpleFindError?.message;
    errorSources = simpleFindError?.errorSources;
  } else if (err instanceof mongoose.Error.CastError) {
    //Mongoose Cast Error handle:
    const simpleFindError = await handleMongooseCastError(err);

    statusCode = simpleFindError?.statusCode;
    message = simpleFindError?.message;
    errorSources = simpleFindError?.errorSources;
  } else if (err.code && err.code === 11000) {
    //Handle Mongoose duplicate field errors (code 11000)
    const simpleFindError = await handleMongooseDuplicateFieldError(err);

    statusCode = simpleFindError?.statusCode;
    message = simpleFindError?.message;
    errorSources = simpleFindError?.errorSources;
  } else if (err instanceof AppError) {
    //Handle AppError:
    statusCode = err?.statusCode;
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message
      }
    ];
  } else if (err instanceof Error) {
    //Handle Error:
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message
      }
    ];
  } else {
    message = 'server internal error';
  }

  //send error pattern:
  res.status(statusCode).json({
    status,
    success: false,
    message,
    errorSources,
    stack: envConfig.node_environment === 'development' ? err.stack : null
  });
  next();
};

export default globalErrorHandler;
