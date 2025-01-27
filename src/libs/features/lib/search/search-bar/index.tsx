"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { defaultLocale, getLocale } from "@maverick/i18n";
import {
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Skeleton,
} from "@maverick/ui";

import { navigateToSearch } from "../services";

interface SearchBarProps {
  maxWidth?: string;
  query: string;
  onSearch?: () => void;
  lang: string;
}

export const SearchBar = ({
  maxWidth,
  query,
  onSearch,
  lang = defaultLocale,
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [labelShrink, setLabelShrink] = useState(true);
  const [t, setT] = useState<{ search: string }>();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const checkQuery = searchParams.get(query);
    if (!checkQuery) {
      setSearchValue("");
      setLabelShrink(false);
    } else {
      setSearchValue(checkQuery);
      setLabelShrink(true);
    }
  }, [query, pathname, searchParams]);

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
    if (onSearch) {
      onSearch();
    }
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
      <InputLabel htmlFor="site-search" shrink={labelShrink}>
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
