import React from "react";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { CustomCssProps, ResponsiveSpacing } from "@maverick/types";
import { Box } from "./box";

interface DrawerProps
  extends Pick<MuiDrawerProps, "anchor" | "open" | "children" | "onClose"> {
  style?: CustomCssProps;
  minWidth?: ResponsiveSpacing;
  enterSpeed?: number;
  exitSpeed?: number;
}

export function Drawer({
  anchor = "left",
  open,
  children,
  onClose,
  minWidth = 250,
  enterSpeed = 250,
  exitSpeed = 250,
  style,
}: DrawerProps) {
  return (
    <MuiDrawer
      anchor={anchor}
      className="drawer"
      open={open}
      onClose={onClose}
      SlideProps={{ timeout: { enter: enterSpeed, exit: exitSpeed } }}
    >
      <Box style={{ width: minWidth, ...style }}>{children}</Box>
    </MuiDrawer>
  );
}
