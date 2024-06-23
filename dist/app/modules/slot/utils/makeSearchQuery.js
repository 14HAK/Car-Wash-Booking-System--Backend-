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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchQuery = void 0;
const mongoose_1 = require("mongoose");
const makeSearchQuery = (paramsID, query) => __awaiter(void 0, void 0, void 0, function* () {
    let searchQuery = {};
    if (!paramsID && query.length < 1) {
        searchQuery = { isBooked: 'available' };
    }
    else if (!paramsID || query.length >= 1) {
        searchQuery = Object.assign(Object.assign({}, query), { isBooked: 'available' });
    }
    else if (paramsID || query.length >= 1) {
        searchQuery = Object.assign(Object.assign({ _id: new mongoose_1.Types.ObjectId(paramsID) }, query), { isBooked: 'available' });
    }
    return searchQuery;
});
exports.makeSearchQuery = makeSearchQuery;
