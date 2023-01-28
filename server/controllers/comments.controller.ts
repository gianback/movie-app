import { Response, Request } from "express";
import Comment from "../models/Comment";
import Movie from "../models/Movie";
// import { MovieInterface } from "../types";

export const getComments = async (_req: Request, res: Response) => {
  const comments = await Comment.find();
  res.send(comments);
};

export const createComment = async (req: Request, res: Response) => {
  const { content, commend, movieId } = req.body;

  const movie = await Movie.findById(movieId);

  const newComment = await new Comment({
    content,
    commend,
    date: new Date(),
    movieId: movie?._id,
  });

  try {
    const savedComment = await newComment.save();

    if (movie) {
      movie.comments = movie.comments.concat(savedComment.id);
      await movie.save();
      res.json(savedComment);
    }
  } catch (error) {
    console.log(error);
  }
};
