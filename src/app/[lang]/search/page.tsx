import type { Metadata } from "next";
import { draftMode } from "next/headers";

import { defaultLocale } from "@maverick/i18n";
import { PageProps } from "@maverick/types";
import { Container } from "@maverick/ui";
import { Suspense } from "react";
import { SearchParams, SearchResultsSkeleton } from "@maverick/features";

export default async function ArticlePage({
  params,
}: {
  params: Promise<PageProps>;
}) {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;

  return (
    <Container>
      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchParams query="q" preview={isEnabled} lang={lang} />
      </Suspense>
    </Container>
  );
}
