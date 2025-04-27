"use client";

import { useState, useEffect } from "react";

import { useUIState } from "@aces/store";
import { Icon, IconButton } from "@aces/ui";
import { palette } from "@aces/theme";

export interface MobileNavigationsButtonProps {
  color?: "primary" | "black" | "grey";
  defaultState?: "Close" | "Menu";
  noToggle?: boolean;
}

export const MobileNavigationsButton = ({
  color = "black",
  defaultState = "Menu",
  noToggle = false,
}: MobileNavigationsButtonProps) => {
  const {
    mobileMenuOpen,
    mobileMenuSlide,
    setMobileMenuOpen,
    setMobileMenuSlide,
  } = useUIState();
  const [icon, setIcon] = useState(defaultState);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (!hasInteracted || noToggle) return;

    const timeout = setTimeout(() => {
      setIcon(mobileMenuOpen ? "Close" : "Menu");
    }, 80);

    return () => clearTimeout(timeout);
  }, [mobileMenuOpen, hasInteracted, noToggle]);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileMenuSlide(mobileMenuOpen === false ? false : mobileMenuSlide);
    setHasInteracted(true);
  };

  return (
    <IconButton
      color={color === "primary" ? "primary" : "secondary"}
      variant="standard"
      onClick={handleDrawerToggle}
      style={
        color === "grey"
          ? {
              color: palette.grey[500],
            }
          : {}
      }
    >
      <Icon icon={icon} />
    </IconButton>
  );
};
