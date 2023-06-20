"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenRoutes = exports.moviesRoutes = exports.commentsRoutes = exports.authRoutes = void 0;
var auth_routes_1 = require("./auth.routes");
Object.defineProperty(exports, "authRoutes", { enumerable: true, get: function () { return __importDefault(auth_routes_1).default; } });
var comments_routes_1 = require("./comments.routes");
Object.defineProperty(exports, "commentsRoutes", { enumerable: true, get: function () { return __importDefault(comments_routes_1).default; } });
var movies_routes_1 = require("./movies.routes");
Object.defineProperty(exports, "moviesRoutes", { enumerable: true, get: function () { return __importDefault(movies_routes_1).default; } });
var verify_token_routes_1 = require("./verify.token.routes");
Object.defineProperty(exports, "verifyTokenRoutes", { enumerable: true, get: function () { return __importDefault(verify_token_routes_1).default; } });
