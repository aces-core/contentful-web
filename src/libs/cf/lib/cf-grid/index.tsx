import type { CfFetchById, Nested } from "@aces/types";

import { CfGrid } from "./render";
import { fetchGridData } from "./services";
import { GridSkeleton } from "./skeleton";

export interface CfGridServerProps extends CfFetchById, Nested {}

export const CfGridServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfGridServerProps) => {
  let data;

  try {
    data = await fetchGridData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <GridSkeleton />;
  }

  if (!data) {
    return <GridSkeleton />;
  }

  return (
    <CfGrid
      internalTitle={data.internalTitle}
      showDividers={data.showDividers}
      gridColumnCount={data.gridColumnCount}
      gridItemsStyle={data.gridItemsStyle}
      listItems={data.listItemsCollection.items}
      __typename={data.__typename}
      nested={nested}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
