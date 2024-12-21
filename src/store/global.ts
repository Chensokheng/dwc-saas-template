import { create } from "zustand";

interface GlobalState {
  selectPriceId: string;
  setPriceId: (priceId: string) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  selectPriceId: "",
  setPriceId: (priceId) => set((state) => ({ selectPriceId: priceId })),
}));
