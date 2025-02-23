import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  CfImageProps,
  CfMediaAlignment,
  CfMediaSize,
  CfRichText,
  Nested,
  WithMock,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Col, Container, H2, Row } from "@maverick/ui";

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
  bodyCopy?: CfRichText;
  buttonsCollection?: {
    items: CfButtonProps[];
  };
  media: CfImageProps | CfVideoEmbedProps;
  mediaSize: CfMediaSize;
  mediaAlignment: CfMediaAlignment;
}

export const CfLockup = ({
  internalTitle,
  headline,
  bodyCopy,
  buttonsCollection,
  media,
  mediaSize,
  mediaAlignment,
  __typename,
  id,
  lang,
  preview,
  nested,
  mock,
  mockData,
}: CfLockupProps) => {
  const colSize = {
    content: mediaSize === "Wide" ? 4 : mediaSize === "Narrow" ? 8 : 6,
    media: mediaSize === "Wide" ? 8 : mediaSize === "Narrow" ? 4 : 6,
  };

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.md, md: componentSpacing.xl }}
    >
      <Container nested={nested}>
        <Row
          rowSpacing={4}
          columnSpacing={12}
          flexDirection={mediaAlignment === "Left" ? "row-reverse" : "row"}
          alignItems="center"
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "mediaAlignment",
            locale: lang,
          })}
        >
          {(headline ||
            bodyCopy ||
            (buttonsCollection && buttonsCollection?.items.length > 0)) && (
            <Col
              size={{ xs: 12, md: colSize.content }}
              paddingRight={{ xs: 0, md: 8 }}
            >
              {headline && (
                <H2
                  marginBottom={8}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "headline",
                    locale: lang,
                  })}
                >
                  {headline}
                </H2>
              )}
              {bodyCopy && (
                <CfRichTextRender
                  richTextDocument={bodyCopy.json}
                  alignment="Left"
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
                <Box
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginTop: bodyCopy ? 8 : 0,
                  }}
                >
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
            </Col>
          )}
          <Col size={{ xs: 12, md: colSize.media }}>
            {!mock ? (
              <>
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
              </>
            ) : (
              <>{mockData}</>
            )}
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
