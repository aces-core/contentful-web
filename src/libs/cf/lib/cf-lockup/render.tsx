import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  CfImageProps,
  CfMediaAlignment,
  CfMediaSize,
  CfRichText,
  Nested,
  WithMock,
} from "@aces/types";
import { generateId } from "@aces/utils";
import {
  componentSpacing,
  containerPadding,
  shape,
  spacing,
} from "@aces/theme";
import { Box, Col, Container, FlexBox, H3, Row, Text } from "@aces/ui";

import { CfButton, CfButtonProps } from "../cf-button/render";
import { CfImage } from "../cf-image/render";
import { CfRichTextRender } from "../cf-rich-text-render";
import { CfVideoEmbed, CfVideoEmbedProps } from "../cf-video-embed/render";

const isCfImage = (media: any): media is CfImageProps => {
  return "image" in media;
};

const isCfVideoEmbed = (media: any): media is CfVideoEmbedProps => {
  return "embedCode" in media;
};
export interface CfLockupProps extends CfBaseComponent, Nested, WithMock {
  headline?: string;
  subhead?: string;
  bodyCopy?: CfRichText;
  buttonsCollection?: {
    items: CfButtonProps[];
  };
  media: CfImageProps | CfVideoEmbedProps;
  mediaSize: CfMediaSize;
  mediaAlignment: CfMediaAlignment;
  mediaBleed?: boolean;
}

export const CfLockup = ({
  internalTitle,
  headline,
  subhead,
  bodyCopy,
  buttonsCollection,
  media,
  mediaSize,
  mediaAlignment,
  mediaBleed,
  __typename,
  id,
  lang,
  preview,
  nested,
  mock,
  mockData,
}: CfLockupProps) => {
  const colSize = {
    content: mediaSize === "Wide" ? 5 : mediaSize === "Narrow" ? 8 : 6,
    media: mediaSize === "Wide" ? 7 : mediaSize === "Narrow" ? 4 : 6,
  };

  if (nested) mediaBleed = false;

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.lg, md: componentSpacing.xxl }}
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "internalTitle",
        locale: lang,
      })}
    >
      <Container nested={nested}>
        <Row
          alignItems="center"
          columnSpacing={12}
          flexDirection={{
            xs: mediaBleed ? "column" : "column-reverse",
            lg: mediaAlignment === "Left" ? "row-reverse" : "row",
          }}
          rowSpacing={4}
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "mediaAlignment",
            locale: lang,
          })}
        >
          {(headline ||
            subhead ||
            bodyCopy ||
            (buttonsCollection && buttonsCollection?.items.length > 0)) && (
            <Col
              paddingRight={mediaAlignment === "Right" ? { xs: 0, lg: 20 } : {}}
              paddingLeft={mediaAlignment === "Left" ? { xs: 0, lg: 20 } : {}}
              size={{ xs: 12, lg: colSize.content }}
            >
              {subhead && (
                <Text.SubtitleSmall marginBottom={4}>
                  {subhead}
                </Text.SubtitleSmall>
              )}
              {headline && (
                <H3
                  marginBottom={8}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "headline",
                    locale: lang,
                  })}
                >
                  {headline}
                </H3>
              )}
              {bodyCopy && (
                <CfRichTextRender
                  alignment="Left"
                  richTextDocument={bodyCopy.json}
                  lang={lang}
                  preview={preview}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "bodyCopy",
                    locale: lang,
                  })}
                />
              )}
              {buttonsCollection && (
                <FlexBox
                  flexDirection={{ xs: "column", lg: "row" }}
                  flexWrap="wrap"
                  gap={5}
                  marginTop={bodyCopy ? 8 : 0}
                >
                  {buttonsCollection.items.map((button, index) => {
                    const isCfButton = (
                      button: any,
                    ): button is CfButtonProps => {
                      return "title" in button;
                    };

                    if (isCfButton(button)) {
                      return (
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
                      );
                    }
                  })}
                </FlexBox>
              )}
            </Col>
          )}
          <Col size={{ xs: 12, lg: colSize.media }}>
            {!mock ? (
              <Box
                style={
                  mediaBleed
                    ? {
                        width: {
                          xs: `calc(100% + ${containerPadding.xs * spacing}px)`,
                          sm: `calc(100% + ${containerPadding.sm * spacing}px)`,
                          md: `calc(100% + ${containerPadding.md * spacing}px)`,
                          lg: `calc(100% + ${containerPadding.lg * spacing}px)`,
                          xl: `calc(100% + ${containerPadding.xl * spacing}px)`,
                        },
                        marginLeft:
                          mediaAlignment === "Left"
                            ? {
                                xs: `-${containerPadding.xs * spacing}px`,
                                sm: `-${containerPadding.sm * spacing}px`,
                                md: `-${containerPadding.md * spacing}px`,
                                lg: `-${containerPadding.lg * spacing}px`,
                                xl: `-${containerPadding.xl * spacing}px`,
                              }
                            : {},
                      }
                    : {
                        borderRadius: shape.borderRadius,
                        overflow: "hidden",
                      }
                }
                width="100%"
              >
                {media.__typename === "Image" && isCfImage(media) && (
                  <CfImage
                    internalTitle={media.internalTitle}
                    image={media.image}
                    __typename={media.__typename}
                    nested={true}
                    id={media?.sys?.id || ""}
                    lang={lang}
                    preview={preview}
                  />
                )}
                {media.__typename === "VideoEmbed" && isCfVideoEmbed(media) && (
                  <CfVideoEmbed
                    internalTitle={media.internalTitle}
                    embedCode={media.embedCode}
                    nested={nested}
                    __typename={media.__typename}
                    id={media?.sys?.id || ""}
                    lang={lang}
                    preview={preview}
                  />
                )}
              </Box>
            ) : (
              <>{mockData}</>
            )}
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
