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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
//user mongoose schema
const userSchema = new mongoose_1.Schema({
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
    phone: {
        type: String,
        required: [true, 'phone must be required']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: [true, 'role must be required']
    },
    address: {
        type: String,
        required: [true, 'address must be required']
    }
}, {
    timestamps: true
});
//user mongoose middleware
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            this.password = yield bcrypt_1.default.hash(this.password, 11);
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
//user mongoose methods
userSchema.static('comparePassword', function comparePassword(plainPassword, hashedPassword) {
    return bcrypt_1.default.compare(plainPassword, hashedPassword);
});
//user mongoose model
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
