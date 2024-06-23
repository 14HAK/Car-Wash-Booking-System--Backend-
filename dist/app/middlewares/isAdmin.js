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
exports.isAdmin = void 0;
// import catchAsync from '../utils/catchAsync';
const user_model_1 = __importDefault(require("../modules/auth/user.model"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const isAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userEmail = yield ((_a = req === null || req === void 0 ? void 0 : req.decoded) === null || _a === void 0 ? void 0 : _a.email);
    const userExist = yield user_model_1.default.findOne({ email: userEmail });
    // check user exist
    if (!userExist) {
        return next(new AppError_1.default('User not found', 404));
    }
    // check user role
    if ((userExist === null || userExist === void 0 ? void 0 : userExist.role) !== 'admin') {
        return next(new AppError_1.default('Access denied! User is not an admin', 403));
    }
    req.user = userExist;
    next();
});
exports.isAdmin = isAdmin;
