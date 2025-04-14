import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import { cfClient, cfPreviewClient } from "@aces/contentful";

import { TopResultsCollectionLimit } from "../config";

export const TopSearchResultsQuery = gql`
  query ($query: String!, $preview: Boolean!, $locale: String) {
    pageCollection(
      where: { OR: [{ title_contains: $query }] }
      limit: ${TopResultsCollectionLimit}
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
      limit: ${TopResultsCollectionLimit}
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

export const fetchTopSearchResults = async (
  query: string | null | undefined,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: TopSearchResultsQuery,
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
