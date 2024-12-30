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

import { CustomCssProps, Size } from "@maverick/types";
import { Box, Icon } from "@maverick/ui";

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
    <nav>
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
    </nav>
  );
};

export const DropDownMenu: React.FC<MenuProps> = ({
  textAlign = "left",
  children,
}) => {
  return (
    <nav>
      <MenuList
        sx={{
          textAlign: textAlign,
          marginX: 0,
        }}
      >
        {children}
      </MenuList>
    </nav>
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
  resize?: boolean;
  style?: CustomCssProps;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  nested = false,
  disableGutters = false,
  noPadding = false,
  hoverUnderline = false,
  resize,
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
    (child) => React.isValidElement(child) && child.type === SubMenu
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
      disableGutters={disableGutters}
      sx={{
        position: "relative",
        justifyContent: "flex-start",
        paddingTop: noPadding ? 0 : nested ? "0.5rem" : ".75rem",
        paddingBottom: noPadding ? 0 : nested ? "0.5rem" : ".75rem",
        paddingLeft: disableGutters ? 0 : { xs: 0, lg: ".75rem", xl: "1rem" },
        paddingRight: disableGutters ? 0 : { xs: 0, lg: ".75rem", xl: "1rem" },
        minHeight: 0,
        whiteSpace: "break-spaces",
        animation: `${fadeIn} 100ms ease-in-out`,
        "&:hover": {
          textDecoration: hoverUnderline ? "underline" : "none",
          ...(hoverUnderline && {
            backgroundColor: "transparent",
          }),
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
            fontWeight: 700,
            "& > span": resize
              ? {
                  fontSize: { xs: "13px", xl: "body1.fontSize" },
                }
              : {},
          }}
        >
          {React.Children.toArray(children).filter(
            (child) => React.isValidElement(child) && child.type !== SubMenu
          )}
        </ListItemText>
        {hasNestedMenu && (
          <Icon
            icon={open ? "ChevronUp" : "ChevronDown"}
            size={12}
            color="primary.main"
            marginLeft={2}
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

interface MobileMenuItemProps extends Pick<MuiMenuItemProps, "children"> {}

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ children }) => {
  return (
    <MuiMenuItem
      sx={{
        width: "100%",
        paddingY: "1rem",
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "grey.100",
      }}
    >
      <ListItemText sx={{ textAlign: "left" }}>{children}</ListItemText>
    </MuiMenuItem>
  );
};

interface SubMenuProps extends Pick<MuiMenuListProps, "children"> {
  boxShadow?: boolean;
  minWidth?: string;
}

export const SubMenu: React.FC<SubMenuProps> = ({
  children,
  boxShadow = true,
  minWidth = "180px",
}) => {
  return (
    <MenuList
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        position: "absolute",
        top: "100%",
        left: 0,
        minWidth: minWidth,
        width: "100%",
        height: "auto",
        backgroundColor: "grey.700",
        color: "common.white",
        zIndex: 99,
        flexDirection: "column",
        boxShadow: boxShadow ? "0px 2px 6px rgba(0, 0, 0, 0.2)" : "none",
      }}
    >
      {children}
    </MenuList>
  );
};
