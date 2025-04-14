import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import {
  CategoriesFragment,
  cfClient,
  cfPreviewClient,
  ImageFragment,
  TeamMemberFragment,
} from "@aces/contentful";

export const ArticlePageQuery = gql`
  ${ImageFragment}
  ${TeamMemberFragment}
  ${CategoriesFragment}

  query ($slug: String!, $preview: Boolean!, $locale: String!) {
    articleCollection(
      where: { slug: $slug }
      limit: 1
      preview: $preview
      locale: $locale
    ) {
      items {
        title
        slug
        publishDate
        featuredImage {
          sys {
            id
          }
        }
        author {
          ...TeamMember
        }
        categoriesCollection {
          items {
            ...Categories
          }
        }
        bodyCopy {
          json
        }
        seo
        sys {
          id
        }
      }
    }
  }
`;

export const fetchArticlePageData = async (
  slug: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: ArticlePageQuery,
      variables: { slug, preview, locale },
    });

    return pageResponse.data.articleCollection.items[0];
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};
