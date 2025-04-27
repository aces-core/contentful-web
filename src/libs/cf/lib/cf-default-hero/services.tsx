import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import { cfClient, cfPreviewClient, ImageFragment } from "@aces/contentful";

export const DefaultHeroQuery = gql`
  ${ImageFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    defaultHero(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      subhead
      media {
        ...Image
      }
      sys {
        id
      }
    }
  }
`;

export const fetchDefaultHeroData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: DefaultHeroQuery,
      variables: { id, preview, locale },
    });

    return response.data.defaultHero;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
