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
exports.userLogin = exports.userSignup = void 0;
const user_validation_1 = __importDefault(require("./user.validation"));
const user_service_1 = require("./user.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
exports.userSignup = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const rawData = yield req.body;
    const isValidData = yield user_validation_1.default.parseAsync(rawData);
    const result = yield (0, user_service_1.signupUser)(isValidData);
    if (!result) {
        return next(new AppError_1.default('data created unsuccessful', 500));
    }
    res.status(201).json({
        success: 'true',
        statusCode: 200,
        message: 'user resisters successfully',
        data: result
    });
}));
exports.userLogin = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // req.body coming properly. {email, password}
    const rawData = yield (req === null || req === void 0 ? void 0 : req.body);
    const { email, password } = rawData;
    const user = yield (0, user_service_1.findUserByEmail)(email);
    if (!user) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    const verifyPassword = yield (0, user_service_1.passwordCompare)(password, user.password);
    if (!verifyPassword) {
        return next(new AppError_1.default('Invalid Credentials', 400));
    }
    const jwtToken = yield (0, user_service_1.tokenProvider)(rawData);
    if (!jwtToken) {
        return next(new AppError_1.default('Invalid Credentials', 400));
    }
    // const stringToken = JSON.stringify(jwtToken);
    res.set('Authorization', `Bearer ${jwtToken}`);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'User logged in successfully',
        token: jwtToken,
        data: user
    });
}));
