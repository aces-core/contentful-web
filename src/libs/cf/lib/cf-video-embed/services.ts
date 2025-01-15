import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@maverick/contentful";
import { defaultLocale } from "@maverick/i18n";

export const VideoEmbedQuery = gql`
  query ($id: String!, $preview: Boolean!) {
    videoEmbed(id: $id, preview: $preview) {
      internalTitle
      embedCode
      sys {
        id
      }
    }
  }
`;

export const fetchVideoEmbedData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: VideoEmbedQuery,
      variables: { id, preview, locale },
    });

    return response.data.videoEmbed;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
