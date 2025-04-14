"use client";

import { useUIState } from "@aces/store";
import { Icon, IconButton } from "@aces/ui";

export const GlobalSearchButton = () => {
  const { searchOpen, setSearchOpen } = useUIState();

  const handleDrawerToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <IconButton color="primary" size="large" onClick={handleDrawerToggle}>
      <Icon icon="Search" />
    </IconButton>
  );
};
