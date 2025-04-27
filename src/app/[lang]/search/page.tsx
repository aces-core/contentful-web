import { Suspense } from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale, getLocale } from "@aces/i18n";
import { PageProps } from "@aces/types";
import { Box, Container } from "@aces/ui";
import {
  buildMetadata,
  EnableSearch,
  GlobalSearchQuery,
  SearchBar,
  SearchParams,
  TopSearchResults,
  SearchPageBreadcrumbs,
  SearchListing,
  SearchConfig,
  SearchableContentTypes,
  fetchSearchResults,
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
    metaTitle: t.search.title,
    metaDescription: t.search.description,
  };

  return await buildMetadata(seoData, {});
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<PageProps>;
  searchParams: Promise<{
    q: typeof GlobalSearchQuery;
    contentType?: keyof typeof SearchableContentTypes;
  }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const searchQuery = resolvedSearchParams.q || "";
  const contentType = resolvedSearchParams?.contentType
    ? SearchableContentTypes[
        resolvedSearchParams.contentType as keyof typeof SearchableContentTypes
      ]
    : SearchConfig.DefaultSearchContentType;

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;

  if (!EnableSearch) {
    notFound();
  }

  const initialSearchResults = await fetchSearchResults(
    contentType,
    searchQuery,
    SearchConfig.ListingLimit,
    0,
    isEnabled,
  );

  return (
    <SearchParams queryParam={GlobalSearchQuery}>
      <Container>
        <Box marginY={8}>
          <SearchPageBreadcrumbs lang={lang} />
        </Box>
      </Container>
      <Box marginY={10}>
        <Container>
          <SearchBar lang={lang} />
        </Container>
      </Box>
      <TopSearchResults preview={isEnabled} lang={lang} />
      <Suspense fallback={<>Loading...</>}>
        <SearchListing
          initialResults={initialSearchResults.items}
          initialTotal={initialSearchResults.total}
          preview={isEnabled}
          lang={lang}
        />
      </Suspense>
    </SearchParams>
  );
}
