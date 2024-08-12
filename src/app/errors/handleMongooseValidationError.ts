import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from './error.interface';

// mongoose error handler function:
const handleMongooseValidationError = async (
  err: mongoose.Error.ValidationError
): Promise<TGenericErrorResponse> => {
  const statusCode = 400;
  const message = 'validation or castError';

  const errorSources: TErrorSources[] = Object.values(err.errors).map((val: any) => {
    return {
      path: val?.path,
      message: val?.message
    };
  });

  return {
    statusCode,
    message,
    errorSources
  };
};

export default handleMongooseValidationError;
