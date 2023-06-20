"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosPrivate = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = process.env.BASE_URL;
axios_1.default.create({
    baseURL: BASE_URL,
});
exports.axiosPrivate = axios_1.default.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
