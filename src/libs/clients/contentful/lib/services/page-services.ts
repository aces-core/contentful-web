import { defaultLocale, Locale } from "@aces/i18n";

import { cfClient, cfPreviewClient } from "../client";
import {
  DefaultPageBodyQuery,
  DefaultPageHeroQuery,
  PageQuery,
  SpecialtyPageQuery,
} from "../queries/page-queries";

export const fetchPageSysData = async (
  slug: string,
  preview = false,
  locale: Locale = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: PageQuery,
      variables: { slug, preview, locale },
    });

    return pageResponse;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

export const fetchPageData = async (
  slug: string,
  preview = false,
  locale: Locale = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const pageResponse = await client.query({
      query: PageQuery,
      variables: { slug, preview, locale },
    });

    if (!pageResponse.data.pageCollection.items.length) {
      return {
        pageResponse: { data: { pageCollection: { items: [] } } },
        pageHeroResponse: { data: null },
        pageBodyResponse: {
          data: { page: { pageBodyCollection: { items: [] } } },
        },
      };
    }

    const id = pageResponse.data.pageCollection.items[0].sys.id;

    const pageHeroResponse = await client.query({
      query: DefaultPageHeroQuery,
      variables: { id, preview, locale },
    });

    const pageBodyResponse = await client.query({
      query: DefaultPageBodyQuery,
      variables: { id, preview, locale },
    });

    return { pageResponse, pageHeroResponse, pageBodyResponse };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

export const fetchSpecialtyPageData = async (
  specialtyPage: string,
  preview = false,
  locale: Locale = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: SpecialtyPageQuery,
      variables: { specialtyPage, preview, locale },
    });

    if (!pageResponse.data.pageCollection.items.length) {
      return {
        pageResponse: { data: { pageCollection: { items: [] } } },
        pageHeroResponse: { data: null },
        pageBodyResponse: {
          data: { page: { pageBodyCollection: { items: [] } } },
        },
      };
    }

    const id = pageResponse.data.pageCollection.items[0].sys.id;

    const pageHeroResponse = await client.query({
      query: DefaultPageHeroQuery,
      variables: { id, preview, locale },
    });

    const pageBodyResponse = await client.query({
      query: DefaultPageBodyQuery,
      variables: { id, preview, locale },
    });

    return { pageResponse, pageHeroResponse, pageBodyResponse };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};
