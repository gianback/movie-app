import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../stores/auth/authStore";
import { FavoriteMovieList } from "../../components/organisms/FavoriteMovieList";
import Container from "../../components/globals/Container";
import { Movie } from "../../interfaces/Home";
import { fetchMovieByUser } from "../../services/fetch.movies.service";
import { Loader } from "../../components/atoms/Loader";

export default function Favorites() {
  const [favoriteMovieList, setFavoriteMovieList] = useState<Movie[]>([]);
  const { uid } = useAuthStore((state) => state.profile);
  const [isLoading, setIsLoading] = useState(false);
  const getFavoritesMovie = async () => {
    try {
      setIsLoading(true);
      const movieList = await fetchMovieByUser(uid);
      setFavoriteMovieList(movieList);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
        {isLoading ? (
          <Loader />
        ) : (
          <FavoriteMovieList
            updateMovies={getFavoritesMovie}
            movies={favoriteMovieList}
          />
        )}
      </Container>
    </main>
  );
}
