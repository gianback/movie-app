import create from "zustand";

export interface IUser {
  names: string;
  lastName: string;
  email: string;
  picture: string;
}

const initial_user: IUser = {
  names: "",
  email: "",
  lastName: "",
  picture: "",
};
interface userStoreInterface {
  user: IUser;
  setUser: (user: IUser) => void;
  isUserAuth: boolean;
  setIsUserAuth: (isUserAuth: boolean) => void;
}

export const userStore = create<userStoreInterface>((set) => ({
  user: initial_user,
  setUser: (user) => set(() => ({ user })),
  isUserAuth: false,
  setIsUserAuth: (isUserAuth) => set(() => ({ isUserAuth })),
}));
