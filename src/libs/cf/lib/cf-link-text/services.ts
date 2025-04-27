import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient, LinkFragment } from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";

export const LinkTextQuery = gql`
  ${LinkFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    linkText(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      title
      link {
        ...Link
      }
      externalLinkIcon
      sys {
        id
      }
    }
  }
`;

export const fetchLinkTextData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: LinkTextQuery,
      variables: { id, preview, locale },
    });

    return response.data.linkText;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
