import { gql } from "@apollo/client";

import { ImageFragment, cfClient, cfPreviewClient } from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";

export const CardQuery = gql`
  ${ImageFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    card(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      cardType
      headline
      bodyCopy {
        json
      }
      image {
        ...Image
      }
      imageSize
      sys {
        id
      }
    }
  }
`;

export const fetchCardData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: CardQuery,
      variables: { id, preview, locale },
    });

    return response.data.card;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
