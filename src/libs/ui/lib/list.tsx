import React from "react";
import MuiList, { ListProps as MuiListProps } from "@mui/material/List";
import MuiListItem, {
  ListItemProps as MuiListItemProps,
} from "@mui/material/ListItem";

import { CustomCssProps } from "@maverick/types";

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

export const List = ({ component = "ul", style, children }: ListProps) => {
  return (
    <MuiList component={component} sx={style}>
      {children}
    </MuiList>
  );
};
