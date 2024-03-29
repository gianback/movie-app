import React, { useEffect, useState } from "react";

import { useAuthStore } from "../../stores/auth/authStore";
import { FavoriteMovieList } from "../../components/organisms/FavoriteMovieList";
import Container from "../../components/globals/Container";
import { Movie } from "../../interfaces/Home";
import { fetchMovieByUser } from "../../services/fetch.movies.service";

export default function Favorites() {
  const [favoriteMovieList, setFavoriteMovieList] = useState<Movie[]>([]);
  const { uid } = useAuthStore((state) => state.profile);
  const getFavoritesMovie = async () => {
    try {
      const movieList = await fetchMovieByUser(uid);
      setFavoriteMovieList(movieList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavoritesMovie();
    return () => {
      const abort = new AbortController();
      abort.abort();
    };
  }, []);

  return (
    <main className="min-h-[83.5vh] bg-primary py-20">
      <Container>
        <FavoriteMovieList
          updateMovies={getFavoritesMovie}
          movies={favoriteMovieList}
        />
      </Container>
    </main>
  );
}
