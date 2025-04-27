import { create } from "zustand";

export type articleListingDisplayTypes = "list" | "grid";

export const DisplayTypeDefault: articleListingDisplayTypes = "grid";

interface ArtilesState {
  articleListingDisplay: articleListingDisplayTypes;
  setArticleListingDisplay: (displayType: articleListingDisplayTypes) => void;
}

export const useArticlesState = create<ArtilesState>((set) => ({
  articleListingDisplay: DisplayTypeDefault,
  setArticleListingDisplay: (displayType) =>
    set({ articleListingDisplay: displayType }),
}));
