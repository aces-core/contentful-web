import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@maverick/contentful";

import { LogoFragment } from "../logo/services";
import { SocialsFragment } from "../socials/services";

export const FooterQuery = gql`
  ${SocialsFragment}
  ${LogoFragment}

  query ($id: String!, $preview: Boolean!, $lang: String!) {
    appsCollection(
      where: { appId: $id }
      limit: 1
      preview: $preview
      locale: $lang
    ) {
      items {
        ...Logo
        copyrightText
        ...Socials
      }
    }
  }
`;

export const fetchFooterData = async (
  id: string,
  preview: boolean,
  lang: string,
) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const response = await client.query({
      query: FooterQuery,
      variables: { id, preview, lang },
    });

    return response.data.appsCollection.items[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
