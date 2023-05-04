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
  // useEffect(() => {
  //   const token = localStorage.getItem("token") || "";
  //   if (!token) {
  //     navigate("/auth/login");
  //   }
  // }, []);

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
