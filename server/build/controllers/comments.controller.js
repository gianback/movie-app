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
exports.createComment = void 0;
const Comment_1 = __importDefault(require("../models/Comment"));
const Movie_1 = require("../models/Movie");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { payload, qualification, movieId } = req.body.formData;
    const movie = yield Movie_1.Movie.findById(movieId);
    if (!movie)
        return res.status(404).json({ status: 404, message: "Movie not found" });
    const newComment = yield new Comment_1.default({
        payload,
        qualification,
        date: new Date(),
        movieId: movie._id,
    });
    try {
        const savedComment = yield newComment.save();
        movie.comments = movie.comments.concat(savedComment.id);
        yield movie.save();
        return res.json(savedComment);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.createComment = createComment;
