import { defaultLocale } from "@aces/i18n";

import { cfClient, cfPreviewClient } from "../client";
import { EntryQuery } from "../queries/component-queries";

export const fetchEntryData = async (
  id: string,
  preview = true,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const entryResponse = await client.query({
      query: EntryQuery,
      variables: { id, preview, locale },
    });

    return entryResponse.data.entryCollection.items;
  } catch (error) {
    console.error("Error fetching entry data:", error);
    throw error;
  }
};
