import type { CfFetchById } from "@maverick/types";

import { CfStyledList } from "./render";
import { fetchStyledListData } from "./services";
import { StyledListSkeleton } from "./skeleton";

export const CfStyledListServer = async ({
  id,
  preview,
  lang,
}: CfFetchById) => {
  let data;

  try {
    data = await fetchStyledListData(id, preview);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <StyledListSkeleton />;
  }

  if (!data) {
    return <StyledListSkeleton />;
  }

  return (
    <CfStyledList
      internalTitle={data.internalTitle}
      bulletIcon={data.bulletIcon}
      list={data.list}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
