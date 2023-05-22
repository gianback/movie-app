import { Manager } from "socket.io-client";

export const manager = new Manager(import.meta.env.VITE_APP_BASE_URL, {
  reconnectionDelayMax: 10000,
});

const socketMovie = manager.socket("/api/movies");

socketMovie.on("connect", () => {
  console.log("Connected to server!");
});

export const saveComment = ({ payload, token }) => {
  socketMovie.emit("client:save-comment", {
    payload,
    token,
  });
};

export const loadComments = (setCommentList) => {
  socketMovie.on("server:new-comment", (commentList) => {
    console.log(commentList);
    setCommentList(commentList);
  });
};
