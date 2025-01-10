import type { CfFetchById } from "@maverick/types";

import { CfImage } from "./render";
import { fetchImageData } from "./services";
import { ImageSkeleton } from "./skeleton";

export interface CfImageServerProps extends CfFetchById {
  nested?: boolean;
}

export const CfImageServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfImageServerProps) => {
  let data;

  try {
    data = await fetchImageData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <ImageSkeleton />;
  }

  if (!data) {
    return <ImageSkeleton />;
  }

  return (
    <CfImage
      internalTitle={data.internalTitle}
      image={data.image}
      nested={nested}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
