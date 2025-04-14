import { gql } from "@apollo/client";

import { cfClient } from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";

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
      }
    }
  }
`;

export const fetchRichTextEmbedEntry = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
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
