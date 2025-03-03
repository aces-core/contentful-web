"use client";

import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfRichText } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { breakpoints, componentSpacing } from "@maverick/theme";
import {
  Box,
  Col,
  Container,
  Row,
  Slider,
  SliderBtn,
  H2,
  FlexBox,
} from "@maverick/ui";

import { CfCard, CfCardProps } from "../cf-card/render";
import { CfRichTextRender } from "../cf-rich-text-render";

export interface CfCardSliderProps extends CfBaseComponent {
  headline?: string;
  bodyCopy?: CfRichText;
  cards: CfCardProps[];
}

export const CfCardSlider = ({
  internalTitle,
  headline,
  bodyCopy,
  cards,
  preview,
  id,
  lang,
  __typename,
}: CfCardSliderProps) => {
  const sliderId = `${generateId(internalTitle)}-cardSlider`;

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.md, md: componentSpacing.xl }}
    >
      <Container>
        <Row spacing={{ xs: "2.5rem", md: "3rem" }}>
          <Col size={{ xs: 12, md: 4 }}>
            <Box>
              {headline && (
                <H2
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
                <Box
                  style={{
                    maxWidth: breakpoints.values.sm,
                    marginBottom: "4rem",
                  }}
                >
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
                </Box>
              )}
            </Box>
            <FlexBox gap={1}>
              <SliderBtn id={sliderId} direction="prev" />
              <SliderBtn id={sliderId} direction="next" />
            </FlexBox>
          </Col>
          <Col size={{ xs: 12, md: 8 }}>
            <Box
              {...ContentfulLivePreview.getProps({
                entryId: id,
                fieldId: "cards",
                locale: lang,
              })}
            >
              <Slider
                id={sliderId}
                slidesPerView={{ xs: 1.2, sm: 1.5, md: 2, lg: 2, xl: 2 }}
                loop
                offsetSlideBoxShadow
              >
                {cards.map((card, index) => (
                  <CfCard
                    key={index}
                    internalTitle={`${generateId(internalTitle)}-${index}`}
                    cardType={card.cardType}
                    headline={card.headline}
                    bodyCopy={card.bodyCopy}
                    image={card.image}
                    imageSize={card.imageSize}
                    fullHeight={true}
                    __typename={card.__typename}
                    id={id}
                    lang={lang}
                    preview={preview}
                  />
                ))}
              </Slider>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
