//error types:
export type TErrorSources = {
  path: string | number;
  message: string;
};

//error response types:
export interface TGenericErrorResponse {
  statusCode: number;
  message: string;
  errorSources: TErrorSources[];
}
