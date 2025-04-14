import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@aces/contentful";

import { LogoFragment } from "../logo/services";

export const HeaderQuery = gql`
  ${LogoFragment}

  query ($appId: String!, $preview: Boolean!, $lang: String!) {
    appsCollection(
      where: { appId: $appId }
      limit: 1
      preview: $preview
      locale: $lang
    ) {
      items {
        ...Logo
        sys {
          id
        }
      }
    }
  }
`;

export const fetchHeaderData = async (
  appId: string,
  preview: boolean,
  lang: string,
) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const response = await client.query({
      query: HeaderQuery,
      variables: { appId, preview, lang },
    });

    return response.data.appsCollection.items[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
