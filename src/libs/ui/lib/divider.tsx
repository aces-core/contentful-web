import React from "react";
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from "@mui/material/Divider";

import { CustomCssProps, ResponsiveSpacing } from "@aces/types";

interface DividerProps
  extends Pick<MuiDividerProps, "orientation" | "flexItem"> {
  margin?: ResponsiveSpacing;
  marginY?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  style?: CustomCssProps;
}

export function Divider({
  orientation,
  flexItem,
  margin,
  marginY,
  marginX,
  style,
}: DividerProps) {
  return (
    <MuiDivider
      orientation={orientation}
      flexItem={flexItem}
      sx={{
        margin: margin,
        my: marginY,
        mx: marginX,
        ...style,
      }}
    />
  );
}
