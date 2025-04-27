import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps, CfRichText } from "@aces/types";
import { generateId, isLast } from "@aces/utils";
import { componentSpacing, palette } from "@aces/theme";
import { Box, Col, Container, FlexBox, H3, Icon, Row, Text } from "@aces/ui";
import { CfImage } from "../cf-image/render";
import { CfRichTextRender } from "../cf-rich-text-render";
import { CfButton, CfButtonProps } from "../cf-button/render";

export interface CfCalloutProps extends CfBaseComponent {
  headline?: string;
  bodyCopy?: CfRichText;
  tags?: string[];
  buttonsCollection?: {
    items: CfButtonProps[];
  };
  media?: CfImageProps;
}

export const CfCallout = ({
  internalTitle,
  headline,
  bodyCopy,
  tags,
  buttonsCollection,
  media,
  __typename,
  id,
  lang,
  preview,
}: CfCalloutProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.lg, md: componentSpacing.xl }}
    >
      <Container>
        <Box
          paddingY={{ xs: 16, md: 20 }}
          paddingX={{ xs: 8, md: 20 }}
          style={{
            background: palette.tertiary.grayblue,
          }}
        >
          <Row alignItems={"center"} rowSpacing={4}>
            <Col size={{ xs: 12, md: 7 }}>
              <FlexBox
                justifyContent={"center"}
                flexDirection={"column"}
                gap={5}
              >
                {headline && (
                  <H3
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
                {tags && (
                  <FlexBox
                    flexWrap={"wrap"}
                    {...ContentfulLivePreview.getProps({
                      entryId: id,
                      fieldId: "tags",
                      locale: lang,
                    })}
                  >
                    {tags.map((tag, index) => {
                      return (
                        <FlexBox
                          key={generateId(`${tag}-${index}`)}
                          alignItems={"center"}
                        >
                          <Text.SubtitleSmall>{tag}</Text.SubtitleSmall>
                          {!isLast(tags, index) && (
                            <Icon
                              icon="Star"
                              color={palette.success.main}
                              size={16}
                              marginX={2}
                            />
                          )}
                        </FlexBox>
                      );
                    })}
                  </FlexBox>
                )}
                {buttonsCollection && buttonsCollection?.items.length ? (
                  <FlexBox gap={4} flexWrap={"wrap"} marginTop={5}>
                    {buttonsCollection.items.map((button) => (
                      <CfButton
                        key={generateId(button.internalTitle)}
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
                ) : (
                  <></>
                )}
              </FlexBox>
            </Col>
            {media && (
              <Col size={{ xs: 8, md: 2.5 }} offset={{ xs: 0, md: 2.5 }}>
                <CfImage
                  internalTitle={media.internalTitle}
                  image={media.image}
                  nested={true}
                  __typename={media.__typename}
                  id={id}
                  lang={lang}
                  preview={preview}
                />
              </Col>
            )}
          </Row>
        </Box>
      </Container>
    </Box>
  );
};
