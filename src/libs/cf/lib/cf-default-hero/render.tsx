import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing } from "@aces/theme";
import { Container, FlexBox, H1, Text } from "@aces/ui";

import { CfImage } from "../cf-image/render";

export interface CfDefaultHeroProps extends CfBaseComponent {
  headline?: string;
  subhead?: string;
  media?: CfImageProps;
}

export const CfDefaultHero = ({
  internalTitle,
  headline,
  subhead,
  media,
  __typename,
  id,
  lang,
  preview,
}: CfDefaultHeroProps) => {
  return (
    <FlexBox
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xl, md: componentSpacing.xxl }}
      flexDirection={"column"}
      gap={{ xs: 10, md: 18 }}
    >
      <Container>
        {(headline || subhead) && (
          <FlexBox width={"100%"} justifyContent={"center"}>
            <FlexBox
              gap={5}
              maxWidth={"800px"}
              flexDirection={"column"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              {headline && (
                <H1
                  align={"center"}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "headline",
                    locale: lang,
                  })}
                >
                  {headline}
                </H1>
              )}
              {subhead && (
                <Text
                  align={"center"}
                  lineHeight={"24px"}
                  marginTop={4}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "subhead",
                    locale: lang,
                  })}
                >
                  {subhead}
                </Text>
              )}
            </FlexBox>
          </FlexBox>
        )}
      </Container>
      {media && (
        <Container maxWidth={"xxl"} nested>
          <CfImage
            __typename={media.__typename}
            id={media.id}
            image={media.image}
            internalTitle={media.internalTitle}
            lang={lang}
            preview={preview}
            nested
          />
        </Container>
      )}
    </FlexBox>
  );
};
