import React, { useEffect } from "react";
import { Movie } from "../../interfaces/Home";
import { useCurrentMovie } from "../../stores/currentMovieStore";
import { useFavoriteStore } from "../../stores/favoriteStore";
import "../../styles/home/MainBanner.css";

interface MainMovieBannerProps {
  movie: Movie;
}
const MainMovieBanner = ({ movie }: MainMovieBannerProps) => {
  const { currentMovie, setCurrentMovie } = useCurrentMovie();
  useEffect(() => {
    if (!currentMovie) {
      setCurrentMovie(movie);
    }
  }, []);
  return (
    <>
      {currentMovie && (
        <div className="MainBanner-movie">
          <div
            className={`MainBanner-movie-pictures ${
              currentMovie._id ? "active" : "noActive"
            }`}
          >
            <picture>
              <img
                src={currentMovie.image_primary.secure_url}
                alt={`${currentMovie.title} Image`}
              />
            </picture>
            <picture>
              <img
                src={currentMovie.image_secondary.secure_url}
                alt={`${currentMovie.title} Image`}
              />
            </picture>
          </div>
          <div className="MainBanner-movie-info">
            <h1>{currentMovie.title}</h1>
            <p>{currentMovie.description}</p>
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
