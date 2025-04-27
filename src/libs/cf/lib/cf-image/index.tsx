import { CSSProperties } from "react";

import type { CfFetchById, Nested, ResponsiveSpacing } from "@aces/types";

import { CfImage, CfImageCover } from "./render";
import { fetchImageData } from "./services";
import { ImageSkeleton } from "./skeleton";

export interface CfImageServerProps extends CfFetchById, Nested {
  responsive?: boolean;
  style?: CSSProperties;
}

export const CfImageServer = async ({
  id,
  preview,
  lang,
  nested,
  responsive,
  style,
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
      nativeImageSize={data.nativeImageSize}
      __typename={data.__typename}
      nested={nested}
      responsive={responsive}
      style={style}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};

export interface CfImageCoverServerProps extends CfFetchById, Nested {
  coverWidth: ResponsiveSpacing;
  coverHeight: ResponsiveSpacing;
  borderRadius?: ResponsiveSpacing;
  style?: CSSProperties;
}

export const CfImageCoverServer = async ({
  id,
  preview,
  lang,
  borderRadius,
  coverWidth = "100%",
  coverHeight = "380px",
  nested,
  style,
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
      borderRadius={borderRadius}
      coverWidth={coverWidth}
      coverHeight={coverHeight}
      nested={nested}
      style={style}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
