"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const jwt_1 = require("../services/jwt");
const googleController = (req, res) => {
    const { id, googleToken } = req.body.data;
    const token = (0, jwt_1.generateToken)(id);
    const { given_name, family_name, email, picture } = (0, jsonwebtoken_1.decode)(googleToken);
    res.status(200).json({
        names: given_name,
        last_names: family_name,
        email,
        picture,
        token,
    });
};
exports.googleController = googleController;
