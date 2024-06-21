import express from 'express';
import { userLogin, userSignup } from './user.controller';

const userRouter = express.Router();

userRouter.route('/signup').post(userSignup);
userRouter.route('/login').post(userLogin);


export default userRouter;
