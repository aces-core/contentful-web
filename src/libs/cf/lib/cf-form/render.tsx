import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Card, Container, FlexBox, H2, Text } from "@maverick/ui";
import {
  HubSpotForm,
  HubSpotFormProps,
  PardotForm,
  PardotFormProps,
} from "@maverick/features";

import { CfImageCover } from "../cf-image/render";

export interface CfFormProps extends CfBaseComponent {
  form: HubSpotFormProps | PardotFormProps;
  headline?: string;
  subhead?: string;
  media?: CfImageProps;
}

export const CfForm = ({
  internalTitle,
  form,
  headline,
  subhead,
  media,
  __typename,
  id,
  lang,
  preview,
}: CfFormProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.md, md: componentSpacing.xl }}
    >
      {headline && (
        <Container maxWidth="md">
          <H2
            align="center"
            marginBottom={12}
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "headline",
              locale: lang,
            })}
          >
            {headline}
          </H2>
        </Container>
      )}
      <Container>
        <Card borderRadius="8px">
          <FlexBox width={"100%"} flexDirection={{ xs: "column", md: "row" }}>
            {media && (
              <Box style={{ flex: 1 }}>
                <CfImageCover
                  internalTitle={media.internalTitle}
                  image={media.image}
                  altText={media.altText}
                  coverHeight={{ xs: "180px", md: "100%" }}
                  nested
                  __typename={media.__typename}
                  id={media?.sys?.id || ""}
                  lang={lang}
                  preview={preview}
                />
              </Box>
            )}
            <Box
              paddingY={{ xs: 12, md: 16 }}
              paddingX={{ xs: 8, md: 12 }}
              style={{ flex: 1 }}
            >
              {subhead && (
                <Text
                  marginBottom={8}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "subhead",
                    locale: lang,
                  })}
                >
                  {subhead}
                </Text>
              )}
              {"hsPortalId" in form ? (
                <HubSpotForm
                  hsPortalId={form.hsPortalId}
                  hsFormId={form.hsFormId}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "form",
                    locale: lang,
                  })}
                />
              ) : "pardotFormUrl" in form ? (
                <PardotForm
                  pardotFormUrl={form.pardotFormUrl}
                  height={{ xs: "1280px", md: "1600px" }}
                />
              ) : null}
            </Box>
          </FlexBox>
        </Card>
      </Container>
    </Box>
  );
};
