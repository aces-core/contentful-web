import { defaultLocale } from "@aces/i18n";
import { CfFetchById } from "@aces/types";

import { fetchFooterNavigationsData } from "../../navigations/services";

import { fetchFooterData } from "./services";
import { Footer } from "./render";
import { FooterSkeleton } from "./skeleton";

export interface FooterServerProps extends Omit<CfFetchById, "id"> {
  appId: string;
}

export const FooterServer = async ({
  appId,
  preview = false,
  lang = defaultLocale,
}: FooterServerProps) => {
  let data;

  try {
    const [footerData, navigationsData] = await Promise.all([
      fetchFooterData(appId, preview, lang),
      fetchFooterNavigationsData(appId, preview, lang),
    ]);

    data = {
      logos: {
        appName: footerData?.appName ?? "",
        fullColorLogo: footerData?.fullColorLogo ?? null,
        knockoutLogo: footerData?.knockoutLogo ?? null,
      },
      navigations: navigationsData ?? null,
      copyright: footerData?.copyrightText ?? null,
      socials: {
        facebook: footerData?.facebook ?? null,
        xTwitter: footerData?.xTwitter ?? null,
        instagram: footerData?.instagram ?? null,
        linkedin: footerData?.linkedin ?? null,
        youtube: footerData?.youtube ?? null,
      },
      sys: {
        id: footerData?.sys?.id ?? "",
      },
    };
  } catch (error) {
    console.error("Failed to fetch combined header data:", error);
    throw error;
  }

  if (!data || !data.sys.id) {
    return <FooterSkeleton />;
  }

  return (
    <Footer
      logos={data.logos}
      navigations={data.navigations}
      copyright={data.copyright}
      socials={data.socials}
      id={data.sys.id}
      preview={preview}
      lang={lang}
    />
  );
};
