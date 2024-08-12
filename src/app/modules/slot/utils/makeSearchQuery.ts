import { AnyObject, Types } from 'mongoose';

export const makeSearchQuery = async (
  paramsID: undefined | string,
  query: AnyObject
): Promise<AnyObject> => {
  let searchQuery: AnyObject = {};

  if (!paramsID && query.length < 1) {
    searchQuery = { isBooked: 'available' };
  } else if (!paramsID || query.length >= 1) {
    searchQuery = { ...query, isBooked: 'available' };
  } else if (paramsID || query.length >= 1) {
    searchQuery = {
      service: new Types.ObjectId(paramsID),
      ...query,
      isBooked: 'available'
    };
  }

  return searchQuery;
};
