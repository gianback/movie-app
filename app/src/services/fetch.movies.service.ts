import { useAuthStore } from "../stores/auth/authStore";
import { baseApi } from "../utilities/baseApi";

const setIsAuth = useAuthStore.getState().setIsAuth;

export const fetchMovies = async () => {
  try {
    const resp = await baseApi.get("/api/movies");
    return resp.data;
  } catch (error) {
    setIsAuth(false);
    return [];
  }
};

export const fetchMovieById = async (id: string) => {
  try {
    const resp = await baseApi.get(`/api/movies/${id}`);
    return resp.data;
  } catch (error) {
    setIsAuth(false);
  }
};

export const addFavoriteMovie = async (userId: string, movieId: string) => {
  try {
    const resp = await baseApi.post("/api/favorite-movies", {
      userId,
      movieId,
    });
    return resp.data;
  } catch (error) {
    setIsAuth(false);
  }
};

export const fetchMovieByUser = async (userId: string) => {
  try {
    const resp = await baseApi.get(`/api/favorite-movies/${userId}`);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
