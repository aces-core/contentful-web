import type { CfFetchById } from "@aces/types";

import { CfOfferings } from "./render";
import { fetchOfferingsData } from "./services";
import { OfferingsSkeleton } from "./skeleton";

export interface CfOfferingsServerProps extends CfFetchById {}

export const CfOfferingsServer = async ({
  id,
  preview,
  lang,
}: CfOfferingsServerProps) => {
  let data;

  try {
    data = await fetchOfferingsData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <OfferingsSkeleton />;
  }

  if (!data) {
    return <OfferingsSkeleton />;
  }

  return (
    <CfOfferings
      internalTitle={data.internalTitle}
      media={data.media}
      headline={data.headline}
      bodyCopy={data.bodyCopy}
      button={data.button}
      offeringItems={data.offeringItemsCollection?.items}
      total={data.offeringItemsCollection?.total}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
