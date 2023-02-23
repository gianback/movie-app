import React, { useEffect, useMemo, useState } from "react";

import LayoutApp from "./components/layout/LayoutApp";
import MainBanner from "./components/organisms/MainBanner";
import { Movie } from "./interfaces/Home";
import { fetchMovies } from "./services/fetch.movies.service";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const getMovies = async () => {
    const movies = await fetchMovies();
    setMovies(movies);
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
