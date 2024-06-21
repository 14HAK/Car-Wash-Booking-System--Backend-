import { PartialService } from './service.interface';
import Service from './service.model';

export const servicesCreate = async (data: PartialService) => {
  const result = await Service.create({ ...data });
  return result;
};

export const serviceGetById = async (ID: string): Promise<PartialService | unknown> => {
  const result = await Service.findOne({ _id: ID });
  return result;
};

export const serviceAll = async (): Promise<PartialService | unknown> => {
  const result = await Service.find();
  return result;
};

export const serviceUpdate = async (
  ID: string,
  data: PartialService
): Promise<PartialService | unknown> => {
  let response: string | Array<PartialService> | unknown = '';

  const id = { _id: ID };
  const updatedData = { ...data };
  const options = { new: true };

  const result = await Service.findByIdAndUpdate(id, updatedData, options);

  response = result;
  return response;
};

export const serviceDelete = async (ID: string): Promise<PartialService | unknown> => {
  let response: string | Array<PartialService> | unknown = '';

  const id = { _id: ID };
  const updatedData = { isDeleted: true };
  const options = { new: true };

  const result = await Service.findByIdAndUpdate(id, updatedData, options);

  response = result;
  return response;
};
