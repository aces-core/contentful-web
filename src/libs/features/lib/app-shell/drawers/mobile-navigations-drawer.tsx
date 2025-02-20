"use client";

import React from "react";

import { useUIState } from "@maverick/store";
import { Drawer, Box, List, FlexBox } from "@maverick/ui";

import { MobileMenuButton } from "../../navigations";

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
            <MobileMenuButton />
          </FlexBox>
          {children}
        </List>
      </Box>
    </Drawer>
  );
};
