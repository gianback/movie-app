"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const generateToken = (id) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, {
        expiresIn: "2hr",
    });
    return jwt;
};
exports.generateToken = generateToken;
