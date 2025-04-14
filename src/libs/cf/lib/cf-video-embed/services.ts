import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";

export const VideoEmbedFragment = gql`
  fragment VideoEmbed on VideoEmbed {
    internalTitle
    embedCode
    sys {
      id
    }
  }
`;

export const VideoEmbedQuery = gql`
  ${VideoEmbedFragment}

  query ($id: String!, $preview: Boolean!) {
    videoEmbed(id: $id, preview: $preview) {
      ...VideoEmbed
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
