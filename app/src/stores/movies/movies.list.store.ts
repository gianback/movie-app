import create from "zustand/react";
import { Movie } from "../../interfaces/Home";
import { Dispatch, SetStateAction } from "react";

interface MovieListStoreState {
  movieList: Movie[];
  setMovieList: (movieList: Movie[]) => void;
}

export const movieListStore = create<MovieListStoreState>((set) => ({
  movieList: [],
  setMovieList: (movieList) => set((state) => ({ movieList })),
}));
