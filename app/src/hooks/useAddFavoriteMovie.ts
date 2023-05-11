import { Movie } from "../interfaces/Home";
import { addFavoriteMovie } from "../services/fetch.movies.service";
import { useAuthStore } from "../stores/auth/authStore";

export const useAddFavoriteMovie = (movie: Movie) => {
  const profile = useAuthStore.getState().profile;
  const setProfile = useAuthStore.getState().setProfile;

  const updateFavoriteMovieList = async (movieId: string) => {
    const response = await addFavoriteMovie(profile.uid, movieId);
    const { favorite_movies, ...userData } = profile;
    if (profile.favorite_movies.find((movie) => movie._id === movieId)) {
      setProfile({
        ...userData,
        favorite_movies: profile.favorite_movies.filter(
          (movie) => movie._id !== movieId
        ),
      });
    } else {
      setProfile({
        ...userData,
        favorite_movies: [...profile.favorite_movies, movie],
      });
    }
    return response.message;
  };

  return {
    updateFavoriteMovieList,
  };
};
