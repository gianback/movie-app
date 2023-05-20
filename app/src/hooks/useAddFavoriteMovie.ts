import { addFavoriteMovie } from "../services/fetch.movies.service";
import { useAuthStore } from "../stores/auth/authStore";

export const useAddFavoriteMovie = () => {
  const profile = useAuthStore.getState().profile;

  const updateFavoriteMovieList = async (movieId: string) => {
    const response = await addFavoriteMovie(profile.uid, movieId);
    return response;
  };

  return {
    updateFavoriteMovieList,
  };
};
