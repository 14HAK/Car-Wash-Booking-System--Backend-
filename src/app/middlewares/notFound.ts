import { RequestHandler } from 'express';

const notFound: RequestHandler = (req, res, next) => {
  return res.status(404).json({
    status: false,
    message: 'API Not Found !!',
    error: ''
  });
};

export default notFound;
