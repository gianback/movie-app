import React from "react";
import { useLoaderData } from "react-router-dom";

import { Movie } from "../../interfaces/Home";
import { fetchMovies } from "../../services/fetch.movies.service";
import { MainBanner } from "../../components/organisms/MainBanner";
interface LoaderData {
  movies: Movie[];
}

export const HomePage = () => {
  const { movies } = useLoaderData() as LoaderData;

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
