import React from "react";
import { Movie } from "../../interfaces/Home";
import "../../styles/home/MainBanner.css";
import { useAuthStore } from "../../stores/auth/authStore";
import { addFavoriteMovie } from "../../services/fetch.movies.service";
import { useAddFavoriteMovie } from "../../hooks/useAddFavoriteMovie";

interface MainMovieBannerProps {
  movie: Movie;
}
const MainMovieBanner = ({ movie }: MainMovieBannerProps) => {
  const profile = useAuthStore((state) => state.profile);
  const { updateFavoriteMovieList } = useAddFavoriteMovie(movie);
  const handleAddFavoriteMovie = async (movieId: string) => {
    const message = await updateFavoriteMovieList(movieId);
    //TODO: ALERT FOR MESSAGE
    console.log(message);
  };

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
              <button
                className="MainBanner-movie-btn"
                onClick={() => handleAddFavoriteMovie(movie._id)}
              >
                {profile.favorite_movies.find(
                  (fav_movie) => fav_movie._id === movie._id
                )
                  ? "Eliminar de mis favoritos"
                  : "Agregar a mis favoritos"}
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
