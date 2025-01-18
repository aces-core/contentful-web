"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { defaultLocale } from "@maverick/i18n";
import { toSingleValueArray } from "@maverick/utils";
import { Col, FlexBox, Row } from "@maverick/ui";

import { ArticlesLimit, OrderTypes, DefaultOrder, Query } from "./config";
import { fetchArticles } from "./services";
import { ArticleListingFilters } from "./filters";
import { ArticleListingSkeleton } from "./skeleton";

import { ArticleCard, ArticleCardProps } from "../article-card";

export interface ArticleListingProps {
  initialArticles: any[];
  initialTotal: number;
  categoriesCollection: any[];
  preview?: boolean;
  lang?: string;
}

export const ArticleListing = ({
  initialArticles,
  initialTotal,
  categoriesCollection,
  preview = false,
  lang = defaultLocale,
}: ArticleListingProps) => {
  const [articles, setArticles] = useState(initialArticles);
  const [total, setTotal] = useState(initialTotal);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const searchParams = useSearchParams();

  const loadingRef = useRef(false);

  const fetchUpdatedArticles = async () => {
    const categoriesParam = searchParams.get(Query.categories)
      ? searchParams.get(Query.categories)
      : null;
    const orderParam = searchParams.get(Query.order)
      ? searchParams.get(Query.order)
      : DefaultOrder;

    const categories = toSingleValueArray(categoriesParam);
    const order = orderParam as OrderTypes;

    setIsLoading(true);

    try {
      const { items: newArticles, total: updatedTotal } = await fetchArticles(
        categories,
        ArticlesLimit,
        0,
        order,
        preview,
        lang,
      );

      setArticles(newArticles);
      setTotal(updatedTotal);
      setHasMore(newArticles.length > 0);
    } catch (error) {
      console.error("Error fetching updated articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdatedArticles();
  }, [searchParams]);

  const loadMoreArticles = async () => {
    if (loadingRef.current || articles.length >= total || !hasMore) return;

    loadingRef.current = true;
    setIsLoading(true);

    try {
      const offset = articles.length;
      const categoriesParam = searchParams.get(Query.categories)
        ? searchParams.get(Query.categories)
        : null;
      const orderParam = searchParams.get(Query.order)
        ? searchParams.get(Query.order)
        : DefaultOrder;

      const categories = toSingleValueArray(categoriesParam);
      const order = orderParam as OrderTypes;

      const { items: newArticles, total: updatedTotal } = await fetchArticles(
        categories,
        ArticlesLimit,
        offset,
        order,
        preview,
        lang,
      );

      setArticles((prev) => [...prev, ...newArticles]);
      setTotal(updatedTotal);
      setHasMore(newArticles.length > 0);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      loadingRef.current = false;
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
  }, [articles, total, hasMore, searchParams]);

  return (
    <>
      <FlexBox alignItems="center" justifyContent="flex-end" marginBottom={12}>
        <ArticleListingFilters
          categoriesCollection={categoriesCollection}
          categories={toSingleValueArray(searchParams.get(Query.categories))}
          setCategories={() => {}}
          setOrder={() => {}}
          lang={lang}
        />
      </FlexBox>
      <Row columnSpacing={8} rowSpacing={8}>
        {articles.map((item: ArticleCardProps) => (
          <Col
            key={item.slug}
            size={{ xs: 12, md: 6 }}
            style={{ display: "flex" }}
          >
            <ArticleCard
              featuredImage={item.featuredImage}
              title={item.title}
              author={item.author}
              publishDate={item.publishDate}
              slug={item.slug}
              lang={lang}
            />
          </Col>
        ))}
      </Row>
      {isLoading && <ArticleListingSkeleton limit={ArticlesLimit} />}
    </>
  );
};
