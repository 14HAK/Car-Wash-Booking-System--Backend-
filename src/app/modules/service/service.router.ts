import express from 'express';

const serviceRouter = express.Router();

serviceRouter.route('/').get();

export default serviceRouter;
