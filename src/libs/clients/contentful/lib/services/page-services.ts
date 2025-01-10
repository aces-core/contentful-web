import { cfClient, cfPreviewClient } from "../client";
import {
  DefaultPageBodyQuery,
  PageQuery,
  SpecialtyPageQuery,
} from "../queries/page-queries";

export const fetchPageSysData = async (slug: string, preview = false) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: PageQuery,
      variables: { slug, preview },
    });

    return pageResponse;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

export const fetchPageData = async (slug: string, preview = false) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const pageResponse = await client.query({
      query: PageQuery,
      variables: { slug, preview },
    });

    if (!pageResponse.data.pageCollection.items.length) {
      return {
        pageResponse: { data: { pageCollection: { items: [] } } },
        pageBodyResponse: {
          data: { page: { pageBodyCollection: { items: [] } } },
        },
      };
    }

    const id = pageResponse.data.pageCollection.items[0].sys.id;

    const pageBodyResponse = await client.query({
      query: DefaultPageBodyQuery,
      variables: { id, preview },
    });

    return { pageResponse, pageBodyResponse };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

export const fetchSpecialtyPageData = async (
  specialtyPage: string,
  preview = false,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: SpecialtyPageQuery,
      variables: { specialtyPage, preview },
    });

    if (!pageResponse.data.pageCollection.items.length) {
      return {
        pageResponse: { data: { pageCollection: { items: [] } } },
        pageBodyResponse: {
          data: { page: { pageBodyCollection: { items: [] } } },
        },
      };
    }

    const id = pageResponse.data.pageCollection.items[0].sys.id;

    const pageBodyResponse = await client.query({
      query: DefaultPageBodyQuery,
      variables: { id, preview },
    });

    return { pageResponse, pageBodyResponse };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};
