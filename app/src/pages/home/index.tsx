import React from "react";
import { useLoaderData } from "react-router-dom";
import MainBanner from "../../components/organisms/MainBanner";
import { Movie } from "../../interfaces/Home";
import { fetchMovies } from "../../utils/fetchMovies";

interface loaderData {
  movies: Movie[];
}

export const HomePage = () => {
  const { movies } = useLoaderData() as loaderData;
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
