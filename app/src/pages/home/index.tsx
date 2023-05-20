import React from "react";
import { useLoaderData } from "react-router-dom";
import MainBanner from "../../components/organisms/MainBanner";
import { Movie } from "../../interfaces/Home";
import { fetchMovies } from "../../services/fetch.movies.service";
interface LoaderData {
  movies: Movie[];
}

export const HomePage = () => {
  const { movies } = useLoaderData() as LoaderData;

  return (
    <>
      <MainBanner movies={movies} />
    </>
  );
};

export const loaderHomeMovies = async () => {
  const movies = await fetchMovies();
  return { movies };
};
