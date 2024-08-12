import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from './error.interface';

// mongoose cast error function:
const handleMongooseCastError = async (
  err: mongoose.Error.CastError
): Promise<TGenericErrorResponse> => {
  const statusCode = 400;
  const message = 'Invalid value provided for field.';

  const errorSources: TErrorSources[] = [
    {
      path: err.path,
      message: err.message
    }
  ];

  return {
    statusCode,
    message,
    errorSources
  };
};

export default handleMongooseCastError;
