import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfImageProps, ResponsiveSpacing } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing } from "@aces/theme";
import { Box, Container, Image, ImageCover, ImageFill } from "@aces/ui";

import { ImageSkeleton } from "./skeleton";

export const CfImage = ({
  internalTitle,
  image,
  altText = "",
  nativeImageSize,
  nested = false,
  responsive = true,
  maxWidth,
  maxHeight,
  style,
  __typename,
  id,
  lang,
}: CfImageProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{
        xs: !nested ? componentSpacing.xs : 0,
        md: !nested ? componentSpacing.md : 0,
      }}
    >
      <Container nested={nested}>
        {!image || !image.url ? (
          <ImageSkeleton
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        ) : (
          <Image
            url={image.url}
            alt={altText}
            width={image.width}
            height={image.height}
            responsive={nativeImageSize ? false : responsive}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            style={
              nativeImageSize
                ? {
                    ...style,
                    maxWidth: "100%",
                  }
                : style
            }
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        )}
      </Container>
    </Box>
  );
};

interface CfImageCoverProps extends CfImageProps {
  coverWidth?: ResponsiveSpacing;
  coverHeight?: ResponsiveSpacing;
  objectFit?: "cover" | "contain";
  borderRadius?: ResponsiveSpacing;
}

export const CfImageCover = ({
  internalTitle,
  image,
  altText = "",
  nested = false,
  coverWidth = "100%",
  coverHeight = "380px",
  objectFit = "cover",
  borderRadius,
  style,
  __typename,
  id,
  lang,
}: CfImageCoverProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{
        xs: !nested ? componentSpacing.xs : "",
        md: !nested ? componentSpacing.md : "",
      }}
      style={{ height: coverHeight }}
    >
      <Container nested={nested} style={{ height: coverHeight }}>
        {!image || !image.url ? (
          <ImageSkeleton
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        ) : (
          <ImageCover
            url={image.url}
            alt={altText}
            width={image.width}
            height={image.height}
            coverWidth={coverWidth}
            coverHeight={coverHeight}
            objectFit={objectFit}
            borderRadius={borderRadius}
            style={style}
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        )}
      </Container>
    </Box>
  );
};

interface CfImageFillProps extends CfImageProps {
  containerMaxWidth?: ResponsiveSpacing;
  containerHeight?: ResponsiveSpacing;
  containerMinHeight?: ResponsiveSpacing;
  containerMaxHeight?: ResponsiveSpacing;
  borderRadius?: ResponsiveSpacing;
}

export const CfImageFill = ({
  internalTitle,
  image,
  altText = "",
  containerMaxWidth = "100%",
  containerHeight = "100%",
  containerMinHeight,
  containerMaxHeight,
  borderRadius,
  style,
  __typename,
  id,
  lang,
}: CfImageFillProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      borderRadius={borderRadius}
      style={{
        position: "absolute",
        width: "100%",
        overflow: "hidden",
        maxWidth: containerMaxWidth,
        height: containerHeight,
        minHeight: containerMinHeight,
        maxHeight: containerMaxHeight,
      }}
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "image",
        locale: lang,
      })}
    >
      {!image || !image.url ? (
        <ImageSkeleton />
      ) : (
        <ImageFill
          url={image.url}
          alt={altText}
          width={image.width}
          height={image.height}
          containerMaxWidth={containerMaxWidth}
          containerHeight={containerHeight}
          containerMinHeight={containerMinHeight}
          containerMaxHeight={containerMaxHeight}
          style={style}
        />
      )}
    </Box>
  );
};
