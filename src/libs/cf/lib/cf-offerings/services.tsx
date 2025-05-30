import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import {
  ButtonFragment,
  cfClient,
  cfPreviewClient,
  ImageFragment,
  OfferingItemFragment,
} from "@aces/contentful";

export const OfferingsQuery = gql`
  ${ImageFragment}
  ${ButtonFragment}
  ${OfferingItemFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    offerings(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      media {
        ...Image
      }
      headline
      bodyCopy {
        json
      }
      button {
        ...Button
      }
      offeringItemsCollection {
        items {
          ...OfferingItem
        }
        total
      }
      sys {
        id
      }
    }
  }
`;

export const fetchOfferingsData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: OfferingsQuery,
      variables: { id, preview, locale },
    });

    return response.data.offerings;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
