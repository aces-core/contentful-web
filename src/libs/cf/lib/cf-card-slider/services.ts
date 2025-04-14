import { gql } from "@apollo/client";

import { ImageFragment, cfClient, cfPreviewClient } from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";

export const CardSliderQuery = gql`
  ${ImageFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    cardSlider(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      bodyCopy {
        json
      }
      cardsCollection(limit: 12) {
        items {
          cardType
          headline
          bodyCopy {
            json
          }
          image {
            ...Image
          }
          imageSize
        }
      }
      sys {
        id
      }
    }
  }
`;
export const fetchCardSlider = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: CardSliderQuery,
      variables: { id, preview, locale },
    });

    return response.data.cardSlider;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
