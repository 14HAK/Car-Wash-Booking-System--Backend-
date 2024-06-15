import express from 'express';
import { userLogin, userSignup } from './user.controller';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { isAdmin } from '../../middlewares/isAdmin';

const userRouter = express.Router();

userRouter.route('/signup').post(userSignup);
userRouter.route('/login').post(userLogin);
userRouter.route('/loya').get(authMiddleware, isAdmin, (req, res) => {
  res.send('hekllo');
});

export default userRouter;
