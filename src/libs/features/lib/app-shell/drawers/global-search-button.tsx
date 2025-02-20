"use client";

import { useUIState } from "@maverick/store";
import { Icon, IconButton } from "@maverick/ui";

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
