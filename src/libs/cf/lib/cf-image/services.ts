import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient, ImageFragment } from "@maverick/contentful";

export const ImageQuery = gql`
  ${ImageFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    image(id: $id, preview: $preview, locale: $locale) {
      ...Image
    }
  }
`;

export const fetchImageData = async (
  id: string,
  preview = false,
  locale: string = "en-US",
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ImageQuery,
      variables: { id, preview, locale },
    });

    return response.data.image;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
