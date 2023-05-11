import create from "zustand";
import { persist } from "zustand/middleware";
import { Movie } from "../../interfaces/Home";

const INITIAL_PROFILE: Profile = {
  uid: "",
  email: "",
  names: "",
  last_names: "",
  favorite_movies: [],
};
export interface Profile {
  uid: string;
  email: string;
  names: string;
  last_names: string;
  favorite_movies: Movie[];
}

type State = {
  token: string;
  // profile: Profile;
  profile: Profile;
  isAuth: boolean;
  errors: any;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  setIsAuth: (isAuth: boolean) => void;
  // logout: () => void;
  // register: (user: any) => void;
  // cleanErrors: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: INITIAL_PROFILE,
      isAuth: false,
      errors: null,
      setToken: (token: string) => set((state) => ({ token })),
      setProfile: (profile: Profile) => set((state) => ({ profile })),
      setIsAuth: (isAuth: boolean) => set((state) => ({ isAuth })),
    }),
    {
      name: "auth",
    }
  )
);
