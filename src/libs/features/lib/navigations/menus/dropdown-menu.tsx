"use client";

import { type Locale } from "@aces/i18n";
import { Size } from "@aces/types";
import { DropDownMenu, MenuItem, SubMenu } from "@aces/ui";
import { CfLink } from "@aces/cf";
import { CfMenuItemType } from "./menu-types";

interface DropdownMenuProps {
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
    <DropDownMenu resize>
      <>{title}</>
      <SubMenu>
        {menu.map((menuItem) => (
          <MenuItem key={menuItem.title} size={size} resize noPadding>
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
