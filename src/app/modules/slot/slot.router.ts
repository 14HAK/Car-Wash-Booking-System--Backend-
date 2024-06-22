import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { isAdmin } from '../../middlewares/isAdmin';
import { availableSlots, createSlots } from './slot.controller';

const slotRouter = express.Router();

slotRouter.route('/services/slots').post(authMiddleware, isAdmin, createSlots);

slotRouter.route('/slots/availability/:serviceId?').get(availableSlots);



export default slotRouter;
