"use client";

import { useState, useEffect } from "react";

import { useUIState } from "@aces/store";
import { defaultLocale, getLocale, Locale } from "@aces/i18n";
import {
  Drawer,
  Box,
  List,
  FlexBox,
  Button,
  Icon,
  Skeleton,
  Divider,
  H6,
} from "@aces/ui";

import { MobileNavigationsButton } from "./mobile-navigations-button";
import { MobileMenuSlideMenuItem } from "../../navigations";

export interface MobileNavigationsDrawerHeaderProps {
  lang: Locale;
}

export const MobileNavigationsDrawerHeader = ({
  lang = defaultLocale,
}: MobileNavigationsDrawerHeaderProps) => {
  const [t, setT] = useState<{ back: string }>();

  const { mobileMenuSlide, setMobileMenuSlide } = useUIState();

  const handleDrawerSlide = () => {
    setMobileMenuSlide(false);
  };

  useEffect(() => {
    const fetchLocale = async () => {
      const localeData = await getLocale(lang, "common");
      setT(localeData);
    };

    fetchLocale();
  }, [lang]);

  return (
    <Box>
      <FlexBox alignItems="center" justifyContent="space-between" paddingX={4}>
        <FlexBox alignContent="center">
          {mobileMenuSlide && (
            <Button
              color="secondary"
              variant="text"
              onClick={handleDrawerSlide}
              style={{ padding: "0 !important" }}
            >
              <Icon icon="ChevronLeft" marginRight={1} />
              {t ? (
                <H6 component="span">{t.back}</H6>
              ) : (
                <Skeleton variant="text" width={40} />
              )}
            </Button>
          )}
        </FlexBox>
        <MobileNavigationsButton defaultState="Close" noToggle color="grey" />
      </FlexBox>
      <Divider marginX={6} marginY={2} />
    </Box>
  );
};

interface MobileNavigationsDrawerProps {
  children: React.ReactNode;
  lang: Locale;
}

const drawerMaxWidth = 350;

export const MobileNavigationsDrawerDefault = ({
  children,
  lang = defaultLocale,
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
      minWidth={drawerMaxWidth}
    >
      <Box role="presentation">
        <List>
          <MobileNavigationsDrawerHeader lang={lang} />
          {children}
        </List>
      </Box>
    </Drawer>
  );
};

export const MobileNavigationsDrawerSlide = ({
  children,
  lang = defaultLocale,
}: MobileNavigationsDrawerProps) => {
  const headerHeight = "66px";
  const {
    mobileMenuOpen,
    mobileMenuSlide,
    setMobileMenuOpen,
    setMobileMenuSlide,
  } = useUIState();

  const handleDrawerClose = () => {
    setMobileMenuOpen(false);
    setMobileMenuSlide(false);
  };

  return (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleDrawerClose}
      minWidth={drawerMaxWidth}
      hideBackdrop
      PaperProps={{
        elevation: 0,
        style: {
          marginTop: headerHeight,
          boxShadow: `-8px 4px 4px rgba(0,0,0,.08)`,
        },
      }}
      presentationStyles={{
        top: headerHeight,
      }}
    >
      <Box role="presentation">
        <List style={{ overflow: "hidden" }}>
          <MobileNavigationsDrawerHeader lang={lang} />
          <FlexBox
            width="200%"
            style={{
              transform: mobileMenuSlide ? "translateX(-50%)" : "translateX(0)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Box flex={1}>{children}</Box>
            <Box flex={1}>
              {mobileMenuSlide && <MobileMenuSlideMenuItem lang={lang} />}
            </Box>
          </FlexBox>
        </List>
      </Box>
    </Drawer>
  );
};
