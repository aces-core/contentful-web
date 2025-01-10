import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale } from "@maverick/i18n";
import { CatchAllPageProps } from "@maverick/types";
import { sliceSlug, specialtyPageRedirect } from "@maverick/utils";
import { fetchPageData } from "@maverick/contentful";
import { DefaultPageBody } from "@maverick/features";
import { CfGenerateSeo } from "@maverick/cf";

export default async function Page({
  params,
}: {
  params: Promise<CatchAllPageProps>;
}) {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale, slug } = resolvedParams;

  const pageData = await fetchPageData(sliceSlug(slug), isEnabled);
  const pageResponse = pageData.pageResponse.data.pageCollection.items[0];
  const pageBodyResponse =
    pageData.pageBodyResponse.data.page.pageBodyCollection.items;
  console.log(pageResponse);

  if (!pageResponse) {
    notFound();
  }

  specialtyPageRedirect(pageResponse.specialtyPage);

  return (
    <>
      <DefaultPageBody
        items={pageBodyResponse}
        preview={isEnabled}
        lang={lang}
      />
    </>
  );
}
