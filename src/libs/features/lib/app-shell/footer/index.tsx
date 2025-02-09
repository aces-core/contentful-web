import { defaultLocale } from "@maverick/i18n";
import { CfFetchById } from "@maverick/types";

import { fetchFooterNavigationsData } from "../../navigations/services";

import { fetchFooterData } from "./services";
import { Footer } from "./render";
import { FooterSkeleton } from "./skeleton";

export const FooterServer = async ({
  id,
  preview = false,
  lang = defaultLocale,
}: CfFetchById) => {
  let data;

  try {
    const [footerData, navigationsData] = await Promise.all([
      fetchFooterData(id, preview, lang),
      fetchFooterNavigationsData(id, preview, lang),
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
      preview={preview}
      lang={lang}
    />
  );
};
