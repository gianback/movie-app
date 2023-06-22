"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.CLIENT_URL = exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_API_KEY = exports.CLOUDINARY_CLOUD_NAME = exports.PORT = exports.DB_URI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DB_URI = process.env.MONGODB_URI;
exports.PORT = process.env.PORT || 4000;
exports.CLOUDINARY_CLOUD_NAME = process.env.CLOUD_NAME;
exports.CLOUDINARY_API_KEY = process.env.API_KEY;
exports.CLOUDINARY_API_SECRET = process.env.API_SECRET;
exports.CLIENT_URL = process.env.CLIENT_URL;
exports.JWT_SECRET = process.env.JWT_SECRET;
