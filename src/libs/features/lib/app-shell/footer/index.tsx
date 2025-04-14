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
        fullColorLogo: footerData.fullColorLogo,
        knockoutLogo: footerData.knockoutLogo,
      },
      navigations: navigationsData,
      copyright: footerData.copyrightText,
      socials: {
        facebook: footerData.facebook,
        xTwitter: footerData.xTwitter,
        instagram: footerData.instagram,
        linkedin: footerData.linkedin,
        youtube: footerData.youtube,
      },
      sys: {
        id: footerData.sys.id,
      },
    };
  } catch (error) {
    console.error("Failed to fetch combined header data:", error);
    throw error;
  }

  if (!data) {
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
