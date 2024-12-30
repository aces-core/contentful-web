import React from "react";
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from "@mui/material/Divider";

import { CustomCssProps } from "@maverick/types";

interface DividerProps
  extends Pick<MuiDividerProps, "orientation" | "flexItem"> {
  style?: CustomCssProps;
}

export function Divider({ orientation, flexItem, style }: DividerProps) {
  return (
    <MuiDivider orientation={orientation} flexItem={flexItem} sx={style} />
  );
}
