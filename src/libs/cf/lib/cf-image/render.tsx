import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfImage as CfImageType } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Container, Image } from "@maverick/ui";

import { ImageSkeleton } from "./skeleton";

export const CfImage = ({
  internalTitle,
  image,
  altText = "",
  nested = false,
  responsive = true,
  maxWidth,
  maxHeight,
  __typename,
  id,
  lang,
}: CfImageType) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{
        xs: !nested ? componentSpacing.xs : "",
        md: !nested ? componentSpacing.md : "",
      }}
    >
      <Container
        disableGutters={nested}
        noPadding={nested}
        maxWidth={nested ? false : "xl"}
      >
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
            responsive={responsive}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
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
