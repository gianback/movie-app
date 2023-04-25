import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import MainBanner from "../../components/organisms/MainBanner";
import { Movie } from "../../interfaces/Home";
import { fetchMovies } from "../../services/fetch.movies.service";

interface LoaderData {
  movies: Movie[];
}

export const HomePage = () => {
  const navigate = useNavigate();
  const { movies } = (useLoaderData() as LoaderData) || [];
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (!token) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <main>
      <MainBanner movies={movies} />
    </main>
  );
};

export const loaderHomeMovies = async () => {
  const token: string = localStorage.getItem("token") || "";
  if (!token) {
    return { movies: [] };
  }

  const movies = await fetchMovies();
  return { movies };
};
