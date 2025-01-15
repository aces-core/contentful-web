"use client";

import { useState, useEffect, useRef } from "react";

import { defaultLocale } from "@maverick/i18n";
import { Box, Col, Row } from "@maverick/ui";

import { ArticlesLimit } from "./config";
import { fetchArticles } from "./services";
import { ArticleListingSkeleton } from "./skeleton";

import { ArticleCard, ArticleCardProps } from "../article-card";

export interface ArticleListingProps {
  initialArticles: any[];
  initialTotal: number;
  preview?: boolean;
  locale?: string;
}

export const ArticleListing = ({
  initialArticles,
  initialTotal,
  preview = false,
  locale = defaultLocale,
}: ArticleListingProps) => {
  const [articles, setArticles] = useState(initialArticles);
  const [total, setTotal] = useState(initialTotal);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadingRef = useRef(false);

  const loadMoreArticles = async () => {
    if (loadingRef.current || articles.length >= total || !hasMore) return;

    loadingRef.current = true;
    setIsLoading(true);

    try {
      const offset = articles.length;
      const { items: newArticles, total: updatedTotal } = await fetchArticles(
        ArticlesLimit,
        offset,
        preview,
        locale,
      );

      setArticles((prev) => [...prev, ...newArticles]);
      setTotal(updatedTotal);
      setHasMore(newArticles.length > 0);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      loadingRef.current = false; // Reset loading flag
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreArticles();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles, total, hasMore]);

  return (
    <>
      <Row columnSpacing={8} rowSpacing={8}>
        {articles.map((item: ArticleCardProps) => (
          <Col key={item.slug} size={{ xs: 12, md: 6 }}>
            <ArticleCard
              featuredImage={item.featuredImage}
              title={item.title}
              author={item.author}
              publishDate={item.publishDate}
              slug={item.slug}
              lang={locale}
            />
          </Col>
        ))}
      </Row>
      {isLoading && <ArticleListingSkeleton limit={ArticlesLimit} />}
    </>
  );
};
