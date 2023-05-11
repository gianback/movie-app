import { baseApi } from "../utilities/baseApi";

export const fetchMovies = async () => {
  const resp = await baseApi.get("/api/movies");
  return resp.data;
};

export const addFavoriteMovie = async (userId: string, movieId: string) => {
  const resp = await baseApi.post("/api/favorite-movies", { userId, movieId });
  return resp.data;
};
