"use client";

import { type Locale } from "@maverick/i18n";
import { CfMenuItems, Orientation, Size } from "@maverick/types";
import { Box, Menu, MenuItem, MenuProps, Text } from "@maverick/ui";
import { CfLink } from "@maverick/cf";

interface CfMenuProps extends Pick<MenuProps, "columns" | "columnGap"> {
  title?: string;
  menu: CfMenuItems;
  orientation?: Orientation;
  size?: Size;
  disableGutters?: boolean;
  hoverUnderline?: boolean;
  lang?: Locale;
}

export const CfMenu = ({
  title,
  menu,
  orientation,
  columns,
  columnGap,
  size,
  disableGutters = false,
  hoverUnderline = false,
  lang,
}: CfMenuProps) => {
  const isHorizontal = orientation === "horizontal";

  if (!menu) return null;

  return (
    <Box>
      {title && (
        <Text.SubtitleSmall
          component="h6"
          color="blueGrey.400"
          marginBottom={2}
        >
          {title}
        </Text.SubtitleSmall>
      )}
      <Menu
        flexDirection={isHorizontal ? "row" : "column"}
        alignItems="flex-start"
        columns={columns}
        columnGap={columnGap}
      >
        {menu.map((menuItem) => (
          <MenuItem
            key={menuItem.title}
            size={size}
            disableGutters={disableGutters}
            hoverUnderline={hoverUnderline}
            noPadding
          >
            <CfLink
              linkType={menuItem.link.linkType}
              target={menuItem.link.target}
              pageLink={menuItem.link.pageLink}
              customLink={menuItem.link.customLink}
              lang={lang}
              style={{
                padding: "1.75rem .75rem",
              }}
            >
              {menuItem.title}
            </CfLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
