import { Socket } from "socket.io";
import { JWT_SECRET } from "../utilities/constants";

import { verify } from "jsonwebtoken";
import Comment from "../models/Comment";
import Movie from "../models/Movie";

const socketMiddleware = (socket: any, next: (err?: any) => void) => {
  const { token } = socket;

  verify(token, JWT_SECRET, (err: any, _: any) => {
    if (err) return new Error("Token not valid");
  });
  next();
};

export const movieSocket = (socket: Socket) => {
  socket.use(socketMiddleware);

  socket.on("client:save-comment", async (data) => {
    const { payload } = data;

    const newComment = new Comment({
      content: payload.content,
      qualification: payload.qualification,
      movieId: payload.movieId,
      date: Date.now(),
    });

    const savedComment = await newComment.save();

    await Movie.addCommentToMovie(payload.movieId, savedComment._id);

    const { comments } = await Movie.findById(payload.movieId).populate(
      "comments",
      {
        content: 1,
        qualification: 1,
        date: 1,
        _id: 1,
      }
    );
    // console.log(movieComments);

    socket.emit("server:new-comment", comments);
  });
};
