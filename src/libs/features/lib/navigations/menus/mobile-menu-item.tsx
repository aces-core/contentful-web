"use client";

import { useUIState } from "@maverick/store";
import { Text, ListItem, ListItemButton, Icon, FlexBox } from "@maverick/ui";
import { CfLink } from "@maverick/cf";

import { CfMenuItemType } from "../menus";
import { defaultLocale, Locale } from "@maverick/i18n";

interface MobileMenuItemProps {
  item: CfMenuItemType;
  lang: Locale;
  paddingStyle?: string;
}

export const MobileMenuItem = ({
  item,
  lang = defaultLocale,
  paddingStyle,
}: MobileMenuItemProps) => {
  const { setMobileMenuOpen } = useUIState();

  const handleDrawerClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <CfLink
      linkType={item.link.linkType}
      target={item.link.target}
      pageLink={item.link.pageLink}
      customLink={item.link.customLink}
      lang={lang}
      style={{
        display: "block",
      }}
    >
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleDrawerClose}
          style={{ padding: paddingStyle }}
        >
          <FlexBox alignItems="center">
            <Text>{item.title}</Text>
            {item.externalLinkIcon && (
              <Icon icon="OpenInNew" size={16} marginLeft={4} />
            )}
          </FlexBox>
        </ListItemButton>
      </ListItem>
    </CfLink>
  );
};
