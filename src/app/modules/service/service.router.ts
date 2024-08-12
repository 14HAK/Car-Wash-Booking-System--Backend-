import express from 'express';
import {
  createServices,
  deleteService,
  getAllServices,
  getServiceById,
  updateService
} from './service.controller';
import { authMiddleware } from '../../middlewares/authMiddleware';
import isAuthenticate from '../../middlewares/isAuthenticate';

const serviceRouter = express.Router();

serviceRouter
  .route('/services')
  .post(authMiddleware, isAuthenticate(['admin']), createServices)
  .get(getAllServices);

serviceRouter
  .route('/services/:id?')
  .get(getServiceById)
  .put(authMiddleware, isAuthenticate(['admin']), updateService)
  .delete(authMiddleware, isAuthenticate(['admin']), deleteService);


export default serviceRouter;
