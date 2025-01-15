import { gql } from "@apollo/client";

import {
  ButtonFragment,
  cfClient,
  cfPreviewClient,
} from "@maverick/contentful";
import { defaultLocale } from "@maverick/i18n";

export const LockupQuery = gql`
  ${ButtonFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    lockup(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      bodyCopy {
        json
      }
      buttonsCollection(limit: 2) {
        items {
          ...Button
        }
      }
      media {
        __typename
        ... on Image {
          sys {
            id
          }
        }
        ... on VideoEmbed {
          sys {
            id
          }
        }
      }
      mediaSize
      mediaAlignment
      sys {
        id
      }
    }
  }
`;

export const fetchLockup = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: LockupQuery,
      variables: { id, preview, locale },
    });
    return response.data.lockup;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
