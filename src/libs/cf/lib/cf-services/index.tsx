import type { CfFetchById, Nested } from "@aces/types";

import { CfServices } from "./render";
import { fetchServicesData } from "./services";
import { ServicesSkeleton } from "./skeleton";

export interface CfServicesServerProps extends CfFetchById, Nested {}

export const CfServicesServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfServicesServerProps) => {
  let data;

  try {
    data = await fetchServicesData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <ServicesSkeleton />;
  }

  if (!data) {
    return <ServicesSkeleton />;
  }

  return (
    <CfServices
      internalTitle={data.internalTitle}
      headline={data.headline}
      icon={data.icon}
      offeringItems={data.offeringItemsCollection?.items}
      total={data.offeringItemsCollection?.total}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
      nested={nested}
    />
  );
};
