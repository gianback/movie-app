"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.schema = joi_1.default.object({
    names: joi_1.default.string().trim().required().messages({
        "string.empty": "Los nombres son obligatorios",
    }),
    last_names: joi_1.default.string().trim().required().messages({
        "string.empty": "Los apellidos son obligatorios",
    }),
    email: joi_1.default.string().trim().required().email().messages({
        "string.empty": "El email es obligatorio",
        "string.email": "El email ingresado es invalido",
    }),
    password: joi_1.default.string().trim().required().max(20).messages({
        "string.empty": "La contraseña es obligatorio",
        "string.max": "La contraseña debe tener como maximo 20 caracteres",
    }),
});
