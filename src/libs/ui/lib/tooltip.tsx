"use client";

import MuiTooltip, {
  TooltipProps as MuiTooltipProps,
} from "@mui/material/Tooltip";

import { CustomCssProps } from "@aces/types";

interface TooltipProps
  extends Pick<MuiTooltipProps, "title" | "placement" | "children"> {
  maxWidth?: number | "none";
  style?: CustomCssProps;
}

export function Tooltip({
  title,
  placement,
  maxWidth = "none",
  style,
  children,
  ...props
}: TooltipProps) {
  return (
    <MuiTooltip
      title={title}
      placement={placement}
      sx={{ maxWidth: maxWidth, ...style }}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
}
