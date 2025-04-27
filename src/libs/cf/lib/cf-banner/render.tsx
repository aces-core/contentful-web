import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfAlignment,
  CfBaseComponent,
  CfImageProps,
  CfRichText,
} from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing, palette } from "@aces/theme";
import { Box, Container, H3, Row, Col, FlexBox } from "@aces/ui";

import { CfButton, CfButtonProps } from "../cf-button/render";
import { CfImage } from "../cf-image/render";
import { CfRichTextRender } from "../cf-rich-text-render";

export interface CfBannerProps extends CfBaseComponent {
  headline?: string;
  bodyCopy?: CfRichText;
  button?: CfButtonProps;
  media: CfImageProps;
  mediaAlignment: CfAlignment;
  theme: string;
}

export const CfBanner = ({
  internalTitle,
  headline,
  bodyCopy,
  button,
  media,
  mediaAlignment,
  theme,
  __typename,
  id,
  lang,
  preview,
}: CfBannerProps) => {
  const color = theme === "Primary Gradient" ? "common.white" : "text.primary";
  const align = mediaAlignment === "Center" ? "center" : "left";
  const textAlign = mediaAlignment === "Center" ? "Center" : "Left";

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      paddingY={{ xs: componentSpacing.lg, md: componentSpacing.xl }}
      style={{
        background:
          theme === "Blue Gray"
            ? palette.tertiary.grayblue
            : palette.gradient.primary,
      }}
    >
      <Container>
        <Row
          alignItems={"center"}
          flexDirection={{
            xs: "column-reverse",
            md:
              mediaAlignment === "Right"
                ? "row"
                : mediaAlignment === "Left"
                  ? "row-reverse"
                  : "column-reverse",
          }}
          rowSpacing={8}
        >
          {(headline || bodyCopy || button) && (
            <Col size={{ xs: 12, md: 6 }}>
              <FlexBox
                maxWidth={mediaAlignment === "Center" ? "900px" : "500px"}
                flexDirection={"column"}
                alignItems={mediaAlignment === "Center" ? "center" : "start"}
                marginLeft={mediaAlignment === "Left" ? "auto" : "0px"}
                height={"100%"}
                gap={6}
              >
                {headline && (
                  <H3
                    align={align}
                    color={color}
                    marginBottom={2}
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
                    alignment={textAlign}
                    color={color}
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
                {button && (
                  <CfButton
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
                )}
              </FlexBox>
            </Col>
          )}
          {media && (
            <Col size={{ xs: 12, md: mediaAlignment === "Center" ? 9 : 6 }}>
              <FlexBox flexDirection={"column"}>
                <CfImage
                  internalTitle={media.internalTitle}
                  image={media.image}
                  nested={true}
                  __typename={media.__typename}
                  id={id}
                  lang={lang}
                  preview={preview}
                />
              </FlexBox>
            </Col>
          )}
        </Row>
      </Container>
    </Box>
  );
};
