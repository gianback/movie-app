import React, { useEffect, useState } from "react";
import { Movie } from "../../interfaces/Home";
import "../../styles/home/MainBanner.css";
import { useAddFavoriteMovie } from "../../hooks/useAddFavoriteMovie";
import { Button } from "../atoms";
import { useAuthStore } from "../../stores/auth/authStore";
import { verifyFavoriteMovie } from "../../utilities/utils";

interface MainMovieBannerProps {
  movie: Movie;
}
const MainMovieBanner = ({ movie }: MainMovieBannerProps) => {
  const { updateFavoriteMovieList } = useAddFavoriteMovie();
  const [isFavoriteMovie, setIsFavoriteMovie] = useState(false);
  const { uid } = useAuthStore((store) => store.profile);

  const handleAddFavoriteMovie = async (movieId: string) => {
    const { action } = await updateFavoriteMovieList(movieId);

    if (action === "added") {
      setIsFavoriteMovie(true);
    } else {
      setIsFavoriteMovie(false);
    }

    //TODO: ALERT FOR MESSAGE
    console.log(action);
  };

  useEffect(() => {
    verifyFavoriteMovie(uid, setIsFavoriteMovie, movie._id);
  }, [movie]);

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
            <div className="flex gap-12">
              <Button
                type="secondary"
                onClick={() => handleAddFavoriteMovie(movie._id)}
              >
                {isFavoriteMovie
                  ? "Eliminar de mis favoritos"
                  : "Agregar a mis favoritos"}
              </Button>
              <Button type="secondary" url={`/movies/${movie._id}`}>
                Escribir un comentario
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainMovieBanner;
