import React from "react";
import { MovieCard } from "../molecules/MovieCard";
import { useAuthStore } from "../../stores/auth/authStore";

export function FavoriteMovieList() {
  const { favorite_movies } = useAuthStore((state) => state.profile);

  return (
    <div className="grid xl:gap-[6rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favorite_movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
}
