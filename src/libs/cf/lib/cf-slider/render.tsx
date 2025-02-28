"use client";

import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Container, Slider, SliderBtn, FlexBox } from "@maverick/ui";

import { CfImage } from "../cf-image/render";
import {
  CfRichTextSection,
  CfRichTextSectionProps,
} from "../cf-rich-text-section/render";
import { CfLockupProps } from "../cf-lockup/render";
import { CfLockup } from "../cf-lockup/render";
import { Suspense } from "react";
import { SlideSkeleton } from "./skeleton";

const isCfImage = (media: any): media is CfImageProps => {
  return "image" in media;
};

const isCfLockup = (media: any): media is CfLockupProps => {
  return "media" in media;
};

const isCfRichTextSection = (media: any): media is CfRichTextSectionProps => {
  return "bodyCopy" in media;
};

export interface CfSliderProps extends CfBaseComponent {
  slides: (CfLockupProps | CfImageProps | CfRichTextSectionProps)[];
}

export const CfSlider = ({
  internalTitle,
  slides,
  id,
  preview,
  lang,
  __typename,
}: CfSliderProps) => {
  const sliderId = `${generateId(internalTitle)}-slider`;

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.md, md: componentSpacing.xl }}
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "slides",
        locale: lang,
      })}
    >
      <Container>
        <FlexBox justifyContent="flex-end" gap={1}>
          <SliderBtn id={sliderId} direction="prev" />
          <SliderBtn id={sliderId} direction="next" />
        </FlexBox>
        <Slider
          id={sliderId}
          slidesPerView={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
          loop
          offsetSlideBoxShadow
        >
          {slides.map((slide) => {
            const typename = slide.__typename;

            switch (typename) {
              case "Image":
                if (isCfImage(slide)) {
                  return (
                    <Suspense
                      fallback={<SlideSkeleton />}
                      key={`${generateId(slide.internalTitle)}-slide`}
                    >
                      <CfImage
                        internalTitle={slide.internalTitle}
                        image={slide.image}
                        __typename={slide.__typename}
                        nested={true}
                        responsive={true}
                        id={slide.sys?.id || ""}
                        lang={lang}
                        preview={preview}
                      />
                    </Suspense>
                  );
                }
              case "Lockup":
                if (isCfLockup(slide)) {
                  return (
                    <Suspense
                      fallback={<SlideSkeleton />}
                      key={`${generateId(slide.internalTitle)}-slide`}
                    >
                      <CfLockup
                        internalTitle={slide.internalTitle}
                        headline={slide.headline}
                        bodyCopy={slide.bodyCopy}
                        buttonsCollection={slide.buttonsCollection}
                        media={slide.media}
                        mediaSize={slide.mediaSize}
                        mediaAlignment={slide.mediaAlignment}
                        __typename={slide.__typename}
                        nested={true}
                        id={slide.sys?.id || ""}
                        lang={lang}
                        preview={preview}
                      />
                    </Suspense>
                  );
                }
              case "RichTextSection":
                if (isCfRichTextSection(slide)) {
                  return (
                    <Suspense
                      fallback={<SlideSkeleton />}
                      key={`${generateId(slide.internalTitle)}-slide`}
                    >
                      <CfRichTextSection
                        internalTitle={slide.internalTitle}
                        alignment={slide.alignment}
                        containerWidth={slide.containerWidth}
                        grayBackground={slide.grayBackground}
                        bodyCopy={slide.bodyCopy}
                        border={slide.border}
                        __typename={slide.__typename}
                        nested={true}
                        id={slide.sys?.id || ""}
                        lang={lang}
                        preview={preview}
                      />
                    </Suspense>
                  );
                }
              default:
                return null;
            }
          })}
        </Slider>
      </Container>
    </Box>
  );
};
