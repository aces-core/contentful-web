import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@aces/contentful";

import { LogoFragment } from "../logo/services";
import { SocialsFragment } from "../socials/services";

export const FooterQuery = gql`
  ${SocialsFragment}
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
        copyrightText
        ...Socials
        sys {
          id
        }
      }
    }
  }
`;

export const fetchFooterData = async (
  appId: string,
  preview: boolean,
  lang: string,
) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const response = await client.query({
      query: FooterQuery,
      variables: { appId, preview, lang },
    });

    return response.data.appsCollection.items[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
