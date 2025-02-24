import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale } from "@maverick/i18n";
import { PageProps, SpecialtyPages } from "@maverick/types";
import { fetchSpecialtyPageData } from "@maverick/contentful";
import {
  buildMetadata,
  DefaultPageBody,
  DefaultPageHero,
} from "@maverick/features";

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
  const pageHeroResponse = pageData.pageHeroResponse.data.page.pageHero;
  const pageBodyResponse =
    pageData.pageBodyResponse.data.page.pageBodyCollection.items;

  if (!pageResponse) {
    notFound();
  }

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
