import { Socket } from "socket.io";
import { JWT_SECRET } from "../utilities/constants";

import { verify } from "jsonwebtoken";
import Comment from "../models/Comment";

const socketMiddleware = (socket: any, next: (err?: any) => void) => {
  const { token } = socket;

  verify(token, JWT_SECRET, (err: any, _: any) => {
    if (err) return new Error("Token not valid");
  });
  next();
};

export const movieSocket = (socket: Socket) => {
  socket.use(socketMiddleware);
  socket.on("client:update-comments", async (data) => {
    const { payload } = data;

    const newComment = new Comment(payload);
    await newComment.save();

    socket.emit("server:newComment", newComment.movieId);

    // console.log(payload, token);
    // verify(token, (err, resp) => {
    //   if (err) return;
    // });
    // socket.emit('server:update-comments', upatedComents);
    // console.log("data in backend", data);
  });
};
