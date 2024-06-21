import express from 'express';
import {
  createServices,
  deleteService,
  getAllServices,
  getServiceById,
  updateService
} from './service.controller';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { isAdmin } from '../../middlewares/isAdmin';

const serviceRouter = express.Router();

serviceRouter
  .route('/services')
  .post(authMiddleware, isAdmin, createServices)
  .get(getAllServices);

serviceRouter
  .route('/services/:id?')
  .get(getServiceById)
  .put(authMiddleware, isAdmin, updateService)
  .delete(authMiddleware, isAdmin, deleteService);


export default serviceRouter;
