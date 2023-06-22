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
exports.extractPublicIdAndSecureUrl = exports.uploadImage = void 0;
const cloudinary_1 = require("cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
const config_1 = require("../config");
cloudinary_1.v2.config({
    cloud_name: config_1.CLOUDINARY_CLOUD_NAME,
    api_key: config_1.CLOUDINARY_API_KEY,
    api_secret: config_1.CLOUDINARY_API_SECRET,
    secure: true,
});
//llama un metodo
const uploadImage = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cloudinary_1.v2.uploader.upload(filepath, {
        folder: "movies",
    });
});
exports.uploadImage = uploadImage;
const extractPublicIdAndSecureUrl = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    const { public_id, secure_url } = yield (0, exports.uploadImage)(filepath);
    yield fs_extra_1.default.unlink(filepath);
    return {
        public_id,
        secure_url,
    };
});
exports.extractPublicIdAndSecureUrl = extractPublicIdAndSecureUrl;
