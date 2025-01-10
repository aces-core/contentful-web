import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient, ImageFragment } from "@maverick/contentful";

export const LogoQuery = gql`
  ${ImageFragment}

  query ($id: String!, $preview: Boolean!, $lang: String!) {
    appsCollection(
      where: { appId: $id }
      limit: 1
      preview: $preview
      locale: $lang
    ) {
      items {
        fullColorLogo {
          ...Image
        }
        knockoutLogo {
          ...Image
        }
      }
    }
  }
`;

export const fetchLogoData = async (
  id: string,
  preview: boolean,
  lang: string,
) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const response = await client.query({
      query: LogoQuery,
      variables: { id, preview, lang },
    });

    return {
      fullColorLogo: response.data.appsCollection.items[0].fullColorLogo,
      knockoutLogo: response.data.appsCollection.items[0].knockoutLogo,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
