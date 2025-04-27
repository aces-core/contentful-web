import type { CfFetchById } from "@aces/types";

import { CfOfferingItem } from "./render";
import { fetchOfferingItemData } from "./services";
import { OfferingItemSkeleton } from "./skeleton";

export interface CfOfferingItemServerProps extends CfFetchById {}

export const CfOfferingItemServer = async ({
  id,
  preview,
  lang,
}: CfOfferingItemServerProps) => {
  let data;

  try {
    data = await fetchOfferingItemData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <OfferingItemSkeleton />;
  }

  if (!data) {
    return <OfferingItemSkeleton />;
  }

  return (
    <CfOfferingItem
      internalTitle={data.internalTitle}
      icon={data.icon}
      headline={data.headline}
      bodyCopy={data.bodyCopy}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
