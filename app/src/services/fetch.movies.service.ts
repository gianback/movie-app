import { baseApi } from "../utilities/baseApi";

export const fetchMovies = async () => {
  const resp = await baseApi.get("/api/movies");
  return resp.data;
};
