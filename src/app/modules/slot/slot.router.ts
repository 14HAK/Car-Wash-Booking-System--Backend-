import express from 'express';

const slotRouter = express.Router();

slotRouter.route('/slots').post();

export default slotRouter;
