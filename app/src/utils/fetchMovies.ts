import axios from "axios";

export const fetchMovies = async () => {
  const resp = await axios.get("http://localhost:3000/api/movies");

  return resp.data;
};
