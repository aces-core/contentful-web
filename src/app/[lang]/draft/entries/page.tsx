import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale } from "@maverick/i18n";
import { CatchAllPageProps } from "@maverick/types";
import { fetchEntryData } from "@maverick/contentful";
import { EntriesPreview } from "@maverick/features";

export default async function DraftEntries({
  params,
  searchParams,
}: {
  params: Promise<CatchAllPageProps>;
  searchParams: Promise<{ id: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale } = resolvedParams;
  const { id } = resolvedSearchParams;

  if (!isEnabled || !id) {
    notFound();
  }

  const entryData = await fetchEntryData(id, true, lang);

  return <EntriesPreview item={entryData[0]} preview={true} lang={lang} />;
}
