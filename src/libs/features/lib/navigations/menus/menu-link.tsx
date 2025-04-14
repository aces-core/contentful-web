import { defaultLocale } from "@aces/i18n";
import { CfLinkProps } from "@aces/types";
import { FlexBox, Icon, Text } from "@aces/ui";
import { CfLink } from "@aces/cf";
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
