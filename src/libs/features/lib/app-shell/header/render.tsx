"use client";

import { useEffect, useState } from "react";

import { CfBaseComponent, RouteDirectory } from "@aces/types";
import { useUIState } from "@aces/store";
import { useMediaQuery } from "@aces/hooks";
import { palette } from "@aces/theme";
import { Box, Col, Container, FlexBox, Row, Link } from "@aces/ui";

import {
  MainNavigation,
  MainNavigationMobileSlideTopLevel,
  SecondaryNavigationMobile,
  SecondaryNavigation,
} from "../../navigations";
import { SearchBar } from "../../search";
import { Logo, LogosType } from "../logo/render";
import {
  GlobalSearchButton,
  GlobalSearchDrawer,
  MobileNavigationsButton,
  MobileNavigationsDrawerSlide,
} from "../drawers";
import { EnableSearch } from "../../../config";

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

  const { isSmallerThanLg, isLargerThanLg } = useMediaQuery();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (sticky) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Box
        style={{
          borderBottom: `1px solid ${palette.border.light}`,
          position: sticky ? "sticky" : "relative",
          top: "0",
          width: "100%",
          zIndex: 999,
        }}
      >
        <FlexBox
          component="header"
          paddingY={{ xs: "7px", lg: 0 }}
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
              flexDirection={{ xs: "row", lg: "row" }}
              style={{
                minHeight: { xs: "52px", lg: "123px" },
                width: "100%",
              }}
            >
              <Col
                size={{ xs: 8, lg: 2 }}
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
                    width={{ xs: 112, lg: 164 }}
                    preview={preview}
                    lang={lang}
                  />
                </Link>
              </Col>
              {isSmallerThanLg ? (
                <Col
                  size={{ xs: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  {EnableSearch && (
                    <Box marginRight={1}>
                      <GlobalSearchButton
                        color="secondary"
                        variant="standard"
                      />
                    </Box>
                  )}
                  <MobileNavigationsButton noToggle />
                </Col>
              ) : isLargerThanLg ? (
                <Col size={{ xs: 10 }}>
                  <FlexBox
                    alignItems="flex-end"
                    justifyContent="flex-end"
                    flexDirection="column"
                  >
                    <SecondaryNavigation
                      data={navigations.secondaryNavigation}
                      id={id}
                      lang={lang}
                    />
                    <FlexBox alignItems="center" justifyContent="flex-end">
                      <MainNavigation
                        data={navigations.mainNavigation}
                        id={id}
                        lang={lang}
                      />
                      {EnableSearch && (
                        <Box marginLeft={{ lg: 2, xl: 10 }}>
                          <GlobalSearchButton variant="standard" />
                        </Box>
                      )}
                    </FlexBox>
                  </FlexBox>
                </Col>
              ) : null}
            </Row>
          </Container>
        </FlexBox>
        <GlobalSearchDrawer>
          <SearchBar lang={lang} showSearchClose={true} />
        </GlobalSearchDrawer>
      </Box>
      {isSmallerThanLg && (
        <MobileNavigationsDrawerSlide lang={lang}>
          <MainNavigationMobileSlideTopLevel
            data={navigations.mainNavigation}
            id={id}
            lang={lang}
          />
          <SecondaryNavigationMobile
            data={navigations.secondaryNavigation}
            id={id}
            lang={lang}
          />
        </MobileNavigationsDrawerSlide>
      )}
    </>
  );
};
