import create from "zustand";

type GeneralStore = {
  isMenuActive: boolean;
  setIsMenuActive: (isMenuActive: boolean) => void;
};
export const useGeneralStore = create<GeneralStore>()((set) => ({
  isMenuActive: false,
  setIsMenuActive: (newState) => set((_state) => ({ isMenuActive: newState })),
}));
