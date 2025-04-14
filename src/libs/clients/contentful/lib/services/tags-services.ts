import { defaultLocale } from "@aces/i18n";

import { cfClient, cfPreviewClient } from "../client";
import { AllCategoriesQuery } from "../queries/tags-queries";

export const fetchAllCategories = async (
  preview = false,
  locale = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: AllCategoriesQuery,
      variables: { preview, locale },
    });

    return response.data.categoriesCollection;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};
