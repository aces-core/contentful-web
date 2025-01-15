import { gql } from "@apollo/client";

import { defaultLocale, Locale } from "@maverick/i18n";
import {
  cfClient,
  cfPreviewClient,
  ImageFragment,
  TeamMemberFragment,
} from "@maverick/contentful";

const ArticlesQuery = gql`
  ${ImageFragment}
  ${TeamMemberFragment}

  query ($limit: Int!, $offset: Int!, $preview: Boolean!, $locale: String!) {
    articleCollection(
      limit: $limit
      skip: $offset
      preview: $preview
      locale: $locale
    ) {
      items {
        title
        slug
        publishDate
        featuredImage {
          ...Image
        }
        author {
          ...TeamMember
        }
        sys {
          id
        }
      }
      total
    }
  }
`;

export async function fetchArticles(
  limit: number,
  offset: number,
  preview = false,
  locale: Locale = defaultLocale,
) {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ArticlesQuery,
      variables: { limit, offset, preview, locale },
    });

    const { items, total } = response.data.articleCollection;

    return { items, total };
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
