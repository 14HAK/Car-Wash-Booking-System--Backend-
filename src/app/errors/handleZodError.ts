import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericErrorResponse } from '../errors/error.interface';

// zod error handler function:
const handleZodError = async (err: ZodError): Promise<TGenericErrorResponse> => {
  const statusCode = 400;

  const errorSources: TErrorSources[] = err.issues.map((issue: ZodIssue) => {
    const path = issue.path[0];
    const message = issue?.message;

    return {
      path,
      message
    };
  });

  return {
    statusCode,
    message: 'validation error .Z',
    errorSources
  };
};

export default handleZodError;
