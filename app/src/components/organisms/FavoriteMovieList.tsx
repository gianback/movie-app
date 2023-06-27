import React, { SetStateAction } from "react";
import { MovieCard } from "../molecules/MovieCard";
import { Movie } from "../../interfaces/Home";
import { Toaster } from "sonner";

interface FavoriteMovieListProps {
  movies: Movie[];
  updateMovies: () => void;
}

export function FavoriteMovieList({
  movies,
  updateMovies,
}: FavoriteMovieListProps) {
  return (
    <>
      {movies.length !== 0 ? (
        <div className="grid gap-[2rem] xl:gap-[6rem] sm:grid-cols-2 lg:grid-cols-3 ">
          {movies.map((movie) => (
            <MovieCard
              updateMovies={updateMovies}
              key={movie._id}
              movie={movie}
            />
          ))}
        </div>
      ) : (
        <div className="uppercase text-white text-center text-3xl font-medium py-12">
          Aun no tienes ninguna pelicula marcada como favorita
        </div>
      )}
      <Toaster position="bottom-right" richColors />
    </>
  );
}
