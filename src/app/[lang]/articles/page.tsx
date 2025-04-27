import { Suspense } from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { fetchAllCategories, fetchSpecialtyPageData } from "@aces/contentful";
import { defaultLocale, getLocale } from "@aces/i18n";
import { PageProps, SpecialtyPages } from "@aces/types";
import { toSingleValueArray } from "@aces/utils";
import { Box, Container } from "@aces/ui";
import {
  ArticleListing,
  ArticleListingSkeleton,
  ArticlesPageBreadcrumbs,
  buildMetadata,
  EnableArticles,
  FeaturedArticlesServer,
  fetchArticles,
  fetchAllArticlesTotal,
  ArticleListingConfig,
  OrderTypes,
} from "@aces/features";

export async function generateMetadata({
  params,
}: {
  params: Promise<PageProps>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  const { lang } = resolvedParams;
  const t = await getLocale(lang, "seo");

  let seoData = {
    metaTitle: t.articles.title,
    metaDescription: t.articles.description,
  };

  const { isEnabled } = await draftMode();
  const pageData = await fetchSpecialtyPageData(
    SpecialtyPages.Articles,
    isEnabled,
  );
  const pageResponse = pageData.pageResponse.data.pageCollection.items[0];

  if (pageResponse) {
    seoData = pageResponse.seo;
  }

  return await buildMetadata(seoData, {});
}

export default async function ArticlesPage({
  params,
  searchParams,
}: {
  params: Promise<PageProps>;
  searchParams: Promise<{ categories?: string[]; order?: OrderTypes }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const categories = resolvedSearchParams?.categories
    ? toSingleValueArray(resolvedSearchParams?.categories)
    : null;
  const order =
    resolvedSearchParams?.order || ArticleListingConfig.DefaultOrder;

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;

  if (!EnableArticles) {
    notFound();
  }

  const initialArticles = await fetchArticles(
    categories,
    ArticleListingConfig.ArticlesLimit,
    0,
    order,
    [],
    isEnabled,
    lang,
  );

  const allArticlesTotal = await fetchAllArticlesTotal(isEnabled, lang);

  const categoriesCollection = await fetchAllCategories(isEnabled, lang);

  return (
    <Box marginY={8}>
      <Container>
        <ArticlesPageBreadcrumbs lang={lang} />
        <FeaturedArticlesServer
          title="Featured Articles"
          lang={lang}
          preview={isEnabled}
        />
        <Suspense
          fallback={
            <ArticleListingSkeleton
              limit={ArticleListingConfig.ArticlesLimit}
            />
          }
        >
          <ArticleListing
            initialArticles={initialArticles.items}
            initialTotal={initialArticles.total}
            categoriesCollection={categoriesCollection}
            allArticlesTotal={allArticlesTotal}
            preview={isEnabled}
            lang={lang}
            hideFeatured
          />
        </Suspense>
      </Container>
    </Box>
  );
}
