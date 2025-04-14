"use client";

import { useState, useEffect } from "react";

import { defaultLocale } from "@aces/i18n";
import { useGetLocale } from "@aces/hooks";
import { Box, H3, Text } from "@aces/ui";

import { fetchSearchResults } from "../services";
import { SearchResultsSkeleton } from "../skeleton";

export interface SearchResultsListingProps {
  query: string;
  preview?: boolean;
  lang?: string;
}

export const SearchResultsListing = ({
  query,
  preview = false,
  lang = defaultLocale,
}: SearchResultsListingProps) => {
  const { t } = useGetLocale(lang, "common");

  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchSearchResults(query, preview, lang);
        setData(result);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, preview, lang]);

  console.log(data);

  if (loading) {
    return <SearchResultsSkeleton />;
  }

  if (error) {
    return <Text>{`${t ? t.search.searchError : ""}: ${query}`}</Text>;
  }

  return (
    <Box>
      <Box>
        <H3>
          {t ? t.search.resultsFor : ""} <b>{query}</b>
        </H3>
      </Box>
    </Box>
  );
};
