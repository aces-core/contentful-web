import { defaultLocale, getLocale } from "@maverick/i18n";
import { CfFetchById } from "@maverick/types";

import { fetchHeaderData } from "./service";
import { Header } from "./render";
import { HeaderSkeleton } from "./skeleton";

export const HeaderServer = async ({
  id,
  preview = false,
  lang = defaultLocale,
}: CfFetchById) => {
  let data;

  try {
    data = await fetchHeaderData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch example data:", error);
    return <HeaderSkeleton />;
  }

  if (!data) {
    return <HeaderSkeleton />;
  }

  const translations = await getLocale(lang, "common");

  return <Header translations={translations} />;
};
