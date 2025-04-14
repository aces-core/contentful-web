import { Suspense } from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

import { fetchAllCategories } from "@aces/contentful";
import { defaultLocale, getLocale } from "@aces/i18n";
import { PageProps } from "@aces/types";
import { toSingleValueArray } from "@aces/utils";
import { Box, Container } from "@aces/ui";
import {
  ArticleListing,
  ArticleListingSkeleton,
  ArticlesLimit,
  buildMetadata,
  DefaultOrder,
  fetchArticles,
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

  const seoData = {
    metaTitle: t.articles.title,
    metaDescription: t.articles.description,
  };

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
  const order = resolvedSearchParams?.order || DefaultOrder;

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;

  const initialArticles = await fetchArticles(
    categories,
    ArticlesLimit,
    0,
    order,
    isEnabled,
    lang,
  );

  const categoriesCollection = await fetchAllCategories(isEnabled, lang);

  return (
    <Box marginY={8}>
      <Container>
        <Suspense fallback={<ArticleListingSkeleton limit={ArticlesLimit} />}>
          <ArticleListing
            initialArticles={initialArticles.items}
            initialTotal={initialArticles.total}
            categoriesCollection={categoriesCollection.items}
            preview={isEnabled}
            lang={lang}
          />
        </Suspense>
      </Container>
    </Box>
  );
}
