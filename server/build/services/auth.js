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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerNewUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const bycript_1 = require("./bycript");
const jwt_1 = require("./jwt");
const registerNewUser = (_a) => __awaiter(void 0, void 0, void 0, function* () {
    var { email, password } = _a, user = __rest(_a, ["email", "password"]);
    const checkUser = yield User_1.default.findOne({ email });
    if (checkUser) {
        return "ALREADY USER";
    }
    const passHash = yield (0, bycript_1.encryp)(password);
    const createUser = yield User_1.default.create(Object.assign({ email, password: passHash }, user));
    return createUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield User_1.default.findOne({ email });
    if (!checkIs)
        return { message: "Credenciales invalidas :(" };
    const passwordHash = checkIs.password;
    const isCorrect = yield (0, bycript_1.verify)(password, passwordHash);
    if (!isCorrect)
        return { message: "Credenciales invalidas :(" };
    const token = (0, jwt_1.generateToken)(checkIs.email);
    return { token };
});
exports.loginUser = loginUser;
