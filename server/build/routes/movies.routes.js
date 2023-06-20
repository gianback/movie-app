"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controllers_1 = require("../controllers/movies.controllers");
const express_validator_1 = require("express-validator");
const validateInput_1 = require("../middlewares/validateInput");
const session_1 = require("../middlewares/session");
const router = (0, express_1.Router)();
router.post("/movies", [
    (0, express_validator_1.check)("title", "El titulo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("description", "La descripcion es obligatorio").not().isEmpty(),
    validateInput_1.validateInputs,
], movies_controllers_1.createMovie);
router.get("/movies", session_1.checkJwt, movies_controllers_1.getMovies);
router.get("/movies/:id", session_1.checkJwt, movies_controllers_1.getMoviesById);
router.post("/favorite-movies", session_1.checkJwt, movies_controllers_1.addFavoriteMovie);
router.get("/favorite-movies/:userId", session_1.checkJwt, movies_controllers_1.getMovieByUserId);
exports.default = router;
