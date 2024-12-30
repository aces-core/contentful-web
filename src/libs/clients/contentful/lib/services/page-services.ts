import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "../client";

export const landingPageQuery = gql`
  query ($slug: String!, $preview: Boolean!) {
    landingPageCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
      items {
        sys {
          id
        }
      }
    }
  }
`;

export const fetchLandingPageSysData = async (
  slug: string,
  preview = false
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: landingPageQuery,
      variables: { slug, preview },
    });

    return pageResponse;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};
