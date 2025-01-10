import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@maverick/contentful";

export const RichTextSectionQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    richTextSection(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      alignment
      containerWidth
      grayBackground
      bodyCopy {
        json
      }
      border
      sys {
        id
      }
    }
  }
`;

export const fetchRichTextSectionData = async (
  id: string,
  preview = false,
  locale: string = "en-US",
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: RichTextSectionQuery,
      variables: { id, preview, locale },
    });

    return response.data.richTextSection;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
