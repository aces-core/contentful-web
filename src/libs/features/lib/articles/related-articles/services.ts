import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import {
  cfClient,
  cfPreviewClient,
  ImageFragment,
  TeamMemberFragment,
} from "@aces/contentful";

export const RelatedArticlesQuery = gql`
  ${ImageFragment}
  ${TeamMemberFragment}

  query (
    $categories: [String!]
    $excludeSlug: [String!]
    $limit: Int! = 2
    $preview: Boolean!
    $locale: String!
  ) {
    articleCollection(
      where: {
        AND: [
          { categories: { slug_in: $categories } }
          { slug_not_in: $excludeSlug }
        ]
      }
      limit: $limit
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
    }
  }
`;

export const fetchRelatedArticleData = async (
  categories: string[],
  excludeSlug?: string[],
  limit: number = 2,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: RelatedArticlesQuery,
      variables: { categories, excludeSlug, limit, preview, locale },
    });
    return pageResponse.data.articleCollection.items;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};
