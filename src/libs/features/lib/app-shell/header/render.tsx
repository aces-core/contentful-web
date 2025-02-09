"use client";

import { Suspense, useEffect, useState } from "react";

import { RouteDirectory } from "@maverick/types";
import { useMediaQuery } from "@maverick/hooks";
import {
  Box,
  Col,
  Container,
  FlexBox,
  Icon,
  IconButton,
  Link,
  Row,
} from "@maverick/ui";

import { Logo, LogosType } from "../logo/render";
import { MainNavigation, MainNavigationMobile } from "../../navigations";
import { SearchBar } from "../../search";

interface HeaderProps {
  logos: LogosType;
  navigations: {
    mainNavigation: [];
  };
  preview: boolean;
  lang: string;
}

export const Header = ({ logos, navigations, preview, lang }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { isSmallerThanMd } = useMediaQuery();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

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
      <Box style={{ height: { xs: "80px" } }} />
      <FlexBox
        component="header"
        paddingY={{ xs: "7px", md: 0 }}
        style={{
          backgroundColor: "common.white",
          boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.08)" : "none",
          position: "fixed",
          top: 0,
          width: "100%",
          transition: "box-shadow 0.15s ease-in-out",
          zIndex: 1000,
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
                <IconButton
                  color="primary"
                  size="large"
                  onClick={handleDrawerToggle}
                >
                  <Icon icon="Menu" />
                </IconButton>
              </Col>
            ) : (
              <>
                <Col
                  size={{ xs: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Suspense fallback={null}>
                    <SearchBar maxWidth="450px" query="q" lang={lang} />
                  </Suspense>
                </Col>
                <Col
                  size={{ xs: 4 }}
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
                </Col>
              </>
            )}
          </Row>
        </Container>
      </FlexBox>
      {isSmallerThanMd && (
        <MainNavigationMobile
          open={drawerOpen}
          onClose={handleDrawerToggle}
          data={navigations.mainNavigation}
          lang={lang}
        />
      )}
    </>
  );
};
