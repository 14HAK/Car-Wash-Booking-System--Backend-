import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { availableSlots, createSlots } from './slot.controller';
import isAuthenticate from '../../middlewares/isAuthenticate';

const slotRouter = express.Router();

slotRouter
  .route('/services/slots')
  .post(authMiddleware, isAuthenticate(['admin']), createSlots);

slotRouter.route('/slots/availability/:serviceId?').get(availableSlots);



export default slotRouter;
