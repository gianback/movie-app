import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import mongoose from "mongoose";
import Movie from "../models/Movie";
import { extractPublicIdAndSecureUrl } from "../services/cloudinary";
import User from "../models/User";

export const getMovies = async (_req: Request, res: Response) => {
  //metodo populate es como un join, pero no es transaccional, es decir, si este documento lo estamos pidiendo pero en otro lugar lo editan o borran, igual lo trae. lo correcto es que se debe bloquear
  //1er parametro referencia en plural y el segundo parametro pasamos con 1 a los que si queremos y en 0 a los que no, por defecto trae todos las propiedades.
  const movies = await Movie.find().populate("comments", {
    comment: 1,
    qualification: 1,
    date: 1,
    _id: 0,
  });
  res.send(movies);
};

export const createMovie = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const newMovie = new Movie({
    title,
    description,
  });

  if (req.files) {
    const img_primary = req.files?.image_primary as UploadedFile;
    const resultImgPrimary = await extractPublicIdAndSecureUrl(
      img_primary.tempFilePath
    );
    newMovie.image_primary = resultImgPrimary;

    const img_secondary = req.files?.image_secondary as UploadedFile;

    const resultImgSecondary = await extractPublicIdAndSecureUrl(
      img_secondary.tempFilePath
    );
    newMovie.image_secondary = resultImgSecondary;
  }
  await newMovie.save();

  res.send(newMovie);
};

export const getMoviesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "Movie not found" });
  }
  const movie = await Movie.findById(req.params.id);
  return res.send(movie);
};

export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;

  const newMovie = req.body;

  const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie);
  res.send(movieUpdated);
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "Movie not found" });
  }
  await Movie.findByIdAndDelete(id);

  return res.json({
    msg: "Movie deleted",
  });
};

//Favorite movies

export const addFavoriteMovie = async (req: Request, res: Response) => {
  const { userId, movieId } = req.body;
  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User not found" });

  const isMovieFound = user.favorite_movies.find(
    (movie) => movie.toString() === movieId
  );

  if (isMovieFound) {
    await User.findByIdAndUpdate(
      userId,
      { $pull: { favorite_movies: movieId } },
      { new: true }
    );

    return res.status(200).json({
      message: "Favorite Movie List updated successfully",
    });
  } else {
    user.favorite_movies.push(movieId);
    await user.save();

    return res.status(200).json({
      message: "Película agregada a la lista de favoritos correctamente",
    });
  }
};
