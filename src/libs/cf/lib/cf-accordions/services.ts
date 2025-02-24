import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@maverick/contentful";
import { defaultLocale } from "@maverick/i18n";

export const AccordionsQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    accordions(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      bodyCopy {
        json
      }
      accordionsCollection {
        items {
          internalTitle
          headline
          bodyCopy {
            json
          }
          sys {
            id
          }
        }
      }
      sys {
        id
      }
    }
  }
`;

export const fetchAccordionsData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: AccordionsQuery,
      variables: { id, preview, locale },
    });

    return response.data.accordions;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
