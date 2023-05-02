import axios from "axios";

export const fetchMovies = async () => {
  const token = localStorage.getItem("token") || "";
  const resp = await axios.get("http://localhost:3000/api/movies", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp.data;
};
