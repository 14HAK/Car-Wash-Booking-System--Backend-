import { RequestHandler } from 'express';

const notFound: RequestHandler = (req, res, next) => {
   res.status(404).json({
     status: false,
     message: 'API Not Found !!',
     error: ''
   });
   next();
};

export default notFound;
