import { gql } from "@apollo/client";

import { defaultLocale } from "@maverick/i18n";
import { cfClient, cfPreviewClient } from "@maverick/contentful";

export const SiteSearchQuery = gql`
  query ($query: String!, $preview: Boolean!, $locale: String) {
    pageCollection(
      where: { OR: [{ title_contains: $query }] }
      limit: 10
      preview: $preview
      locale: $locale
    ) {
      items {
        sys {
          id
        }
      }
    }
    articleCollection(
      where: { OR: [{ title_contains: $query }] }
      limit: 10
      preview: $preview
      locale: $locale
    ) {
      items {
        sys {
          id
        }
      }
    }
  }
`;

export const fetchSearchResults = async (
  query: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: SiteSearchQuery,
      variables: { query, preview, locale },
    });

    return {
      pages: response.data.pageCollection.items,
      articles: response.data.articleCollection.items,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const navigateToSearch = (
  query: string,
  navigate: (url: string) => void,
) => {
  if (query.trim()) {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  }
};
