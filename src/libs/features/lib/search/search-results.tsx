"use client";

import { useState, useEffect } from "react";

import { defaultLocale } from "@maverick/i18n";

import { fetchSearchResults } from "./services";
import { SearchResultsSkeleton } from "./skeleton";

export interface SearchResultsProps {
  query: string;
  preview?: boolean;
  lang?: string;
}

export const SearchResults = ({
  query,
  preview = false,
  lang = defaultLocale,
}: SearchResultsProps) => {
  const [data, setData] = useState(null);
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

  if (loading) {
    return <SearchResultsSkeleton />;
  }

  if (error) {
    return <div>Error loading search results: {error.message}</div>;
  }

  if (!data) {
    return <SearchResultsSkeleton />;
  }

  console.log(data);
  return (
    <div>
      <h2>Search Results for: {query}</h2>
      {/* Render your search results here */}
    </div>
  );
};
