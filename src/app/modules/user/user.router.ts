import { getUsers } from './user.controller';
import express from 'express';

const userRouter = express.Router();

userRouter.route('/get-user').post().get(getUsers);

export default userRouter;
