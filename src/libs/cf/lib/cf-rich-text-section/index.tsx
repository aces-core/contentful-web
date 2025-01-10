import type { CfFetchById } from "@maverick/types";

import { CfRichTextSection } from "./render";
import { fetchRichTextSectionData } from "./services";
import { RichTextSectionSkeleton } from "./skeleton";

export const CfRichTextSectionServer = async ({
  id,
  preview,
  lang,
}: CfFetchById) => {
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
      grayBackground={data.grayBackground}
      bodyCopy={data.bodyCopy}
      border={data.border}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
