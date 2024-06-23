import express from 'express';
import { userLogin, userSignup } from './user.controller';

const userRouter = express.Router();

userRouter.route('/auth/signup').post(userSignup);
userRouter.route('/auth/login').post(userLogin);


export default userRouter;
