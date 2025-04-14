"use client";

import { useEffect, useState } from "react";

import { Locale } from "@aces/i18n";
import { RouteDirectory } from "@aces/types";
import { Box, LinkWrapper } from "@aces/ui";

import { fetchTopSearchResults } from "./services";
import { ResultsCard } from "./results-card";

interface ArticleResultCardProps {
  title: string;
  slug: string;
}

export const ArticleResultCard = ({ title, slug }: ArticleResultCardProps) => {
  return (
    <LinkWrapper href={`${RouteDirectory.Articles}/${slug}`} passHref>
      <ResultsCard title={title} />
    </LinkWrapper>
  );
};

interface TopSearchResultsProps {
  query?: string | null;
  preview: boolean;
  lang: Locale;
}

export const TopSearchResults = ({
  query,
  preview,
  lang,
}: TopSearchResultsProps) => {
  const [pageResults, setPageResults] = useState<any[]>([]);
  const [articleResults, setArticleResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResults = async () => {
    try {
      const { pages, articles } = await fetchTopSearchResults(
        query,
        preview,
        lang,
      );

      setPageResults(pages);
      setArticleResults(articles);
    } catch (error) {
      console.error("Error fetching updated articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  });

  if (!query) {
    return null;
  }

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  console.log(pageResults);
  console.log(articleResults);

  return (
    <Box>
      {articleResults.map((item, index) => (
        <ArticleResultCard
          key={`${item.slug}-${index}`}
          title={item.title}
          slug={item.slug}
        />
      ))}
    </Box>
  );
};
