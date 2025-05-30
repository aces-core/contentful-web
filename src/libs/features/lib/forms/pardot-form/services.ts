import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";

export const PardotQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    pardotForm(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      pardotFormUrl
      sys {
        id
      }
    }
  }
`;

export const fetchPardotFormData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: PardotQuery,
      variables: { id, preview, locale },
    });

    return response.data.pardotForm;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
