import React from "react";
import MuiList, { ListProps as MuiListProps } from "@mui/material/List";
import MuiListItem, {
  ListItemProps as MuiListItemProps,
} from "@mui/material/ListItem";
import MuiListItemButton, {
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material/ListItemButton";

import { CustomCssProps } from "@aces/types";

interface ListItemButtonProps
  extends Pick<MuiListItemButtonProps, "alignItems" | "children" | "onClick"> {
  style?: CustomCssProps;
}

export const ListItemButton = ({
  alignItems = "flex-start",
  onClick,
  children,
  style,
}: ListItemButtonProps) => {
  return (
    <MuiListItemButton
      alignItems={alignItems}
      onClick={onClick}
      sx={{
        position: "relative",
        ...style,
      }}
    >
      {children}
    </MuiListItemButton>
  );
};

interface ListItemProps
  extends Pick<
    MuiListItemProps,
    | "component"
    | "disablePadding"
    | "children"
    | "onClick"
    | "onMouseEnter"
    | "onMouseLeave"
  > {
  style?: CustomCssProps;
}

export const ListItem = ({
  component = "li",
  disablePadding,
  style,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ListItemProps) => {
  return (
    <MuiListItem
      component={component}
      disablePadding={disablePadding}
      sx={{
        position: "relative",
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </MuiListItem>
  );
};

interface ListProps extends Pick<MuiListProps, "component" | "children"> {
  style?: CustomCssProps;
}

export const List = ({
  component = "ul",
  style,
  children,
  ...rest
}: ListProps) => {
  return (
    <MuiList component={component} sx={style} {...rest}>
      {children}
    </MuiList>
  );
};
