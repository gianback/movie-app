import create from "zustand";

interface IUser {
  names: string;
  lastName: string;
  email: string;
  img: string;
}

const initial_user: IUser = {
  names: "",
  email: "",
  lastName: "",
  img: "",
};
interface userStoreInterface {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const userStore = create<userStoreInterface>((set) => ({
  user: initial_user,
  setUser: (user) => set((_state) => ({ user })),
}));
