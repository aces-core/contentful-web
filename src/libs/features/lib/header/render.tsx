"use client";

import { Suspense, useEffect, useState } from "react";

import { Box, Container, FlexBox, Link, Text } from "@maverick/ui";
import { Logo, LogosType } from "@maverick/cf";

import { MainNavigation } from "../navigations";
import { RouteDirectory } from "@maverick/types";

interface HeaderProps {
  logos: LogosType;
  navigations: {
    mainNavigations: [];
  };
  preview: boolean;
  lang: string;
}

export const Header = ({ logos, navigations, preview, lang }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <Box style={{ height: "80px" }} />
      <FlexBox
        component="header"
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
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingY: { xs: "0.75rem", md: 0 },
          }}
        >
          <Link href={RouteDirectory.Homepage}>
            <Logo
              logos={logos}
              variant="fullColorLogo"
              width={{ xs: 120, md: 180 }}
              preview={preview}
              lang={lang}
            />
          </Link>
          <Text>Search</Text>
          <Suspense fallback={null}>
            <MainNavigation data={navigations.mainNavigations} lang={lang} />
          </Suspense>
        </Container>
      </FlexBox>
    </>
  );
};
