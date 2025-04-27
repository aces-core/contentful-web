import { defaultLocale, Locale } from "@aces/i18n";
import { cfClient, cfPreviewClient } from "@aces/contentful";

import {
  SearchArticlesQuery,
  SearchPagesQuery,
  TopSearchResultsQuery,
} from "../queries/search-queries";

export const fetchCfTopSearchResults = async (
  query: string | null | undefined,
  limit: 1 | 2,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: TopSearchResultsQuery,
      variables: { query, limit, preview, locale },
    });

    return {
      pages: response.data.pageCollection.items.map((item: any) => ({
        ...item,
        excerpt: item.seo.metaDescription || "",
      })),
      articles: response.data.articleCollection.items,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchCfPageSearchResults = async (
  query: string,
  limit: number,
  offset: number,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: SearchPagesQuery,
      variables: { query, limit, offset, preview, locale },
    });

    return {
      ...response.data.pageCollection,
      items: response.data.pageCollection.items.map((item: any) => ({
        ...item,
        excerpt: item.seo?.metaDescription || "",
      })),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchCfArticleSearchResults = async (
  query: string,
  limit: number,
  offset: number,
  preview = false,
  locale: Locale = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: SearchArticlesQuery,
      variables: { query, limit, offset, preview, locale },
    });

    return response.data.articleCollection;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
