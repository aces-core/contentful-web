"use client";

import { useState, useEffect } from "react";

import { useUIState } from "@maverick/store";
import { Icon, IconButton } from "@maverick/ui";

export const MobileMenuButton = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIState();
  const [delayedOpen, setDelayedOpen] = useState(mobileMenuOpen);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedOpen(mobileMenuOpen);
    }, 80);

    return () => clearTimeout(timeout);
  }, [mobileMenuOpen]);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <IconButton color="primary" size="large" onClick={handleDrawerToggle}>
      {delayedOpen ? <Icon icon="Close" /> : <Icon icon="Menu" />}
    </IconButton>
  );
};
