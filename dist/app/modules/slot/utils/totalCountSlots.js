"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const totalCountSlots = (serviceId, serviceDuration, date, startTime, endTime) => __awaiter(void 0, void 0, void 0, function* () {
    const slots = [];
    let timeStart = String(startTime);
    timeStart = timeStart.split(':');
    timeStart = Number(timeStart[0]);
    //   const time = ((timeStart * 60) + serviceDuration)/60
    //   console.log(time.toFixed(2))
    let timeEnd = String(endTime);
    timeEnd = timeEnd.split(':');
    timeEnd = Number(timeEnd[0]);
    const numberOfSlots = Math.abs(((timeStart - timeEnd) * 60) / serviceDuration);
    for (let i = 0; i < numberOfSlots; i++) {
        const elem = Number(i);
        const data = {
            service: serviceId,
            date,
            startTime: `${timeStart + elem}:00`,
            endTime: `${timeStart + elem + 1}:00`
        };
        slots.push(data);
    }
    return slots;
});
exports.default = totalCountSlots;
