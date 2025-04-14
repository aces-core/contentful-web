"use client";

import { Fragment, useState } from "react";
import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@aces/types";
import {
  Text,
  List,
  ListItem,
  ListItemButton,
  Icon,
  Collapse,
  Box,
} from "@aces/ui";
import { CfButton, CfButtonProps } from "@aces/cf";

import {
  CfDropDownMenuType,
  CfMenuItemType,
  isCfButton,
  isCfDropDownMenu,
  isCfMenuItem,
  MobileMenuItem,
} from "../menus";

interface MainNavigationMobileProps
  extends Pick<CfBaseComponent, "id" | "lang"> {
  data: (CfMenuItemType | CfDropDownMenuType | CfButtonProps)[];
}

export const MainNavigationMobile = ({
  data,
  id,
  lang,
}: MainNavigationMobileProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const paddingStyle = "1.6rem 1.6rem";

  return (
    <Box
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "mainNavigation",
        locale: lang,
      })}
    >
      {data.map((item, index) => {
        const typename = item.__typename;

        if (!typename) {
          return null;
        }

        switch (typename) {
          case "MenuItem":
            if (isCfMenuItem(item)) {
              return (
                <MobileMenuItem
                  key={index}
                  item={item}
                  lang={lang}
                  paddingStyle={paddingStyle}
                />
              );
            }
            break;
          case "DropdownMenu":
            if (isCfDropDownMenu(item)) {
              return (
                <Fragment key={index}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: paddingStyle,
                      }}
                    >
                      <Text>{item.title}</Text>
                      <Icon
                        icon={dropdownOpen ? "ArrowDropUp" : "ArrowDropDown"}
                      />
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                    <List>
                      {item.menuItemsCollection.items.map((menuItem, index) => (
                        <MobileMenuItem
                          key={index}
                          item={menuItem}
                          lang={lang}
                          paddingStyle={paddingStyle}
                        />
                      ))}
                    </List>
                  </Collapse>
                </Fragment>
              );
            }
            break;
          case "Button":
            if (isCfButton(item)) {
              return (
                <Box key={index} marginY={2} paddingX={6}>
                  <CfButton
                    internalTitle={item.internalTitle}
                    buttonStyle={item.buttonStyle}
                    title={item.title}
                    link={item.link}
                    fullWidthMobile
                    __typename={item.__typename}
                    id={item?.sys?.id || ""}
                    preview={item.preview}
                    lang={lang}
                  />
                </Box>
              );
            }
            break;
          default:
            return null;
        }
      })}
    </Box>
  );
};
