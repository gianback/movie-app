"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const routes_1 = require("./routes");
const config_1 = require("./config");
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({
    //cuando se sube una image no la mantenga en memoria sino que la meta dentro de una carpeta.
    useTempFiles: true,
    tempFileDir: "./upload",
}));
//cors
app.use((0, cors_1.default)({
    origin: config_1.CLIENT_URL,
    credentials: true,
}));
app.use("/api", routes_1.moviesRoutes);
app.use("/api", routes_1.commentsRoutes);
app.use("/", routes_1.authRoutes);
app.use("/", routes_1.verifyTokenRoutes);
exports.default = app;
