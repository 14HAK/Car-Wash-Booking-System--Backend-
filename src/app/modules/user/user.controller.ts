import { RequestHandler } from 'express';
import { getUserService } from './user.service';

export const getUsers: RequestHandler = async (req, res) => {
  console.log('this is user controller!');
  const result = await getUserService('user service');
  console.log(result);

  res.json({ status: 200, message: 'module system server working properly!' });
};
