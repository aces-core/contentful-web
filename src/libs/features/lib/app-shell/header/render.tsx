"use client";

import { useEffect, useState } from "react";
import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, RouteDirectory } from "@maverick/types";
import { useUIState } from "@maverick/store";
import { useMediaQuery } from "@maverick/hooks";
import { Box, Col, Container, FlexBox, Row, Link } from "@maverick/ui";

import {
  MainNavigation,
  MainNavigationMobile,
  SecondaryNavigationMobile,
  SecondaryNavigation,
} from "../../navigations";
import { SearchBar } from "../../search";
import { Logo, LogosType } from "../logo/render";
import {
  GlobalSearchButton,
  GlobalSearchDrawer,
  MobileNavigationsButton,
  MobileNavigationsDrawer,
} from "../drawers";

interface HeaderProps
  extends Omit<CfBaseComponent, "internalTitle" | "__typename"> {
  logos: LogosType;
  navigations: {
    mainNavigation: [];
    secondaryNavigation: [];
  };
  sticky?: boolean;
}

export const Header = ({
  logos,
  navigations,
  sticky = true,
  id,
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
          id={id}
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
                  <Box marginRight={1}>
                    <GlobalSearchButton />
                  </Box>
                  <MobileNavigationsButton />
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
                  <MainNavigation
                    data={navigations.mainNavigation}
                    id={id}
                    lang={lang}
                  />
                  <Box marginLeft={1}>
                    <GlobalSearchButton />
                  </Box>
                </Col>
              )}
            </Row>
          </Container>
        </FlexBox>
        <GlobalSearchDrawer>
          <SearchBar shrink={true} lang={lang} />
        </GlobalSearchDrawer>
      </Box>
      {isSmallerThanMd && (
        <MobileNavigationsDrawer>
          <MainNavigationMobile
            data={navigations.mainNavigation}
            id={id}
            lang={lang}
          />
          <SecondaryNavigationMobile
            data={navigations.secondaryNavigation}
            id={id}
            lang={lang}
          />
        </MobileNavigationsDrawer>
      )}
    </>
  );
};
