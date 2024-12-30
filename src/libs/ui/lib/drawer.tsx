import React from "react";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";

export function Drawer({
  anchor = "top",
  open,
  children,
  onClose,
}: MuiDrawerProps) {
  return (
    <MuiDrawer
      anchor={anchor}
      className="drawer"
      open={open}
      onClose={onClose}
      SlideProps={{ timeout: { enter: 400, exit: 450 } }}
    >
      {children}
    </MuiDrawer>
  );
}
