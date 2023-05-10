import { Router } from "express";
import {
  getMovies,
  getMoviesById,
  createMovie,
  addFavoriteMovie,
} from "../controllers/movies.controllers";
import { check } from "express-validator";
import { validateInputs } from "../middlewares/validateInput";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.post(
  "/movies",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("description", "La descripcion es obligatorio").not().isEmpty(),
    validateInputs,
  ],

  createMovie
);

router.get("/movies", checkJwt, getMovies);

router.get("/movies/:id", getMoviesById);

router.post("/favorite-movies", addFavoriteMovie);

export default router;
