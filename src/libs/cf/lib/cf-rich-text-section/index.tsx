import type { CfFetchById, Nested, SmallPadding } from "@aces/types";

import { CfRichTextSection } from "./render";
import { fetchRichTextSectionData } from "./services";
import { RichTextSectionSkeleton } from "./skeleton";

export interface CfRichTextSectionServerProps
  extends CfFetchById,
    Nested,
    SmallPadding {}

export const CfRichTextSectionServer = async ({
  id,
  preview,
  lang,
  nested,
  smallPadding,
}: CfRichTextSectionServerProps) => {
  let data;

  try {
    data = await fetchRichTextSectionData(id, preview);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <RichTextSectionSkeleton />;
  }

  if (!data) {
    return <RichTextSectionSkeleton />;
  }

  return (
    <CfRichTextSection
      internalTitle={data.internalTitle}
      alignment={data.alignment}
      containerWidth={data.containerWidth}
      cfComponentSpacing={data.componentSpacing}
      grayBackground={data.grayBackground}
      bodyCopy={data.bodyCopy}
      border={data.border}
      __typename={data.__typename}
      nested={nested}
      smallPadding={smallPadding}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
