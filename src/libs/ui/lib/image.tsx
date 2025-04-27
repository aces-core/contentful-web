import React from "react";
import NextImage from "next/image";

import { spacing } from "@aces/theme";
import { Box } from "@aces/ui";
import { ResponsiveSpacing } from "@aces/types";

type ImageFormat = "jpg" | "png" | "webp" | "gif" | "avif";

interface BaseImageProps {
  url: string;
  width: number;
  height: number;
  maxWidth?: number;
  maxHeight?: number;
  alt?: string;
  fill?: boolean;
  disableImageApi?: boolean;
  format?: ImageFormat;
  intrinsicWidth?: number;
  marginY?: number;
  marginX?: number;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export const BaseImage = ({
  alt,
  url,
  format = "webp",
  disableImageApi = false,
  intrinsicWidth,
  style,
  ...props
}: BaseImageProps) => {
  const maxWidth = 1800;
  const widthParam = intrinsicWidth
    ? `w=${Math.min(intrinsicWidth, maxWidth)}`
    : `w=${maxWidth}`;
  const formatParam = format ? `fm=${format}` : "";
  const queryParams = [formatParam, widthParam].filter(Boolean).join("&");
  const imageApiParams = queryParams ? `?${queryParams}` : "";
  const urlWithParams = url + imageApiParams;

  return (
    <NextImage
      src={imageApiParams && !disableImageApi ? urlWithParams : url}
      alt={alt || ""}
      style={style}
      {...props}
    />
  );
};

export const Image = ({
  url,
  alt,
  format,
  width,
  maxWidth,
  maxHeight,
  responsive,
  marginY,
  marginX,
  style,
  ...props
}: BaseImageProps) => {
  return (
    <BaseImage
      alt={alt ? alt : ""}
      url={url}
      format={format}
      width={width}
      intrinsicWidth={width}
      style={{
        display: "block",
        maxWidth: maxWidth ? maxWidth : "100%",
        maxHeight: maxHeight ? maxHeight : "none",
        width: responsive ? "100%" : undefined,
        height: responsive ? "auto" : undefined,
        marginTop: marginY ? marginY * spacing : undefined,
        marginBottom: marginY ? marginY * spacing : undefined,
        marginRight: marginX ? marginX * spacing : undefined,
        marginLeft: marginX ? marginX * spacing : undefined,
        ...style,
      }}
      {...props}
    />
  );
};

interface ImageFillProps extends BaseImageProps {
  containerMaxWidth?: ResponsiveSpacing;
  containerHeight?: ResponsiveSpacing;
  containerMinHeight?: ResponsiveSpacing;
  containerMaxHeight?: ResponsiveSpacing;
}

export const ImageFill = ({
  format,
  width,
  containerMaxWidth,
  containerHeight,
  containerMinHeight,
  containerMaxHeight,
  marginY,
  marginX,
  style,
  ...props
}: ImageFillProps) => {
  return (
    <Box
      style={{
        position: "absolute",
        width: "100%",
        maxWidth: containerMaxWidth || "100%",
        height: containerHeight || "100%",
        minHeight: containerMinHeight && containerMinHeight,
        maxHeight: containerMaxHeight && containerMaxHeight,
        overflow: "hidden",
        marginTop: marginY,
        marginBottom: marginY,
        marginRight: marginX,
        marginLeft: marginX,
      }}
    >
      <BaseImage
        format={format}
        width={width}
        intrinsicWidth={width}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          width: "100%",
          height: "100%",
          inset: "0px",
          ...style,
        }}
        {...props}
      />
    </Box>
  );
};

interface ImageCoverProps extends BaseImageProps {
  coverWidth: ResponsiveSpacing;
  coverHeight: ResponsiveSpacing;
  objectFit?: "cover" | "contain";
  borderRadius?: ResponsiveSpacing;
}

export const ImageCover = ({
  format,
  width,
  marginY,
  marginX,
  coverWidth = "100%",
  coverHeight = "380px",
  objectFit = "cover",
  borderRadius,
  style,
  ...props
}: ImageCoverProps) => {
  return (
    <Box
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: coverWidth,
        height: coverHeight,
        overflow: "hidden",
        marginTop: marginY,
        marginBottom: marginY,
        marginRight: marginX,
        marginLeft: marginX,
        borderRadius: borderRadius,
      }}
    >
      <BaseImage
        format={format}
        width={width}
        intrinsicWidth={width}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: objectFit,
          width: "100%",
          height: "100%",
          inset: "0px",
          ...style,
        }}
        {...props}
      />
    </Box>
  );
};
