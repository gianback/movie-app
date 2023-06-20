"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const config_1 = require("./config");
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db/db");
const main_1 = require("./socket/main");
const server = http_1.default.createServer(app_1.default);
const httpServer = server.listen(config_1.PORT);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: config_1.CLIENT_URL,
        credentials: true,
    },
});
(0, db_1.connectDb)();
//socket
(0, main_1.mainSocket)(io);
console.log("Server running in port", config_1.PORT);
