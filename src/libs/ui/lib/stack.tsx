import React from "react";
import MuiStack, { StackProps as MuiStackProps } from "@mui/material/Stack";

import { CustomCssProps } from "@aces/types";

interface StackProps
  extends Pick<
    MuiStackProps,
    "direction" | "spacing" | "divider" | "children"
  > {
  style?: CustomCssProps;
}

export function Stack({
  direction,
  spacing,
  divider,
  style,
  children,
}: StackProps) {
  return (
    <MuiStack
      direction={direction}
      spacing={spacing}
      divider={divider}
      sx={style}
    >
      {children}
    </MuiStack>
  );
}
