import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale } from "@maverick/i18n";
import { PageProps, SpecialtyPages } from "@maverick/types";
import { fetchSpecialtyPageData } from "@maverick/contentful";
import { DefaultPageBody } from "@maverick/features";
import { CfGenerateSeo } from "@maverick/cf";

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
  );
  const pageResponse = pageData.pageResponse.data.pageCollection.items[0];
  const pageBodyResponse =
    pageData.pageBodyResponse.data.page.pageBodyCollection.items;

  if (!pageResponse) {
    notFound();
  }

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
