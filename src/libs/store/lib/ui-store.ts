import { create } from "zustand";

interface UIState {
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  mobileMenuSlide: boolean;
  activeMenuSlide: any;
  activeModal: string | null;
  setSearchOpen: (isOpen: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  setMobileMenuSlide: (slide: boolean) => void;
  setActiveMenuSlide: (item: any) => void;
  setActiveModal: (modalId: any) => void;
}

export const useUIState = create<UIState>((set) => ({
  searchOpen: false,
  mobileMenuOpen: false,
  mobileMenuSlide: false,
  activeMenuSlide: null,
  activeModal: null,
  setSearchOpen: (isOpen) => set({ searchOpen: isOpen }),
  setMobileMenuOpen: (isOpen) => set({ mobileMenuOpen: isOpen }),
  setMobileMenuSlide: (slide) => set({ mobileMenuSlide: slide }),
  setActiveMenuSlide: (item) => set({ activeMenuSlide: item }),
  setActiveModal: (modalId) => set({ activeModal: modalId }),
}));
