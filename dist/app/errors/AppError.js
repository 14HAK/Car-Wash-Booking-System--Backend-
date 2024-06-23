"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, statusCode, stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'false' : 'Server error';
        this.isOperational = true;
        if (!stack) {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = stack;
        }
    }
}
exports.default = AppError;
