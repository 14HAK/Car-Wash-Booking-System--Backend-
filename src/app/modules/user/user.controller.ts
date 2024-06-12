import { RequestHandler } from 'express';


export const getUsers: RequestHandler = async (req, res) => {
  console.log('controller function');
};
