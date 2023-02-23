import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import mongoose from "mongoose";
import Movie from "../models/Movie";
import { extractPublicIdAndSecureUrl } from "../services/cloudinary";

export const getMovies = async (_req: Request, res: Response) => {
  //metodo populate es como un join, pero no es transaccional, es decir, si este documento lo estamos pidiendo pero en otro lugar lo editan o borran, igual lo trae. lo correcto es que se debe bloquear
  //1er parametro referencia en plural y el segundo parametro pasamos con 1 a los que si queremos y en 0 a los que no, por defecto trae todos las propiedades.
  const movies = await Movie.find().populate("comments", {
    content: 1,
    commend: 1,
    _id: 0,
  });
  res.send(movies);
};

//Post
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
