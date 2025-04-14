"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { defaultLocale, getLocale } from "@aces/i18n";
import { useUIState } from "@aces/store";
import {
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Skeleton,
} from "@aces/ui";

import { navigateToSearch } from "../services";

interface SearchBarProps {
  maxWidth?: string;
  shrink?: boolean;
  lang: string;
}

export const SearchBar = ({
  maxWidth,
  shrink,
  lang = defaultLocale,
}: SearchBarProps) => {
  const { mobileMenuOpen, setMobileMenuOpen, searchOpen, setSearchOpen } =
    useUIState();

  const [searchValue, setSearchValue] = useState("");
  const [t, setT] = useState<{ search: string }>();

  const router = useRouter();

  const handleSearch = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      event.type === "keydown" &&
      (event as React.KeyboardEvent).key !== "Enter"
    ) {
      return;
    }

    event.preventDefault();

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    if (searchOpen) {
      setSearchOpen(false);
    }

    setSearchValue("");
    navigateToSearch(searchValue, router.push);
  };

  useEffect(() => {
    const fetchLocale = async () => {
      const localeData = await getLocale(lang, "common");
      setT(localeData);
    };

    fetchLocale();
  }, [lang]);

  return (
    <FormControl style={{ width: "100%", maxWidth: maxWidth }}>
      <InputLabel htmlFor="site-search" shrink={shrink}>
        {t ? `${t.search.search}` : <Skeleton variant="text" width={80} />}
      </InputLabel>
      <OutlinedInput
        id="site-search"
        label={
          t ? `${t.search.search}` : <Skeleton variant="text" width={80} />
        }
        value={searchValue}
        fullWidth
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
        autoFocus={searchOpen}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="site search" onClick={handleSearch}>
              <Icon icon="Search" />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
