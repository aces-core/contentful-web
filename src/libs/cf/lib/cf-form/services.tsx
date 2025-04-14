import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import {
  cfClient,
  cfPreviewClient,
  ImageFragment,
  HubSpotFormFragment,
  PardotFormFragment,
} from "@aces/contentful";

export const FormQuery = gql`
  ${ImageFragment}
  ${HubSpotFormFragment}
  ${PardotFormFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    form(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      form {
        ...HubSpotForm
        ...PardotForm
      }
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

export const fetchFormData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: FormQuery,
      variables: { id, preview, locale },
    });

    return response.data.form;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
