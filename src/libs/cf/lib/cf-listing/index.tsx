import type { CfFetchById } from "@aces/types";

import { CfListing } from "./render";
import { fetchListingData } from "./services";
import { ListingSkeleton } from "./skeleton";

export interface CfListingServerProps extends CfFetchById {}

export const CfListingServer = async ({
  id,
  preview,
  lang,
}: CfListingServerProps) => {
  let data;

  try {
    data = await fetchListingData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <ListingSkeleton />;
  }

  if (!data) {
    return <ListingSkeleton />;
  }

  return (
    <CfListing
      internalTitle={data.internalTitle}
      listingType={data.listingType}
      gridColumnCount={data.gridColumnCount}
      listItems={data.listItemsCollection.items}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
