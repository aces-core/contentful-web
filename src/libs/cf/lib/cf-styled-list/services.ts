import { gql } from "@apollo/client";
import { cfClient, cfPreviewClient } from "@maverick/contentful";

export const StyledListQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    styledList(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      bulletIcon
      list {
        json
      }
      sys {
        id
      }
    }
  }
`;

export const fetchStyledListData = async (
  id: string,
  preview = false,
  locale: string = "en-US",
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: StyledListQuery,
      variables: { id, preview, locale },
    });

    return response.data.styledList;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
