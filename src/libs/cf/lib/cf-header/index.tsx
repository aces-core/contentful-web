import type { CfFetchById, Nested } from "@maverick/types";

import { CfHeader } from "./render";
import { fetchHeaderData } from "./services";
import { HeaderSkeleton } from "./skeleton";

export interface CfHeaderServerProps extends CfFetchById, Nested {}

export const CfHeaderServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfHeaderServerProps) => {
  let data;

  try {
    data = await fetchHeaderData(id, preview);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <HeaderSkeleton />;
  }

  if (!data) {
    return <HeaderSkeleton />;
  }

  return (
    <CfHeader
      internalTitle={data.internalTitle}
      headline={data.headline}
      headerType={data.headerType}
      alignment={data.alignment}
      containerWidth={data.containerWidth}
      nested={nested}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
