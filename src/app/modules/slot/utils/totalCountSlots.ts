import { PartialSlot } from '../slot.interface';
import { Schema } from 'mongoose';

const totalCountSlots = async (
  serviceId: Schema.Types.ObjectId | undefined | string | any,
  serviceDuration: number,
  date: any,
  startTime: string,
  endTime: string
) => {
  const slots: Array<PartialSlot> = [];

  let timeStart: any = String(startTime);
  timeStart = timeStart.split(':');
  timeStart = Number(timeStart[0]);

  //   const time = ((timeStart * 60) + serviceDuration)/60
  //   console.log(time.toFixed(2))

  let timeEnd: any = String(endTime);
  timeEnd = timeEnd.split(':');
  timeEnd = Number(timeEnd[0]);

  const numberOfSlots: number = Math.abs(((timeStart - timeEnd) * 60) / serviceDuration);

  for (let i = 0; i < numberOfSlots; i++) {
    const elem: number = Number(i);
    const data: PartialSlot = {
      service: serviceId,
      date,
      startTime: `${timeStart + elem}:00`,
      endTime: `${timeStart + elem + 1}:00`
    };
    slots.push(data);
  }

  return slots;
};

export default totalCountSlots;
