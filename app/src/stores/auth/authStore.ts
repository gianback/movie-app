import create from "zustand";
import { persist } from "zustand/middleware";

export interface Profile {
  id: string;
  email: string;
  name: string;
  last_names: string;
  createdAt: Date;
  updatedAt: Date;
}

type State = {
  token: string;
  // profile: Profile;
  profile: any;
  isAuth: boolean;
  errors: any;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  // register: (user: any) => void;
  // logout: () => void;
  // cleanErrors: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: "",
      isAuth: false,
      errors: null,
      setToken: (token: string) => set((state) => ({ token })),
      setProfile: (profile: any) => set((state) => ({ profile })),
    }),
    {
      name: "auth",
    }
  )
);
