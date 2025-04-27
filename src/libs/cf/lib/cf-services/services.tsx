import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import {
  cfClient,
  cfPreviewClient,
  OfferingItemFragment,
} from "@aces/contentful";

export const ServicesQuery = gql`
  ${OfferingItemFragment}
  query ($id: String!, $preview: Boolean!, $locale: String) {
    services(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      icon
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

export const fetchServicesData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ServicesQuery,
      variables: { id, preview, locale },
    });

    return response.data.services;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
