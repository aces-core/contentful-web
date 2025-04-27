import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import { cfClient, cfPreviewClient, ImageFragment } from "@aces/contentful";

export const FeaturedArticlesQuery = gql`
  ${ImageFragment}

  query ($preview: Boolean!, $locale: String!) {
    articleCollection(
      where: { featured: true }
      limit: 5
      preview: $preview
      locale: $locale
    ) {
      items {
        title
        slug
        publishDate
        excerpt
        bodyCopy {
          json
        }
        featuredImage {
          ...Image
        }
        sys {
          id
        }
      }
    }
  }
`;

export const fetchFeaturedArticlesData = async (
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: FeaturedArticlesQuery,
      variables: { preview, locale },
    });
    return pageResponse.data.articleCollection.items;
  } catch (error) {
    console.log("Error fetching page data:", error);
    throw error;
  }
};
