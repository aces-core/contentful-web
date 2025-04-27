"use client";

import { useUIState } from "@aces/store";
import { Icon, IconButton } from "@aces/ui";

interface GlobalSearchButtonProps {
  color?: "primary" | "secondary";
  variant?: "standard" | "contained" | "outlined";
}

export const GlobalSearchButton = ({
  color = "primary",
  variant = "contained",
}: GlobalSearchButtonProps) => {
  const { searchOpen, setSearchOpen } = useUIState();

  const handleDrawerToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <IconButton color={color} variant={variant} onClick={handleDrawerToggle}>
      <Icon icon="Search" />
    </IconButton>
  );
};
