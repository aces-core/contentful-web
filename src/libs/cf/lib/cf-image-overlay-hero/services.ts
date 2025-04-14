import { gql } from "@apollo/client";

import {
  ButtonFragment,
  cfClient,
  cfPreviewClient,
  ImageFragment,
} from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";

export const ImageOverlayHeroQuery = gql`
  ${ImageFragment}
  ${ButtonFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    imageOverlayHero(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      subhead
      buttonsCollection(limit: 2) {
        items {
          ...Button
        }
      }
      image {
        ...Image
      }
      fullOverlay
      slim
      sys {
        id
      }
    }
  }
`;

export const fetchImageOverlayHero = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ImageOverlayHeroQuery,
      variables: { id, preview, locale },
    });

    return response.data.imageOverlayHero;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
