import { TGenericErrorResponse } from './error.interface';

// Handle Mongoose duplicate field errors (code 11000) function:
const handleMongooseDuplicateFieldError = async (
  err: any
): Promise<TGenericErrorResponse> => {
  const statusCode = 400;
  const message = 'Duplicate field value entered.';

  const field = Object.keys(err.keyValue)[0];
  const errorSources: any = [
    {
      path: field,
      message: `Duplicate value for field: ${field}.`
    }
  ];

  return {
    statusCode,
    message,
    errorSources: errorSources
  };
};

export default handleMongooseDuplicateFieldError;
