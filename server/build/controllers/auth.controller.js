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
exports.loginController = exports.registerController = void 0;
const services_1 = require("../services");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { formData } = req.body;
    const userCreated = yield (0, services_1.registerNewUser)(formData);
    if (userCreated === "ALREADY USER") {
        return res.status(400).json({ message: "El Email ya ha sido registrado" });
    }
    const token = (0, services_1.generateToken)(formData);
    res.status(201).json({ user: userCreated, status: 201, token });
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req.body;
    const { token, message } = yield (0, services_1.loginUser)(user);
    if (message) {
        return res.status(400).json({ message });
    }
    return res.status(200).json(token);
});
exports.loginController = loginController;
