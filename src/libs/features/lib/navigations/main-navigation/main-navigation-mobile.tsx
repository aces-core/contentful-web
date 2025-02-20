"use client";

import { Fragment, useState } from "react";

import { CfBaseComponent } from "@maverick/types";
import {
  Text,
  List,
  ListItem,
  ListItemButton,
  Icon,
  Collapse,
} from "@maverick/ui";
import { CfButton, CfButtonProps } from "@maverick/cf";

import {
  CfDropDownMenuType,
  CfMenuItemType,
  isCfButton,
  isCfDropDownMenu,
  isCfMenuItem,
  MobileMenuItem,
} from "../menus";

interface MainNavigationMobileProps extends Pick<CfBaseComponent, "lang"> {
  data: (CfMenuItemType | CfDropDownMenuType | CfButtonProps)[];
}

export const MainNavigationMobile = ({
  data,
  lang,
}: MainNavigationMobileProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const paddingStyle = "1.6rem 1.6rem";

  return (
    <>
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
                <CfButton
                  key={index}
                  internalTitle={item.internalTitle}
                  buttonStyle={item.buttonStyle}
                  title={item.title}
                  link={item.link}
                  __typename={item.__typename}
                  id={item?.sys?.id || ""}
                  preview={item.preview}
                  lang={lang}
                />
              );
            }
            break;
          default:
            return null;
        }
      })}
    </>
  );
};
