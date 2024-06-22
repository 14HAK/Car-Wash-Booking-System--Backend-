import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { isAdmin } from '../../middlewares/isAdmin';
import { createSlots } from './slot.controller';

const slotRouter = express.Router();

slotRouter.route('/slots').post(authMiddleware, isAdmin, createSlots);

export default slotRouter;
