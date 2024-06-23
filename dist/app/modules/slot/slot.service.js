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
exports.slotsAvailable = exports.slotsCreate = exports.existService = void 0;
const service_model_1 = __importDefault(require("../service/service.model"));
const slot_model_1 = __importDefault(require("./slot.model"));
const existService = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExist = yield service_model_1.default.findOne({ _id: ID });
    return isServiceExist;
});
exports.existService = existService;
const slotsCreate = (totalSlots) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slot_model_1.default.create(totalSlots);
    return result;
});
exports.slotsCreate = slotsCreate;
const slotsAvailable = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slot_model_1.default.find(query);
    return result;
});
exports.slotsAvailable = slotsAvailable;
