import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import {
  ButtonFragment,
  cfClient,
  cfPreviewClient,
  ImageFragment,
} from "@aces/contentful";

export const CalloutQuery = gql`
  ${ButtonFragment}
  ${ImageFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    callout(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      bodyCopy {
        json
      }
      tags
      buttonsCollection {
        items {
          ...Button
        }
      }
      media {
        ...Image
      }
      sys {
        id
      }
    }
  }
`;

export const fetchCalloutData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: CalloutQuery,
      variables: { id, preview, locale },
    });

    return response.data.callout;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
