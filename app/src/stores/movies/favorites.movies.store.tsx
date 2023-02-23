import { create } from "zustand";
import { Movie } from "../../interfaces/Home";

interface FavoriteStore {
  favoritesMovies: Movie[];
  addToFavoritesMovies: (movie: Movie) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favoritesMovies: [],
  addToFavoritesMovies(movie) {
    set((state) => ({
      favoritesMovies: state.favoritesMovies.concat(movie),
    }));
  },
}));
