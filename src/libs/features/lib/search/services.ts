import { defaultLocale, Locale } from "@aces/i18n";
import {
  fetchCfArticleSearchResults,
  fetchCfPageSearchResults,
  fetchCfTopSearchResults,
} from "@aces/contentful";

import { SearchableContentTypes, SearchConfig } from "./config";

export const fetchTopResults = async (
  searchQuery: string,
  preview = false,
  locale: Locale = defaultLocale,
) => {
  try {
    const { pages, articles } = await fetchCfTopSearchResults(
      searchQuery,
      SearchConfig.TopResultsLimits,
      preview,
      locale,
    );

    return [...pages, ...articles].sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error fetching top search results:", error);
    return [];
  }
};

export const fetchSearchResults = async (
  contentType: SearchableContentTypes | null,
  searchQuery: string,
  limit: number,
  offset: number,
  preview = false,
  locale: Locale = defaultLocale,
) => {
  let response;

  switch (contentType) {
    case SearchableContentTypes.Articles:
      response = await fetchCfArticleSearchResults(
        searchQuery,
        limit,
        offset,
        preview,
        locale,
      );

      return response;
    case SearchableContentTypes.Pages:
      response = await fetchCfPageSearchResults(
        searchQuery,
        limit,
        offset,
        preview,
        locale,
      );

      return response;
    default:
      response = await fetchCfPageSearchResults(
        searchQuery,
        limit,
        offset,
        preview,
        locale,
      );

      return response;
  }
};
