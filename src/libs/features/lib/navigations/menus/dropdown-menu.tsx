"use client";

import { useState } from "react";

import { type Locale } from "@aces/i18n";
import { CfBaseComponent, Size } from "@aces/types";
import {
  DropDownMenu,
  MenuItem,
  SubMenu,
  Text,
  List,
  ListItem,
  ListItemButton,
  Icon,
  Collapse,
} from "@aces/ui";
import { CfLink } from "@aces/cf";

import {
  CfDropDownMenuType,
  CfMenuItemType,
  MobileMenuItem,
  mobileMenuPaddingStyle,
} from "../menus";

export interface DropdownMenuProps {
  title: string;
  menu: CfMenuItemType[];
  size?: Size;
  lang?: Locale;
}

export const DropdownMenu = ({
  title,
  menu,
  size,
  lang,
}: DropdownMenuProps) => {
  if (!menu) return null;

  return (
    <DropDownMenu>
      <>{title}</>
      <SubMenu position="center">
        {menu.map((menuItem) => (
          <MenuItem
            key={menuItem.title}
            size={size}
            noPadding
            style={{
              display: "block",
              width: "100%",
            }}
          >
            <CfLink
              linkType={menuItem.link.linkType}
              target={menuItem.link.target}
              pageLink={menuItem.link.pageLink}
              customLink={menuItem.link.customLink}
              lang={lang}
              style={{
                display: "block",
                padding: "4px 0px",
              }}
            >
              {menuItem.title}
            </CfLink>
          </MenuItem>
        ))}
      </SubMenu>
    </DropDownMenu>
  );
};

export interface MobileMenuItemProps extends Pick<CfBaseComponent, "lang"> {
  item: CfDropDownMenuType;
}

export const DropDownMenuMobile = ({ item, lang }: MobileMenuItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: mobileMenuPaddingStyle,
          }}
        >
          <Text>{item.title}</Text>
          <Icon icon={dropdownOpen ? "ArrowDropUp" : "ArrowDropDown"} />
        </ListItemButton>
      </ListItem>
      <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
        <List>
          {item.menuItemsCollection.items.map((menuItem, index) => (
            <MobileMenuItem key={index} item={menuItem} lang={lang} />
          ))}
        </List>
      </Collapse>
    </>
  );
};
