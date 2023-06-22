"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const checkJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "Unauthorized headers",
        });
    }
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized token malo",
        });
    }
    (0, jsonwebtoken_1.verify)(token, config_1.JWT_SECRET, (error, user) => {
        if (error)
            return res.status(401).send({ message: "token invalido", status: 401 });
        req.user = user;
        next();
        return;
    });
    return;
};
exports.checkJwt = checkJwt;
