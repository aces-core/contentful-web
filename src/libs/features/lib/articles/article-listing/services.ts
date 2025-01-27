import { gql } from "@apollo/client";

import { defaultLocale, Locale } from "@maverick/i18n";
import {
  cfClient,
  cfPreviewClient,
  ImageFragment,
  TeamMemberFragment,
} from "@maverick/contentful";

import { OrderTypes, DefaultOrder } from "../config";

const ArticlesQuery = gql`
  ${ImageFragment}
  ${TeamMemberFragment}

  query (
    $categories: [String!]
    $limit: Int!
    $offset: Int!
    $order: [ArticleOrder]!
    $preview: Boolean!
    $locale: String!
  ) {
    articleCollection(
      where: { categories: { slug_in: $categories } }
      limit: $limit
      skip: $offset
      order: $order
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
  categories: string[] | null,
  limit: number,
  offset: number,
  order: OrderTypes = DefaultOrder,
  preview = false,
  locale: Locale = defaultLocale,
) {
  const client = preview ? cfPreviewClient : cfClient;

  if (Array.isArray(categories) && categories.length === 0) {
    categories = null;
  }

  if (!Object.values(OrderTypes).includes(order)) {
    order = DefaultOrder;
  }

  try {
    const response = await client.query({
      query: ArticlesQuery,
      variables: { categories, limit, offset, order, preview, locale },
    });

    const { items, total } = response.data.articleCollection;

    return { items, total };
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
