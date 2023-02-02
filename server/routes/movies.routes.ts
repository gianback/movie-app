import { Router } from "express";
import {
  deleteMovie,
  getMovies,
  getMoviesById,
  createMovie,
  updateMovie,
} from "../controllers/movies.controllers";
import { check } from "express-validator";
import { validateInputs } from "../middlewares/validateInput";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/movies", checkJwt, getMovies);

router.get("/movies/:id", getMoviesById);

router.post(
  "/movies",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("description", "La descripcion es obligatorio").not().isEmpty(),
    validateInputs,
  ],

  createMovie
);

router.put("/movies/:id", updateMovie);

router.delete("/movies", deleteMovie);

export default router;
