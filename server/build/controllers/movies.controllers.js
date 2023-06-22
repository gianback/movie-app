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
exports.getMovieByUserId = exports.addFavoriteMovie = exports.deleteMovie = exports.updateMovie = exports.getMoviesById = exports.createMovie = exports.getMovies = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Movie_1 = require("../models/Movie");
const cloudinary_1 = require("../services/cloudinary");
const User_1 = __importDefault(require("../models/User"));
const getMovies = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //metodo populate es como un join, pero no es transaccional, es decir, si este documento lo estamos pidiendo pero en otro lugar lo editan o borran, igual lo trae. lo correcto es que se debe bloquear
    //1er parametro referencia en plural y el segundo parametro pasamos con 1 a los que si queremos y en 0 a los que no, por defecto trae todos las propiedades.
    const movies = yield Movie_1.Movie.find().populate("comments", {
        content: 1,
        qualification: 1,
        date: 1,
        _id: 0,
    });
    res.send(movies);
});
exports.getMovies = getMovies;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { title, description } = req.body;
    const newMovie = new Movie_1.Movie({
        title,
        description,
    });
    if (req.files) {
        const img_primary = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image_primary;
        const resultImgPrimary = yield (0, cloudinary_1.extractPublicIdAndSecureUrl)(img_primary.tempFilePath);
        newMovie.image_primary = resultImgPrimary;
        const img_secondary = (_b = req.files) === null || _b === void 0 ? void 0 : _b.image_secondary;
        const resultImgSecondary = yield (0, cloudinary_1.extractPublicIdAndSecureUrl)(img_secondary.tempFilePath);
        newMovie.image_secondary = resultImgSecondary;
    }
    yield newMovie.save();
    res.send(newMovie);
});
exports.createMovie = createMovie;
const getMoviesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "invalid Id" });
    }
    const movie = yield Movie_1.Movie.findById(req.params.id).populate("comments", {
        content: 1,
        qualification: 1,
        date: 1,
        _id: 1,
    });
    if (!movie)
        return res.status(404).json({ message: "Movie not found" });
    return res.send(movie);
});
exports.getMoviesById = getMoviesById;
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newMovie = req.body;
    const movieUpdated = yield Movie_1.Movie.findByIdAndUpdate(id, newMovie);
    res.send(movieUpdated);
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "Movie not found" });
    }
    yield Movie_1.Movie.findByIdAndDelete(id);
    return res.json({
        msg: "Movie deleted",
    });
});
exports.deleteMovie = deleteMovie;
//Favorite movies
const addFavoriteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, movieId } = req.body;
    const user = yield User_1.default.findById(userId);
    if (!user)
        return res.status(404).json({ message: "User not found" });
    const isMovieFound = user.favorite_movies.find((movie) => movie.toString() === movieId);
    if (isMovieFound) {
        yield User_1.default.findByIdAndUpdate(userId, { $pull: { favorite_movies: movieId } }, { new: true });
        return res.status(200).json({
            message: "Favorite Movie List updated successfully",
            action: "removed",
        });
    }
    else {
        user.favorite_movies.push(movieId);
        yield user.save();
        return res.status(200).json({
            message: "Favorite Movie was added successfully",
            action: "added",
        });
    }
});
exports.addFavoriteMovie = addFavoriteMovie;
const getMovieByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const user = yield User_1.default.findById(userId).populate("favorite_movies");
    if (!user)
        return res.status(404).json({ message: "User not found" });
    return res.json(user.favorite_movies);
});
exports.getMovieByUserId = getMovieByUserId;
