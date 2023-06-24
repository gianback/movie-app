import create from "zustand";

type GeneralStore = {
  isMenuActive: boolean;
  setIsMenuActive: (isMenuActive: boolean) => void;
  witdhWindow : number;
  setWithWindow: (witdhWindow:number) => void
};
export const useGeneralStore = create<GeneralStore>()((set) => ({
  isMenuActive: false,
  setIsMenuActive: (newState) => set((_state) => ({ isMenuActive: newState })),
  witdhWindow:0,
  setWithWindow: (currentWidth) => set((_state) => ({witdhWindow:currentWidth}))
}));
