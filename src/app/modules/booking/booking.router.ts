import express from 'express';

const bookingRouter = express.Router();

bookingRouter.route('/').get();

export default bookingRouter;
