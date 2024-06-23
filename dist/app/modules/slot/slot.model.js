"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const slotSchema = new mongoose_1.Schema({
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'service identification id required']
    },
    date: {
        type: Date
    },
    startTime: {
        type: String,
        required: [true, 'start time must need']
    },
    endTime: {
        type: String,
        required: [true, 'end time must need']
    },
    isBooked: {
        type: String,
        enum: ['available', 'booked', 'canceled'],
        default: 'available'
    }
});
const Slot = (0, mongoose_1.model)('Slot', slotSchema);
exports.default = Slot;
