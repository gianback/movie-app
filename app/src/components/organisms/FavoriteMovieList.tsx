import React, { SetStateAction } from "react";
import { MovieCard } from "../molecules/MovieCard";
import { Movie } from "../../interfaces/Home";

interface FavoriteMovieListProps {
  movies: Movie[];
  updateMovies: () => void;
}

export function FavoriteMovieList({
  movies,
  updateMovies,
}: FavoriteMovieListProps) {
  return (
    <div className="grid xl:gap-[6rem] md:grid-cols-2 lg:grid-cols-3 ">
      {movies.length === 0 ? (
        <div className="uppercase text-white backdrop:text-center text-3xl font-medium py-12">
          Aun no tienes ninguna pelicula marcada como favorita
        </div>
      ) : (
        movies.map((movie) => (
          <MovieCard
            updateMovies={updateMovies}
            key={movie._id}
            movie={movie}
          />
        ))
      )}
    </div>
  );
}
