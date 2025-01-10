import { defaultLocale } from "@maverick/i18n";
import { CfFetchById } from "@maverick/types";

import { fetchNavigationsData } from "../navigations/services";

import { fetchHeaderData } from "./services";
import { Header } from "./render";
import { HeaderSkeleton } from "./skeleton";

export const HeaderServer = async ({
  id,
  preview = false,
  lang = defaultLocale,
}: CfFetchById) => {
  let data;

  try {
    const [headerData, navigationsData] = await Promise.all([
      fetchHeaderData(id, preview, lang),
      fetchNavigationsData(id, preview, lang),
    ]);

    data = {
      logos: {
        fullColorLogo: headerData.fullColorLogo,
        knockoutLogo: headerData.knockoutLogo,
      },
      navigations: navigationsData,
    };
  } catch (error) {
    console.error("Failed to fetch combined header data:", error);
    throw error;
  }

  if (!data) {
    return <HeaderSkeleton />;
  }

  return (
    <Header
      logos={data.logos}
      navigations={data.navigations}
      preview={preview}
      lang={lang}
    />
  );
};
