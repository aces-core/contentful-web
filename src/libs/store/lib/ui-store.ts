import { create } from "zustand";

interface UIState {
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  setSearchOpen: (isOpen: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export const useUIState = create<UIState>((set) => ({
  searchOpen: false,
  mobileMenuOpen: false,
  setSearchOpen: (isOpen) => set({ searchOpen: isOpen }),
  setMobileMenuOpen: (isOpen) => set({ mobileMenuOpen: isOpen }),
}));
