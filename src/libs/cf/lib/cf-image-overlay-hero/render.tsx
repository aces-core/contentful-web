"use client";

import { alpha } from "@mui/material";
import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps } from "@aces/types";
import { useMediaQuery } from "@aces/hooks";
import { generateId } from "@aces/utils";
import { breakpoints, containerPadding, palette } from "@aces/theme";
import { Box, Container, ImageFill, FlexBox, Text, Image, H2 } from "@aces/ui";

import { CfButton, CfButtonProps } from "../cf-button/render";

export interface CfImageOverlayHeroProps extends CfBaseComponent {
  headline?: string;
  subhead?: string;
  buttonsCollection?: {
    items: CfButtonProps[];
  };
  image: CfImageProps;
  fullOverlay: boolean;
  slim: boolean;
}

export const CfImageOverlayHero = ({
  internalTitle,
  headline,
  subhead,
  buttonsCollection,
  image,
  fullOverlay,
  slim,
  __typename,
  id,
  lang,
  preview,
}: CfImageOverlayHeroProps) => {
  const { isSmallerThanMd } = useMediaQuery();

  return (
    <FlexBox
      id={generateId(internalTitle)}
      data-component={__typename}
      justifyContent="center"
      position="relative"
      minHeight={slim ? "380px" : "470px"}
    >
      <FlexBox
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        width="100%"
        style={{
          backgroundColor: palette.tertiary.grayblue,
        }}
        {...ContentfulLivePreview.getProps({
          entryId: id,
          fieldId: "image",
          locale: lang,
        })}
      >
        {isSmallerThanMd && !fullOverlay ? (
          <Image
            url={image.image.url}
            alt={image.altText}
            width={image.image.width}
            height={image.image.height}
            responsive
          />
        ) : (
          <ImageFill
            url={image.image.url}
            alt={image.altText}
            width={image.image.width}
            height={image.image.height}
            containerMaxWidth={breakpoints.values.xxl}
          />
        )}

        {fullOverlay &&
          (headline ||
            subhead ||
            (buttonsCollection && buttonsCollection?.items.length > 0)) && (
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              style={{
                background: alpha(palette.common.black, 0.4),
              }}
            />
          )}
        {(headline ||
          subhead ||
          (buttonsCollection && buttonsCollection?.items.length > 0)) && (
          <Container nested={isSmallerThanMd && !fullOverlay}>
            <FlexBox justifyContent={fullOverlay ? "center" : "flex-start"}>
              <FlexBox
                alignItems={fullOverlay ? "center" : "start"}
                flexDirection="column"
                gap={6}
                justifyContent="center"
                marginY={{
                  xs: fullOverlay ? 12 : 0,
                  md: fullOverlay ? 4 : 12,
                }}
                maxWidth={{
                  xs: fullOverlay ? "650px" : "none",
                  md: fullOverlay ? "800px" : "650px",
                }}
                paddingX={{
                  xs: fullOverlay ? 10 : containerPadding.xs,
                  md: fullOverlay ? 5 : 10,
                }}
                paddingY={fullOverlay ? 5 : 10}
                position="relative"
                width={{ xs: "100%", md: fullOverlay ? "100%" : "65%" }}
                style={{
                  background: fullOverlay ? "none" : palette.primary.main,
                  zIndex: 2,
                }}
              >
                {headline && (
                  <H2
                    align={fullOverlay ? "center" : "left"}
                    color={palette.common.white}
                    component="h1"
                    {...ContentfulLivePreview.getProps({
                      entryId: id,
                      fieldId: "headline",
                      locale: lang,
                    })}
                  >
                    {headline}
                  </H2>
                )}
                {subhead && (
                  <Text.Subtitle
                    align={fullOverlay ? "center" : "left"}
                    color={palette.common.white}
                    {...ContentfulLivePreview.getProps({
                      entryId: id,
                      fieldId: "subhead",
                      locale: lang,
                    })}
                  >
                    {subhead}
                  </Text.Subtitle>
                )}
                {buttonsCollection && (
                  <FlexBox
                    alignItems={fullOverlay ? "center" : "flex-start"}
                    flexDirection={{ xs: "column", sm: "row" }}
                    flexWrap="wrap"
                    gap={5}
                  >
                    {buttonsCollection.items.map((button, index) => (
                      <CfButton
                        key={index}
                        internalTitle={button.internalTitle}
                        title={button.title}
                        link={button.link}
                        buttonStyle={button.buttonStyle}
                        rightIcon={button.rightIcon}
                        __typename={button.__typename}
                        id={button?.sys?.id || ""}
                        preview={preview}
                        lang={lang}
                      />
                    ))}
                  </FlexBox>
                )}
              </FlexBox>
            </FlexBox>
          </Container>
        )}
      </FlexBox>
    </FlexBox>
  );
};
