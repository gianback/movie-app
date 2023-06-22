"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainSocket = void 0;
const movie_socket_1 = require("./movie.socket");
const mainSocket = (io) => {
    /*****  Namespaces *****/
    //Movies By Id
    const movieById = io.of("/api/movies");
    movieById.on("connection", (socket) => {
        console.log("connected! backend socket");
        (0, movie_socket_1.movieSocket)(socket);
    });
};
exports.mainSocket = mainSocket;
