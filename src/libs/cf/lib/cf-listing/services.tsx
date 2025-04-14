import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import { cfClient, cfPreviewClient } from "@aces/contentful";

export const ListingQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    listing(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      listingType
      gridColumnCount
      listItemsCollection {
        items {
          ... on Card {
            sys {
              id
            }
          }
          ... on Image {
            sys {
              id
            }
          }
          ... on RichTextSection {
            sys {
              id
            }
          }
        }
      }
      sys {
        id
      }
    }
  }
`;

export const fetchListingData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ListingQuery,
      variables: { id, preview, locale },
    });

    return response.data.listing;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
