"use client";

import React from "react";

import { useUIState } from "@maverick/store";
import { Drawer, Box, List, FlexBox } from "@maverick/ui";

import { MobileNavigationsButton } from "./mobile-navigations-button";

interface MobileNavigationsDrawerProps {
  children: React.ReactNode;
}

export const MobileNavigationsDrawer = ({
  children,
}: MobileNavigationsDrawerProps) => {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIState();

  const handleDrawerClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleDrawerClose}
      minWidth={350}
    >
      <Box role="presentation">
        <List>
          <FlexBox justifyContent="flex-end" paddingX={6} paddingY={1}>
            <MobileNavigationsButton />
          </FlexBox>
          {children}
        </List>
      </Box>
    </Drawer>
  );
};
