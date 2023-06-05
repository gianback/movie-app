import { Dispatch, SetStateAction, useState } from "react";
import {
  addFavoriteMovie,
  fetchMovieByUser,
} from "../services/fetch.movies.service";
import { useAuthStore } from "../stores/auth/authStore";

export const useFavoriteMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const profile = useAuthStore.getState().profile;

  const updateFavoriteMovieList = async (movieId: string) => {
    const response = await addFavoriteMovie(profile.uid, movieId);
    return response;
  };

  const verifyFavoriteMovie = async (
    userId: string,
    setIsFavoriteMovie: Dispatch<SetStateAction<string>>,
    movieId: string
  ) => {
    try {
      setIsLoading(true);
      const favoriteMovieList = await fetchMovieByUser(userId);

      const isMovieFavorite = favoriteMovieList.some(
        ({ _id }) => _id === movieId
      );
      isMovieFavorite
        ? setIsFavoriteMovie("Eliminar de mis favoritos")
        : setIsFavoriteMovie("Agregar a mis favoritos");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateFavoriteMovieList,
    verifyFavoriteMovie,
    isLoading,
  };
};
