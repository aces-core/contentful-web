import { defaultLocale } from "@aces/i18n";
import { CfImageProps, ResponsiveSpacing } from "@aces/types";
import { Box, H5 } from "@aces/ui";
import { CfImage } from "@aces/cf";

import { logoVariant } from ".";

export type LogosType = {
  appName: string;
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

  if (!logo) {
    return (
      <Box>
        <H5 component={"p"}>{logos.appName}</H5>
      </Box>
    );
  }

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
