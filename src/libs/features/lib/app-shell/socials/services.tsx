import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import { cfClient, cfPreviewClient } from "@aces/contentful";

export const SocialsFragment = gql`
  fragment Socials on Apps {
    facebook
    xTwitter
    instagram
    linkedin
    youtube
  }
`;

export const SocialsQuery = gql`
  query ($id: String!, $preview: Boolean!, $lang: String!) {
    appsCollection(
      where: { appId: $id }
      limit: 1
      preview: $preview
      locale: $lang
    ) {
      items {
        ...Socials
      }
    }
  }
`;

export const fetchSocialsData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: SocialsQuery,
      variables: { id, preview, locale },
    });

    return response.data.socials;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
