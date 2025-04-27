import React from "react";
import MuiBreadcrumbs, {
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from "@mui/material/Breadcrumbs";

import { CustomCssProps, ResponsiveSpacing } from "@aces/types";

import { Box } from "./box";

interface BreadcrumbsProps
  extends Pick<
    MuiBreadcrumbsProps,
    "children" | "separator" | "aria-label" | "maxItems"
  > {
  margin?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  marginY?: ResponsiveSpacing;
  marginTop?: ResponsiveSpacing;
  marginBottom?: ResponsiveSpacing;
  marginLeft?: ResponsiveSpacing;
  marginRight?: ResponsiveSpacing;
  style?: CustomCssProps;
}

export function Breadcrumbs({
  "aria-label": ariaLabel,
  children,
  separator,
  maxItems,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  style,
}: BreadcrumbsProps) {
  return (
    <Box
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      <MuiBreadcrumbs
        aria-label={ariaLabel}
        separator={separator}
        maxItems={maxItems}
        sx={style}
      >
        {children}
      </MuiBreadcrumbs>
    </Box>
  );
}
