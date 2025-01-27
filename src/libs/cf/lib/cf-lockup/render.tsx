import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  CfMediaAlignment,
  CfMediaSize,
  CfRichText,
  CfSystemId,
  Nested,
  WithMock,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Col, Container, H2, Row } from "@maverick/ui";

import { CfButton, CfButtonProps } from "../cf-button/render";
import { CfImageServer } from "../cf-image";
import { CfRichTextRender } from "../cf-rich-text-render";
import { CfVideoEmbedServer } from "../cf-video-embed";

export interface CfLockupProps extends CfBaseComponent, Nested, WithMock {
  headline?: string;
  bodyCopy?: CfRichText;
  buttonsCollection?: {
    items: CfButtonProps[];
  };
  media: CfSystemId & { __typename: string };
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
      <Container>
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
                {media.__typename === "Image" && (
                  <CfImageServer
                    id={media.sys.id}
                    preview={preview}
                    lang={lang}
                    nested
                  />
                )}
                {media.__typename === "VideoEmbed" && (
                  <CfVideoEmbedServer
                    id={media.sys.id}
                    preview={preview}
                    lang={lang}
                    nested
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
