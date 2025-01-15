import { Suspense } from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

import { defaultLocale, getLocale } from "@maverick/i18n";
import { PageProps } from "@maverick/types";
import { Box, Container } from "@maverick/ui";
import {
  ArticleListing,
  ArticleListingSkeleton,
  ArticlesLimit,
  buildMetadata,
  fetchArticles,
} from "@maverick/features";

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
}: {
  params: Promise<PageProps>;
}) {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;

  const initialArticles = await fetchArticles(
    ArticlesLimit,
    0,
    isEnabled,
    lang,
  );

  return (
    <Box marginY={12}>
      <Container>
        <Suspense fallback={<ArticleListingSkeleton limit={ArticlesLimit} />}>
          <ArticleListing
            initialArticles={initialArticles.items}
            initialTotal={initialArticles.total}
            preview={isEnabled}
            locale={lang}
          />
        </Suspense>
      </Container>
    </Box>
  );
}
