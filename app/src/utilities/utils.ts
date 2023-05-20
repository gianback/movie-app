import { fetchMovieByUser } from "../services/fetch.movies.service";

export const showErrors = (errors, setErrors) => {
  for (const key in errors) {
    setErrors((prevState) => {
      return {
        ...prevState,
        [key]: "This field is required",
      };
    });
  }
};

export const verifyFavoriteMovie = async (
  userId: string,
  setIsFavoriteMovie,
  movieId: string
) => {
  const favoriteMovieList = await fetchMovieByUser(userId);

  const isMovieFavorite = favoriteMovieList.some(({ _id }) => _id === movieId);
  setIsFavoriteMovie(isMovieFavorite);
};
