"use client";

import { useUIState } from "@aces/store";

import { defaultLocale, Locale } from "@aces/i18n";
import { CustomCssProps } from "@aces/types";
import { Text, List, ListItem, ListItemButton, Icon, FlexBox } from "@aces/ui";
import { CfLink } from "@aces/cf";

import { CfDropDownMenuType, CfMenuItemType } from "../menus";

export const mobileMenuPaddingStyle = "1rem 1.5rem";

interface MobileMenuItemProps {
  item: CfMenuItemType;
  lang: Locale;
  fontSize?: string;
  style?: CustomCssProps;
}

export const MobileMenuItem = ({
  item,
  lang = defaultLocale,
  fontSize,
  style,
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
          style={{ padding: mobileMenuPaddingStyle, ...style }}
        >
          <FlexBox alignItems="center">
            <Text
              style={{
                fontSize: fontSize,
              }}
            >
              {item.title}
            </Text>
            {item.externalLinkIcon && (
              <Icon icon="OpenInNew" size={16} marginLeft={4} />
            )}
          </FlexBox>
        </ListItemButton>
      </ListItem>
    </CfLink>
  );
};

interface MobileMenuSlideItemProps {
  item: CfDropDownMenuType;
}

export const MobileMenuSlideItem = ({ item }: MobileMenuSlideItemProps) => {
  const { setMobileMenuSlide, setActiveMenuSlide } = useUIState();

  const handleDrawerSlide = () => {
    setActiveMenuSlide(item);
    setMobileMenuSlide(true);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={handleDrawerSlide}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: mobileMenuPaddingStyle,
        }}
      >
        <Text>{item.title}</Text>
        <Icon icon="ChevronRight" />
      </ListItemButton>
    </ListItem>
  );
};

interface MobileMenuSlideMenuItemProps {
  lang: Locale;
}

export const MobileMenuSlideMenuItem = ({
  lang = defaultLocale,
}: MobileMenuSlideMenuItemProps) => {
  const { activeMenuSlide } = useUIState();

  return (
    <ListItem disablePadding style={{ width: "100%" }}>
      <List style={{ width: "100%" }}>
        <ListItem
          style={{
            padding: mobileMenuPaddingStyle,
          }}
        >
          <Text.SubtitleSmall>{activeMenuSlide.title}</Text.SubtitleSmall>
        </ListItem>
        {activeMenuSlide &&
          activeMenuSlide.menuItemsCollection.items.map(
            (menuItem: CfMenuItemType, index: number) => (
              <MobileMenuItem key={index} item={menuItem} lang={lang} />
            ),
          )}
      </List>
    </ListItem>
  );
};
