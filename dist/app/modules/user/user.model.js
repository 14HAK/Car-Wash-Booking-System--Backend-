"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//user mongoose schema
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name must be required']
    },
    email: {
        type: String,
        required: [true, 'email must be required and unique'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password must be required']
    },
    phone: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: [true, 'role must be required']
    },
    address: String
});
//user mongoose middleware
//user mongoose model
const UserModel = (0, mongoose_1.model)('User', UserSchema);
exports.default = UserModel;
