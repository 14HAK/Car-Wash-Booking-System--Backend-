import { RequestHandler } from 'express';

export const getController: RequestHandler = async (req, res) => {
  console.log('service controller.');
};
