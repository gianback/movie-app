import React, { useEffect } from "react";
import { useLoaderData, useNavigate, useRoutes } from "react-router-dom";
import MainBanner from "../../components/organisms/MainBanner";
import { Movie } from "../../interfaces/Home";
import { fetchMovies } from "../../utils/fetchMovies";

interface loaderData {
  movies: Movie[];
}

export const HomePage = () => {
  const { movies } = useLoaderData() as loaderData;
  const navigate = useNavigate();
  const token: string = localStorage.getItem("token") || "";
  if (!token) {
    navigate("/auth/login");
  }
  useEffect(() => {}, []);

  return (
    <main>
      <MainBanner movies={movies} />
    </main>
  );
};

export const loaderHomeMovies = async () => {
  const movies = await fetchMovies();
  return { movies };
};
