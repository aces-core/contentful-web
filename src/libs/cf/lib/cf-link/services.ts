import { gql } from "@apollo/client";

import { cfClient, LinkFragment } from "@maverick/contentful";

export const LinkQuery = gql`
  ${LinkFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    link(id: $id, preview: $preview, locale: $locale) {
      ...Link
    }
  }
`;

export const fetchLinkData = async (
  id: string,
  preview = false,
  locale: string = "en-US"
) => {
  try {
    const response = await cfClient.query({
      query: LinkQuery,
      variables: { id, preview, locale },
    });

    return response.data.link;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
