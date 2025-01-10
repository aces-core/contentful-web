import { gql } from "@apollo/client";

import { cfClient } from "@maverick/contentful";

export const RichTextRenderQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String!) {
    entryCollection(
      where: { sys: { id: $id } }
      limit: 1
      preview: $preview
      locale: $locale
    ) {
      items {
        sys {
          id
        }
        __typename
      }
    }
  }
`;

export const fetchRichTextEmbedEntry = async (
  id: string,
  preview = false,
  locale: string = "en-US",
) => {
  try {
    const response = await cfClient.query({
      query: RichTextRenderQuery,
      variables: { id, preview, locale },
    });

    if (response.data.entryCollection.items.length) {
      return response.data.entryCollection.items[0];
    }

    return null;
  } catch (error) {
    console.error(`Error fetching entry with ID ${id}:`, error);
    return null;
  }
};
