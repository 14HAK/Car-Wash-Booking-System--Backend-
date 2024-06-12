import express from 'express';

const slotRouter = express.Router();

slotRouter.route('/').get();

export default slotRouter;
