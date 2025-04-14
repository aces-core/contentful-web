import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale } from "@aces/i18n";
import { PageProps, SpecialtyPages } from "@aces/types";
import { fetchSpecialtyPageData } from "@aces/contentful";
import {
  buildMetadata,
  DefaultPageBody,
  DefaultPageHero,
} from "@aces/features";

export async function generateMetadata(): Promise<Metadata> {
  const { isEnabled } = await draftMode();
  const pageData = await fetchSpecialtyPageData(
    SpecialtyPages.Homepage,
    isEnabled,
  );
  const pageResponse = pageData.pageResponse.data.pageCollection.items[0];

  if (!pageResponse) {
    notFound();
  }

  return await buildMetadata(pageResponse.seo, {});
}

export default async function Homepage({
  params,
}: {
  params: Promise<PageProps>;
}) {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;

  const pageData = await fetchSpecialtyPageData(
    SpecialtyPages.Homepage,
    isEnabled,
    lang,
  );
  const pageResponse = pageData.pageResponse.data.pageCollection.items[0];

  if (!pageResponse) {
    notFound();
  }

  const pageHeroResponse = pageData.pageHeroResponse.data.page.pageHero;
  const pageBodyResponse =
    pageData.pageBodyResponse.data.page.pageBodyCollection.items;

  return (
    <>
      <DefaultPageHero
        item={pageHeroResponse}
        preview={isEnabled}
        lang={lang}
      />
      <DefaultPageBody
        items={pageBodyResponse}
        preview={isEnabled}
        lang={lang}
      />
    </>
  );
}
