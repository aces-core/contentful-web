import type { Metadata } from "next";
import { draftMode } from "next/headers";

import { defaultLocale, getLocale } from "@aces/i18n";
import { PageProps } from "@aces/types";
import { Box, Container } from "@aces/ui";
import {
  buildMetadata,
  globalSearchQuery,
  SearchParams,
  TopSearchResults,
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
}: {
  params: Promise<PageProps>;
}) {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;

  return (
    <Box marginY={8}>
      <Container>
        <SearchParams queryParam={globalSearchQuery}>
          <TopSearchResults preview={isEnabled} lang={lang} />
        </SearchParams>
      </Container>
    </Box>
  );
}
