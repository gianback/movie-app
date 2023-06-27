import React, { useEffect, useState } from "react";
import { Movie } from "../../interfaces/Home";
import { Button } from "../atoms";

interface MainMovieBannerProps {
  movie: Movie;
}
export const MainMovieBanner = ({ movie }: MainMovieBannerProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      {movie && (
        <div className={`MainBanner-movie xl:min-h-[65vh] fadeIn`}>
          {windowWidth < 1279 && (
            <h2 className="text-white text-[2.2rem] xl:text-[7rem] md:hidden xl:leading-[8rem] mb-[3rem];">
              {movie.title}
            </h2>
          )}
          <div className={`MainBanner-movie-pictures`}>
            <picture>
              <img
                src={movie.image_primary.secure_url}
                alt={`${movie.title} Image`}
                width={700}
                height={700}
              />
            </picture>
            <picture>
              <img
                src={movie.image_secondary.secure_url}
                alt={`${movie.title} Image`}
                width={700}
                height={700}
              />
            </picture>
          </div>
          <div className="MainBanner-movie-info">
            {windowWidth > 1279 && <h2>{movie.title}</h2>}
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
