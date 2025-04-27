"use client";

import React, { useState } from "react";
import { keyframes } from "@mui/material";
import { Grid2Props as MuiGrid2Props } from "@mui/material/Grid2";
import ListItemText from "@mui/material/ListItemText";
import MuiMenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material/MenuItem";
import MenuList, {
  MenuListProps as MuiMenuListProps,
} from "@mui/material/MenuList";

import { CustomCssProps, Size } from "@aces/types";
import { Box, Icon } from "@aces/ui";
import { headerFont, palette } from "@aces/theme";

export interface MenuProps
  extends MuiMenuListProps,
    Pick<
      MuiGrid2Props,
      "textAlign" | "flexDirection" | "alignItems" | "gap" | "columnGap"
    > {
  columns?: {
    xs: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export const Menu: React.FC<MenuProps> = ({
  textAlign = "left",
  flexDirection = "row",
  alignItems = "center",
  gap = 0,
  columnGap = 0,
  columns,
  children,
}) => {
  const isGrid = Boolean(columns);

  return (
    <Box component="nav">
      <MenuList
        sx={{
          display: isGrid ? "grid" : "flex",
          flexDirection: flexDirection,
          gridTemplateColumns: isGrid
            ? {
                xs: `repeat(${columns?.xs}, 1fr)`,
                sm: `repeat(${columns?.sm}, 1fr)`,
                md: `repeat(${columns?.md}, 1fr)`,
                lg: `repeat(${columns?.lg}, 1fr)`,
                xl: `repeat(${columns?.xl}, 1fr)`,
              }
            : "auto",
          alignItems: alignItems,
          textAlign: textAlign,
          gap: gap,
          columnGap: columnGap,
        }}
      >
        {children}
      </MenuList>
    </Box>
  );
};

export const DropDownMenu: React.FC<MenuItemProps> = ({
  style,
  children,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hasNestedMenu = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === SubMenu,
  );

  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  return (
    <MuiMenuItem
      sx={{
        position: "relative",
        justifyContent: "flex-start",
        paddingTop: "1.75rem",
        paddingBottom: "1.75rem",
        paddingLeft: { lg: "1rem", xl: "1.25rem" },
        paddingRight: { lg: "1rem", xl: "1.25rem" },
        minHeight: 0,
        whiteSpace: "break-spaces",
        animation: `${fadeIn} 100ms ease-in-out`,
        "&:hover": {
          textDecoration: "none",
        },
        ...style,
      }}
      onFocus={handleOpen}
      onMouseEnter={onMouseEnter ? onMouseEnter : handleOpen}
      onMouseLeave={onMouseLeave ? onMouseLeave : handleClose}
    >
      <Box style={{ alignItems: "center", display: "flex" }}>
        <ListItemText
          sx={{
            textAlign: "left",
            fontSize: "inherit",
            fontWeight: 400,
            "& > span": {
              fontFamily: headerFont.style.fontFamily,
              fontSize: {
                xs: "subtitle2.fontSize",
                xl: "subtitle2.fontSize",
              },
            },
          }}
        >
          {React.Children.toArray(children).filter(
            (child) => React.isValidElement(child) && child.type !== SubMenu,
          )}
        </ListItemText>
        {hasNestedMenu && (
          <Icon
            icon={open ? "ExpandLess" : "ExpandMore"}
            size={20}
            color="text.primary"
            marginLeft={1}
          />
        )}
      </Box>
      {hasNestedMenu &&
        open &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === SubMenu) {
            return <>{child}</>;
          }
          return null;
        })}
    </MuiMenuItem>
  );
};

interface MenuItemProps
  extends Pick<
    MuiMenuItemProps,
    "disableGutters" | "children" | "onMouseEnter" | "onMouseLeave"
  > {
  size?: Size;
  nested?: boolean;
  noPadding?: boolean;
  hoverUnderline?: boolean;
  style?: CustomCssProps;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  nested = false,
  disableGutters = false,
  noPadding = false,
  hoverUnderline = false,
  style,
  children,
}) => {
  return (
    <MuiMenuItem
      disableGutters={disableGutters}
      sx={{
        position: "relative",
        justifyContent: "flex-start",
        paddingTop: noPadding ? 0 : nested ? "0.5rem" : "1.5rem",
        paddingBottom: noPadding ? 0 : nested ? "0.5rem" : "1.5rem",
        paddingLeft: disableGutters
          ? 0
          : { xs: ".5rem", lg: ".5rem", xl: "1rem" },
        paddingRight: disableGutters
          ? 0
          : { xs: ".5rem", lg: ".5rem", xl: "1rem" },
        minHeight: 0,
        whiteSpace: "break-spaces",
        "&:hover": {
          textDecoration: hoverUnderline ? "underline" : "none",
          ...(hoverUnderline && {
            backgroundColor: "transparent",
          }),
        },
        ...style,
      }}
    >
      <Box style={{ alignItems: "center", display: "flex" }}>
        <ListItemText
          sx={{
            textAlign: "left",
            fontSize: "inherit",
            fontWeight: 400,
            "& > span": {
              fontSize: { xs: "subtitle2.fontSize", xl: "subtitle2.fontSize" },
              paddingY: "0.25rem",
            },
          }}
        >
          {children}
        </ListItemText>
      </Box>
    </MuiMenuItem>
  );
};

interface SubMenuProps extends Pick<MuiMenuListProps, "children"> {
  boxShadow?: boolean;
  minWidth?: string;
  position?: "left" | "right" | "center";
}

export const SubMenu: React.FC<SubMenuProps> = ({
  children,
  boxShadow = true,
  minWidth = "180px",
  position = "right",
}) => {
  return (
    <MenuList
      sx={{
        paddingY: "12px",
        paddingX: "10px",
        position: "absolute",
        top: "calc(100% - 12px)",
        left: position === "left" ? 0 : position === "center" ? "50%" : "auto",
        right: position === "right" ? 0 : "auto",
        transform: position === "center" ? "translateX(-50%)" : "none",
        minWidth: minWidth,
        width: "calc(100% + 10px)",
        height: "auto",
        backgroundColor: "common.white",
        border: `1px solid ${palette.grey[200]}`,
        borderRadius: "10px",
        color: "text.primary",
        zIndex: 99,
        flexDirection: "column",
        boxShadow: boxShadow ? "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" : "none",
      }}
    >
      {children}
    </MenuList>
  );
};
