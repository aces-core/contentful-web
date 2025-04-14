import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps } from "@aces/types";
import { generateId } from "@aces/utils";

import { palette, typography } from "@aces/theme";
import { Box, H1, H6, Container, ImageFill, FlexBox } from "@aces/ui";

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
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      style={{
        position: "relative",
        height: "100%",
        minHeight: fullOverlay && !slim ? "690px" : "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.25rem",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
        }}
        {...ContentfulLivePreview.getProps({
          entryId: id,
          fieldId: "image",
          locale: lang,
        })}
      >
        <ImageFill
          url={image.image.url}
          alt={image.altText}
          width={image.image.width}
          height={image.image.height}
        />
        {fullOverlay &&
          (headline ||
            subhead ||
            (buttonsCollection && buttonsCollection?.items.length > 0)) && (
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.4)",
              }}
            />
          )}
        {(headline ||
          subhead ||
          (buttonsCollection && buttonsCollection?.items.length > 0)) && (
          <Container>
            <FlexBox justifyContent={fullOverlay ? "center" : "flex-start"}>
              <Box
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: fullOverlay ? "center" : "start",
                  justifyContent: "center",
                  gap: fullOverlay
                    ? { xs: "1.125rem", lg: "1.5rem" }
                    : "0.75rem",
                  background: fullOverlay ? "none" : palette.gradient.primary,
                  padding: fullOverlay ? "1.5rem" : "3rem",
                  width: { xs: "100%", md: fullOverlay ? "100%" : "50%" },
                  maxWidth: "800px",
                }}
                marginTop={fullOverlay ? 0 : 8}
                marginBottom={fullOverlay ? 0 : 8}
              >
                <H1
                  align={fullOverlay ? "center" : "left"}
                  style={{
                    color: palette.common.white,
                    fontSize: !fullOverlay
                      ? { xs: "2.125rem", md: "2.875rem" }
                      : typography.h1.fontSize,
                  }}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "headline",
                    locale: lang,
                  })}
                >
                  {headline}
                </H1>
                {subhead && (
                  <H6
                    align={fullOverlay ? "center" : "left"}
                    style={{
                      color: palette.common.white,
                    }}
                    {...ContentfulLivePreview.getProps({
                      entryId: id,
                      fieldId: "subhead",
                      locale: lang,
                    })}
                  >
                    {subhead}
                  </H6>
                )}
                {buttonsCollection && (
                  <Box style={{ display: "flex", gap: "0.75rem" }}>
                    {buttonsCollection.items.map((button, index) => (
                      <CfButton
                        key={index}
                        internalTitle={button.internalTitle}
                        title={button.title}
                        link={button.link}
                        buttonStyle={button.buttonStyle}
                        __typename={button.__typename}
                        id={button?.sys?.id || ""}
                        preview={preview}
                        lang={lang}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </FlexBox>
          </Container>
        )}
      </Box>
    </Box>
  );
};
