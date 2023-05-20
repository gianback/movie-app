import { Manager } from "socket.io-client";

export const manager = new Manager(import.meta.env.VITE_APP_BASE_URL, {
  reconnectionDelayMax: 10000,
});

const socketMovie = manager.socket("/api/movies");

socketMovie.on("connect", () => {
  console.log("Connected to server!");
});
export const updateComments = ({ payload, token }) => {
  socketMovie.emit("client:update-comments", {
    payload,
    token,
  });
};

export const loadUpdateComments = (callback) => {
  socketMovie.on("server:update-comments", callback);
};
