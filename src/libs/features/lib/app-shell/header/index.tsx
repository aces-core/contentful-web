import { defaultLocale } from "@aces/i18n";
import { CfFetchById } from "@aces/types";

import { fetchHeaderNavigationsData } from "../../navigations/services";

import { fetchHeaderData } from "./services";
import { Header } from "./render";
import { HeaderSkeleton } from "./skeleton";

export interface HeaderServerProps extends Omit<CfFetchById, "id"> {
  appId: string;
  sticky?: boolean;
}

export const HeaderServer = async ({
  appId,
  preview = false,
  lang = defaultLocale,
  sticky = true,
}: HeaderServerProps) => {
  let data;

  try {
    const [headerData, navigationsData] = await Promise.all([
      fetchHeaderData(appId, preview, lang),
      fetchHeaderNavigationsData(appId, preview, lang),
    ]);

    data = {
      logos: {
        fullColorLogo: headerData.fullColorLogo,
        knockoutLogo: headerData.knockoutLogo,
      },
      navigations: navigationsData,
      sys: {
        id: headerData.sys.id,
      },
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
      sticky={sticky}
      id={data.sys.id}
      preview={preview}
      lang={lang}
    />
  );
};
