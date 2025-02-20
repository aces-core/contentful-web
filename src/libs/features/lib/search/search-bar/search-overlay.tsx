"use client";

import { defaultLocale, Locale } from "@maverick/i18n";
import { useUIState } from "@maverick/store";
import { palette } from "@maverick/theme";
import { Slide, Container, FlexBox } from "@maverick/ui";

import { SearchBar } from "./search-bar";

interface SearchOverlayProps {
  lang: Locale;
}

export const SearchOverlay = ({ lang = defaultLocale }: SearchOverlayProps) => {
  const { searchOpen } = useUIState();

  return (
    <Slide in={searchOpen} direction="down" mountOnEnter unmountOnExit>
      <FlexBox
        paddingY={14}
        style={{
          backgroundColor: palette.grey[200],
          boxShadow: "0 40px 40px rgba(0, 0, 0, 0.16)",
          position: "absolute",
          width: "100%",
        }}
      >
        <Container maxWidth="md">
          <SearchBar lang={lang} />
        </Container>
      </FlexBox>
    </Slide>
  );
};
