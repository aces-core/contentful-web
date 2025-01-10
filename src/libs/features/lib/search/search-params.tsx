"use client";

import { useSearchParams } from "next/navigation";
import { SearchResults, SearchResultsProps } from "./search-results";
import { defaultLocale } from "@maverick/i18n";

export const SearchParams = ({
  query,
  preview = false,
  lang = defaultLocale,
}: SearchResultsProps) => {
  const searchParams = useSearchParams();

  const queryValue = searchParams.get(query);

  if (queryValue === null) {
    return null;
  }

  return <SearchResults query={queryValue} preview={preview} lang={lang} />;
};
