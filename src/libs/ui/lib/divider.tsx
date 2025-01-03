import React from "react";
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from "@mui/material/Divider";

import { CustomCssProps, ResponsiveSpacing } from "@maverick/types";

interface DividerProps
  extends Pick<MuiDividerProps, "orientation" | "flexItem"> {
  marginY?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  style?: CustomCssProps;
}

export function Divider({
  orientation,
  flexItem,
  marginY,
  marginX,
  style,
}: DividerProps) {
  return (
    <MuiDivider
      orientation={orientation}
      flexItem={flexItem}
      sx={{
        my: marginY,
        mx: marginX,
        ...style,
      }}
    />
  );
}
