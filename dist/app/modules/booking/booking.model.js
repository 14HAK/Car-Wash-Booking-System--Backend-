"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bookingSchema = new mongoose_1.Schema({
    customer: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'userId is required']
    },
    service: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'serviceId is required']
    },
    slot: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Slot',
        required: [true, 'slotId is required']
    },
    vehicleType: {
        type: String,
        enum: [
            'car',
            'truck',
            'SUV',
            'van',
            'motorcycle',
            'bus',
            'electricVehicle',
            'hybridVehicle',
            'bicycle',
            'tractor'
        ],
        required: [true, 'vehicleType is required']
    },
    vehicleBrand: {
        type: String,
        required: [true, 'vehicleBrand is required']
    },
    vehicleModel: {
        type: String,
        required: [true, 'vehicleModel is required']
    },
    manufacturingYear: {
        type: Number,
        required: [true, 'manufacturingYear is required']
    },
    registrationPlate: {
        type: String,
        required: [true, 'registrationPlate is required']
    }
}, {
    timestamps: true
});
// Define your mongoose model
const Booking = (0, mongoose_1.model)('Booking', bookingSchema);
exports.default = Booking;
