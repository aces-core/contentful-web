"use client";

import { type Locale } from "@maverick/i18n";
import { CfMenuItems, Size } from "@maverick/types";
import { DropDownMenu, MenuItem, SubMenu, Text } from "@maverick/ui";
import { CfLink } from "@maverick/cf";

interface CfDropdownMenuProps {
  title: string;
  menu: CfMenuItems;
  size?: Size;
  lang?: Locale;
}

export const CfDropdownMenu = ({
  title,
  menu,
  size,
  lang,
}: CfDropdownMenuProps) => {
  if (!menu) return null;

  return (
    <DropDownMenu>
      <Text>{title}</Text>
      <SubMenu>
        {menu.map((menuItem) => (
          <MenuItem key={menuItem.title} size={size} noPadding>
            <CfLink
              linkType={menuItem.link.linkType}
              target={menuItem.link.target}
              pageLink={menuItem.link.pageLink}
              customLink={menuItem.link.customLink}
              lang={lang}
              style={{
                display: "block",
                padding: "1rem .75rem",
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
