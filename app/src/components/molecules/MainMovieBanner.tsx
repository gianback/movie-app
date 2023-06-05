import React from "react";
import { Movie } from "../../interfaces/Home";
import { Button } from "../atoms";

interface MainMovieBannerProps {
  movie: Movie;
}
export const MainMovieBanner = ({ movie }: MainMovieBannerProps) => {
  return (
    <>
      {movie && (
        <div className={`MainBanner-movie fadeIn`}>
          <div className={`MainBanner-movie-pictures`}>
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
            <div className="flex gap-12 mt-[3rem]">
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
