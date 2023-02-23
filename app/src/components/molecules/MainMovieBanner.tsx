import React from "react";
import { Movie } from "../../interfaces/Home";
import "../../styles/home/MainBanner.css";

interface MainMovieBannerProps {
  movie: Movie;
}
const MainMovieBanner = ({ movie }: MainMovieBannerProps) => {
  return (
    <>
      {movie && (
        <div className="MainBanner-movie">
          <div
            className={`MainBanner-movie-pictures ${
              movie._id ? "active" : "noActive"
            }`}
          >
            <picture>
              <img
                src={movie.image_primary.secure_url}
                alt={`${movie.title} Image`}
              />
            </picture>
            <picture>
              <img
                src={movie.image_secondary.secure_url}
                alt={`${movie.title} Image`}
              />
            </picture>
          </div>
          <div className="MainBanner-movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <div>
              <button className="MainBanner-movie-btn">
                Agregar a mis favoritos
              </button>
              <a className="MainBanner-movie-btn review" href="/">
                Escribir un comentario
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainMovieBanner;
