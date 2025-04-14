import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale } from "@aces/i18n";
import { CatchAllPageProps } from "@aces/types";
import { sliceSlug, specialtyPageRedirect } from "@aces/utils";
import { fetchPageData } from "@aces/contentful";
import {
  buildMetadata,
  DefaultPageBody,
  DefaultPageHero,
} from "@aces/features";

export async function generateMetadata({
  params,
}: {
  params: Promise<CatchAllPageProps>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { slug } = resolvedParams;

  const pageData = await fetchPageData(sliceSlug(slug), isEnabled);
  const pageResponse = pageData.pageResponse.data.pageCollection.items[0];

  if (!pageResponse) {
    notFound();
  }

  return await buildMetadata(pageResponse.seo, {});
}

export default async function Page({
  params,
}: {
  params: Promise<CatchAllPageProps>;
}) {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale, slug } = resolvedParams;

  const pageData = await fetchPageData(sliceSlug(slug), isEnabled, lang);
  const pageResponse = pageData.pageResponse.data.pageCollection.items[0];

  if (!pageResponse) {
    notFound();
  }

  const pageHeroResponse = pageData.pageHeroResponse.data.page.pageHero;
  const pageBodyResponse =
    pageData.pageBodyResponse.data.page.pageBodyCollection.items;

  specialtyPageRedirect(pageResponse.specialtyPage);

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
