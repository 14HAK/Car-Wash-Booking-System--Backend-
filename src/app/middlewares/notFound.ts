import { RequestHandler } from 'express';

const notFound: RequestHandler = (req, res, next) => {
   res.status(404).json({
     success: false,
     statusCode: 404,
     message: 'Not Found'
   });
   next();
};

export default notFound;
