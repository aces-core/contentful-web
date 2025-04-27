import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import { cfClient, cfPreviewClient } from "@aces/contentful";

import { ArticleCardFragment } from "../article-card/services";

export const RelatedArticlesQuery = gql`
  ${ArticleCardFragment}

  query (
    $categories: [String!]
    $excludeSlug: [String!]
    $limit: Int! = 4
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
        ...ArticleCard
      }
    }
  }
`;

export const fetchRelatedArticleData = async (
  categories: string[],
  excludeSlug?: string[],
  limit: number = 4,
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
