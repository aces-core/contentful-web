import type { CfAlignment, CfFetchById, Nested } from "@aces/types";

import { CfHeader } from "./render";
import { fetchHeaderData } from "./services";
import { HeaderSkeleton } from "./skeleton";

export interface CfHeaderServerProps extends CfFetchById, Nested {
  alignment?: CfAlignment;
}

export const CfHeaderServer = async ({
  id,
  preview,
  lang,
  nested,
  alignment,
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
      alignment={alignment ? alignment : data.alignment}
      containerWidth={data.containerWidth}
      nested={nested}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
