import { gql } from "@apollo/client";

import {
  ButtonFragment,
  cfClient,
  cfPreviewClient,
} from "@maverick/contentful";
import { defaultLocale } from "@maverick/i18n";

export const BannerQuery = gql`
  ${ButtonFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    banner(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      subhead
      button {
        ...Button
      }
      backgroundColor
      sys {
        id
      }
    }
  }
`;

export const fetchBannerData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: BannerQuery,
      variables: { id, preview, locale },
    });

    return response.data.banner;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
