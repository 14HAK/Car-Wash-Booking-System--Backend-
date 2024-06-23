"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name must be needed']
    },
    description: {
        type: String,
        required: [true, 'description must be needed']
    },
    price: {
        type: Number,
        required: [true, 'price must be needed']
    },
    duration: {
        type: Number,
        required: [true, 'name must be needed']
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Service = (0, mongoose_1.model)('Service', serviceSchema);
exports.default = Service;
