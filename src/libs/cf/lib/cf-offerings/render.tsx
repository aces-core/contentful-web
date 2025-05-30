import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps, CfRichText } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing, palette, shape } from "@aces/theme";
import { Box, Container, FlexBox, H4, Row, Col } from "@aces/ui";
import { CfButton, CfButtonProps } from "../cf-button/render";
import { CfImageCover } from "../cf-image/render";
import { CfRichTextRender } from "../cf-rich-text-render";
import {
  CfOfferingItem,
  CfOfferingItemProps,
} from "../cf-offering-item/render";

export interface CfOfferingsProps extends CfBaseComponent {
  media: CfImageProps;
  headline: string;
  bodyCopy?: CfRichText;
  button?: CfButtonProps;
  offeringItems?: CfOfferingItemProps[];
  total: number;
}

export const CfOfferings = ({
  internalTitle,
  media,
  headline,
  bodyCopy,
  button,
  offeringItems,
  total,
  __typename,
  id,
  lang,
  preview,
}: CfOfferingsProps) => {
  const colSize = { xs: 12, md: 6 };
  const columnSpacing = 32;
  const gapOfferingItems = 12;
  const rowSpacing = gapOfferingItems;

  const leftColumnOfferingItems = offeringItems?.slice(0, -total / 2);
  const rightColumnOfferingItems = offeringItems?.slice(-total / 2);

  const dividerStyle =
    total > 1
      ? {
          borderRight: { xs: "none", md: `1px solid ${palette.grey[300]}` },
          paddingRight: { xs: 0, md: columnSpacing / 2 },
          marginRight: { xs: 0, md: -columnSpacing / 2 },
        }
      : {};

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
    >
      <Container>
        <FlexBox flexDirection={"column"} marginY={{ xs: 20, md: 30 }} gap={10}>
          {media && (
            <Box>
              <CfImageCover
                borderRadius={shape.borderRadius}
                nested={true}
                coverHeight={"600px"}
                coverWidth={"100%"}
                internalTitle={media.internalTitle}
                image={media.image}
                altText={media.altText}
                __typename={media.__typename}
                id={media.id}
                lang={lang}
                preview={preview}
              />
            </Box>
          )}
          <Row>
            <Col size={colSize}>
              <FlexBox flexDirection={"column"} gap={4}>
                {headline && (
                  <H4
                    {...ContentfulLivePreview.getProps({
                      entryId: id,
                      fieldId: "headline",
                      locale: lang,
                    })}
                  >
                    {headline}
                  </H4>
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
              </FlexBox>
            </Col>
            {button && (
              <Col size={colSize}>
                <FlexBox
                  justifyContent={{ xs: "center", md: "end" }}
                  marginY={{ xs: 10, md: 0 }}
                >
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
                </FlexBox>
              </Col>
            )}
          </Row>
          {offeringItems && offeringItems.length ? (
            <Row columnSpacing={columnSpacing} rowSpacing={rowSpacing}>
              <Col size={colSize} style={dividerStyle}>
                <FlexBox flexDirection={"column"} gap={gapOfferingItems}>
                  {leftColumnOfferingItems?.map((item, index) => {
                    return (
                      <CfOfferingItem
                        key={index}
                        internalTitle={item.internalTitle}
                        icon={item.icon}
                        headline={item.headline}
                        bodyCopy={item.bodyCopy}
                        __typename={item.__typename}
                        id={item.id}
                        lang={lang}
                        preview={preview}
                      />
                    );
                  })}
                </FlexBox>
              </Col>
              <Col size={colSize}>
                <FlexBox flexDirection={"column"} gap={gapOfferingItems}>
                  {rightColumnOfferingItems?.map((item, index) => {
                    return (
                      <CfOfferingItem
                        key={index}
                        internalTitle={item.internalTitle}
                        icon={item.icon}
                        headline={item.headline}
                        bodyCopy={item.bodyCopy}
                        __typename={item.__typename}
                        id={item.id}
                        lang={lang}
                        preview={preview}
                      />
                    );
                  })}
                </FlexBox>
              </Col>
            </Row>
          ) : (
            <></>
          )}
        </FlexBox>
      </Container>
    </Box>
  );
};
