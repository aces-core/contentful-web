import { defaultLocale } from "@maverick/i18n";
import { CfImageProps, ResponsiveSpacing } from "@maverick/types";
import { Box } from "@maverick/ui";
import { CfImage } from "@maverick/cf";

import { logoVariant } from ".";

export type LogosType = {
  knockoutLogo: CfImageProps;
  fullColorLogo: CfImageProps;
};

interface LogoProps {
  variant: logoVariant;
  logos: LogosType;
  width?: ResponsiveSpacing;
  lang: string;
  preview: boolean;
}

export const Logo = ({
  variant,
  logos,
  width = { xs: 180 },
  lang = defaultLocale,
  preview = false,
}: LogoProps) => {
  const logo =
    variant === "knockoutLogo" ? logos.knockoutLogo : logos.fullColorLogo;

  return (
    <Box width={width}>
      <CfImage
        id={logo.sys?.id || ""}
        internalTitle={logo.internalTitle}
        nested={true}
        responsive={true}
        image={logo.image}
        altText={logo.altText}
        lang={lang}
        preview={preview}
        __typename={logo.__typename}
      />
    </Box>
  );
};
