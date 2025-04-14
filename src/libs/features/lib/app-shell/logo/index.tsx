import { defaultLocale } from "@aces/i18n";
import { CfFetchById, ResponsiveSpacing } from "@aces/types";

import { fetchLogoData } from "./services";
import { Logo } from "./render";
import { LogoSkeleton } from "./skeleton";

export type logoVariant = "fullColorLogo" | "knockoutLogo";

interface LogoServerProps extends CfFetchById {
  variant: logoVariant;
  width?: ResponsiveSpacing;
}

export const LogoServer = async ({
  id,
  preview = false,
  lang = defaultLocale,
  variant = "fullColorLogo",
  width = { xs: 180 },
}: LogoServerProps) => {
  let data;

  try {
    data = await fetchLogoData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch example data:", error);
    return <LogoSkeleton />;
  }

  if (!data) {
    return <LogoSkeleton />;
  }

  return (
    <Logo
      variant={variant}
      logos={data}
      width={width}
      lang={lang}
      preview={preview}
    />
  );
};
