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
exports.movieSocket = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const Comment_1 = __importDefault(require("../models/Comment"));
const Movie_1 = require("../models/Movie");
const config_1 = require("../config");
const socketMiddleware = (socket, next) => {
    const { token } = socket;
    (0, jsonwebtoken_1.verify)(token, config_1.JWT_SECRET, (err, _) => {
        if (err)
            return new Error("Token not valid");
    });
    next();
};
const movieSocket = (socket) => {
    socket.use(socketMiddleware);
    socket.on("client:save-comment", (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { payload } = data;
        const newComment = new Comment_1.default({
            content: payload.content,
            qualification: payload.qualification,
            movieId: payload.movieId,
            date: Date.now(),
        });
        const savedComment = yield newComment.save();
        yield Movie_1.Movie.addCommentToMovie(payload.movieId, savedComment._id);
        const user = yield Movie_1.Movie.findById(payload.movieId).populate("comments", {
            content: 1,
            qualification: 1,
            date: 1,
            _id: 1,
        });
        socket.emit("server:new-comment", user === null || user === void 0 ? void 0 : user.comments);
    }));
};
exports.movieSocket = movieSocket;
