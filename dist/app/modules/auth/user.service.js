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
exports.tokenProvider = exports.passwordCompare = exports.findUserByEmail = exports.signupUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("./user.model"));
const signupUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.create(data);
    return result;
});
exports.signupUser = signupUser;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.default.findOne({ email });
    return userExist;
});
exports.findUserByEmail = findUserByEmail;
const passwordCompare = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const isMatch = user_model_1.default.comparePassword(password, hashedPassword);
    return isMatch;
});
exports.passwordCompare = passwordCompare;
const tokenProvider = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = Object.assign({}, data);
    const secretKey = 'ro8BS6Hiivgzy8Xuu09JDjlNLnSLldY5';
    const expire = { expiresIn: '1h' };
    const token = jsonwebtoken_1.default.sign(payload, secretKey, expire);
    return token;
});
exports.tokenProvider = tokenProvider;
