import create from "zustand";

import { Movie } from "../interfaces/Home";

interface CurrentMovieStore {
  currentMovie: Movie | null;
  setCurrentMovie: (movie: Movie) => void;
}

export const useCurrentMovie = create<CurrentMovieStore>((set) => ({
  currentMovie: null,
  setCurrentMovie(movie: Movie) {
    set((state) => ({
      ...state,
      currentMovie: movie,
    }));
  },
}));
