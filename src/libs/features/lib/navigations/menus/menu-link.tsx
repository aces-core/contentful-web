import { defaultLocale } from "@maverick/i18n";
import { CfLinkProps } from "@maverick/types";
import { FlexBox, Icon, Text } from "@maverick/ui";
import { CfLink } from "@maverick/cf";
import { CSSProperties } from "react";

interface MenuLinkProps {
  link: CfLinkProps;
  title: string;
  externalLinkIcon?: boolean;
  lang: string;
  fontSize?: string;
  style?: CSSProperties;
}

export const MenuLink = ({
  link,
  title,
  externalLinkIcon,
  lang = defaultLocale,
  fontSize,
  style,
}: MenuLinkProps) => {
  return (
    <CfLink
      linkType={link.linkType}
      target={link.target}
      pageLink={link.pageLink}
      customLink={link.customLink}
      lang={lang}
      style={style}
    >
      <FlexBox alignItems="center">
        <Text
          style={{
            fontSize: fontSize,
          }}
        >
          {title}
        </Text>
        {externalLinkIcon && <Icon icon="OpenInNew" size={16} marginLeft={2} />}
      </FlexBox>
    </CfLink>
  );
};
