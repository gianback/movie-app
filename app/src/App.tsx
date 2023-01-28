import React, { useEffect, useMemo, useState } from "react";
import MainBanner from "./components/home/MainBanner";

import LayoutApp from "./components/layout/LayoutApp";
import { Movie } from "./interfaces/Home";
import { useCurrentMovie } from "./stores/currentMovieStore";
import { fetchMovies } from "./utils/fetchMovies";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { currentMovie, setCurrentMovie } = useCurrentMovie();
  const getMovies = async () => {
    const movies = await fetchMovies();
    setMovies(movies);
    if (!!currentMovie) {
      setCurrentMovie(movies[0]);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <LayoutApp>
      <div className="App min-h-screen">
        <MainBanner movies={movies} />
      </div>
    </LayoutApp>
  );
};

export default App;
