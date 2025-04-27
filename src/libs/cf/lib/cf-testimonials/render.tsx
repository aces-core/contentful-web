import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps, CfRichText } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing } from "@aces/theme";
import {
  Box,
  Container,
  FlexBox,
  H1,
  H2,
  Slider,
  SliderBtn,
  Text,
} from "@aces/ui";
import { CfRichTextRender } from "../cf-rich-text-render";
import { CfImage } from "../cf-image/render";

interface TestimonialProps {
  name: string;
  role: string;
  description: CfRichText;
  profileImage: CfImageProps;
  lang: string;
  preview: boolean;
}

export const Testimonial = ({
  name,
  role,
  description,
  profileImage,
  lang,
  preview,
}: TestimonialProps) => {
  return (
    <FlexBox flexDirection={"column"}>
      <CfRichTextRender
        lang={lang}
        preview={preview}
        richTextDocument={description.json}
      />
      <FlexBox alignItems={"center"} paddingTop={5} gap={2}>
        <CfImage
          __typename=""
          id=""
          image={profileImage.image}
          internalTitle=""
          lang={lang}
          preview={preview}
          nested
          style={{ borderRadius: "50%" }}
        />
        <FlexBox flexDirection={"column"}>
          <Text fontWeight={"700"}>{name}</Text>
          <Text>{role}</Text>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export interface CfTestimonialsProps extends CfBaseComponent {
  headline?: string;
  testimonials: TestimonialProps[];
}

export const CfTestimonials = ({
  internalTitle,
  headline,
  testimonials,
  __typename,
  id,
  lang,
  preview,
}: CfTestimonialsProps) => {
  const sliderId = `${generateId(internalTitle)}-slider`;
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
    >
      <Container>
        <FlexBox
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingBottom={5}
        >
          {headline && <H2>{headline}</H2>}
          <FlexBox>
            <SliderBtn id={sliderId} direction="prev" />
            <SliderBtn id={sliderId} direction="next" />
          </FlexBox>
        </FlexBox>
        <Slider
          id={sliderId}
          slidesPerView={{ xs: 1, sm: 1, md: 3, lg: 3, xl: 3 }}
          loop
          offsetSlideBoxShadow
        >
          {testimonials.map((testimonial, index) => {
            return (
              <Testimonial
                description={testimonial.description}
                name={testimonial.name}
                profileImage={testimonial.profileImage}
                role={testimonial.role}
                key={`testimonial-${index}`}
                lang={lang}
                preview={preview}
              />
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
};
