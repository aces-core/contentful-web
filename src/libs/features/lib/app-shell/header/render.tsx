"use client";

import { Suspense, useEffect, useState } from "react";

import { RouteDirectory } from "@maverick/types";
import { useUIState } from "@maverick/store";
import { useMediaQuery } from "@maverick/hooks";
import {
  Box,
  Col,
  Container,
  FlexBox,
  Row,
  Link,
  ListItem,
} from "@maverick/ui";

import { Logo, LogosType } from "../logo/render";
import {
  MainNavigation,
  MainNavigationMobile,
  MobileMenuButton,
  SecondaryNavigationMobile,
} from "../../navigations";
import { SearchBar, SearchOverlay, SearchOverlayButton } from "../../search";
import { SecondaryNavigation } from "../../navigations/secondary-navigation/secondary-navigation";
import { MobileNavigationsDrawer } from "../drawers/mobile-navigations-drawer";

interface HeaderProps {
  logos: LogosType;
  navigations: {
    mainNavigation: [];
    secondaryNavigation: [];
  };
  sticky?: boolean;
  preview: boolean;
  lang: string;
}

export const Header = ({
  logos,
  navigations,
  sticky = true,
  preview,
  lang,
}: HeaderProps) => {
  const { searchOpen } = useUIState();

  const [isScrolled, setIsScrolled] = useState(false);

  const { isSmallerThanMd, isLargerThanMd } = useMediaQuery();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isLargerThanMd && (
        <SecondaryNavigation
          data={navigations.secondaryNavigation}
          lang={lang}
        />
      )}
      <Box
        style={{
          position: sticky ? "sticky" : "relative",
          top: "0",
          width: "100%",
          zIndex: 999,
        }}
      >
        <FlexBox
          component="header"
          paddingY={{ xs: "7px", md: 0 }}
          flexDirection="column"
          style={{
            backgroundColor: "common.white",
            boxShadow:
              isScrolled && !searchOpen
                ? "0 4px 6px rgba(0, 0, 0, 0.08)"
                : "none",
            width: "100%",
            transition: "box-shadow 0.15s ease-in-out",
            position: "relative",
            zIndex: 10,
          }}
        >
          <Container>
            <Row
              style={{ width: "100%" }}
              flexDirection={{ xs: "row", md: "row" }}
            >
              <Col
                size={{ xs: 8, md: 4 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Link href={RouteDirectory.Homepage}>
                  <Logo
                    logos={logos}
                    variant="fullColorLogo"
                    width={{ xs: 100, md: 110 }}
                    preview={preview}
                    lang={lang}
                  />
                </Link>
              </Col>
              {isSmallerThanMd ? (
                <Col
                  size={{ xs: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <MobileMenuButton />
                </Col>
              ) : (
                <Col
                  size={{ xs: 8 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Suspense fallback={null}>
                    <MainNavigation
                      data={navigations.mainNavigation}
                      lang={lang}
                    />
                  </Suspense>
                  <Box marginLeft={1}>
                    <SearchOverlayButton />
                  </Box>
                </Col>
              )}
            </Row>
          </Container>
        </FlexBox>
        <SearchOverlay lang={lang} />
      </Box>
      {isSmallerThanMd && (
        <MobileNavigationsDrawer>
          <MainNavigationMobile data={navigations.mainNavigation} lang={lang} />
          <ListItem style={{ marginTop: 6, alignSelf: "flex-end" }}>
            <SearchBar lang={lang} />
          </ListItem>
          <SecondaryNavigationMobile
            data={navigations.secondaryNavigation}
            lang={lang}
          />
        </MobileNavigationsDrawer>
      )}
    </>
  );
};
