import { AnyObject } from 'mongoose';
import Service from '../service/service.model';
import { PartialSlot } from './slot.interface';
import Slot from './slot.model';

export const existService = async (ID: string) => {
  const isServiceExist = await Service.findOne({ _id: ID });
  return isServiceExist;
};

export const slotsCreate = async (totalSlots: Array<PartialSlot>) => {
  const result = await Slot.create(totalSlots);
  return result;
};

export const slotsAvailable = async (query: AnyObject) => {
  const result = await Slot.find(query);
  return result;
};
