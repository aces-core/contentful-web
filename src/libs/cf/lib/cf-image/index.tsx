import type { CfFetchById, ResponsiveSpacing } from "@maverick/types";

import { CfImage, CfImageCover } from "./render";
import { fetchImageData } from "./services";
import { ImageSkeleton } from "./skeleton";

export interface CfImageServerProps extends CfFetchById {
  nested?: boolean;
  responsive?: boolean;
}

export const CfImageServer = async ({
  id,
  preview,
  lang,
  nested,
  responsive,
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
      responsive={responsive}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};

export interface CfImageCoverServerProps extends CfFetchById {
  coverWidth: ResponsiveSpacing;
  coverHeight: ResponsiveSpacing;
  nested?: boolean;
}

export const CfImageCoverServer = async ({
  id,
  preview,
  lang,
  coverWidth = "100%",
  coverHeight = "380px",
  nested,
}: CfImageCoverServerProps) => {
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
    <CfImageCover
      internalTitle={data.internalTitle}
      image={data.image}
      coverWidth={coverWidth}
      coverHeight={coverHeight}
      nested={nested}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
