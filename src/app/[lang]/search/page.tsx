import type { Metadata } from "next";
import { draftMode } from "next/headers";

import { defaultLocale, getLocale } from "@maverick/i18n";
import { PageProps } from "@maverick/types";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  FlexBox,
  H1,
  H6,
  Paper,
  Text,
} from "@maverick/ui";
import { Suspense } from "react";
import { SearchParams, SearchResultsSkeleton } from "@maverick/features";

export const metadata: Metadata = {
  title: "Search",
};

export default async function ArticlePage({ params }: { params: PageProps }) {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;

  const t = await getLocale(lang, "common");

  return (
    <Container>
      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchParams query="q" preview={isEnabled} lang={lang} />
      </Suspense>
    </Container>
  );
}
