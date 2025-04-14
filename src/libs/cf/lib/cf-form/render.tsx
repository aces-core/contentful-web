import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing } from "@aces/theme";
import { Box, Card, Container, FlexBox, H2, Text } from "@aces/ui";
import {
  HubSpotForm,
  HubSpotFormProps,
  PardotForm,
  PardotFormProps,
} from "@aces/features";

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
              <Box
                {...ContentfulLivePreview.getProps({
                  entryId: id,
                  fieldId: "form",
                  locale: lang,
                })}
              >
                {"hsPortalId" in form ? (
                  <HubSpotForm
                    hsPortalId={form.hsPortalId}
                    hsFormId={form.hsFormId}
                  />
                ) : "pardotFormUrl" in form ? (
                  <PardotForm
                    pardotFormUrl={form.pardotFormUrl}
                    height={{ xs: "1280px", md: "1600px" }}
                  />
                ) : null}
              </Box>
            </Box>
          </FlexBox>
        </Card>
      </Container>
    </Box>
  );
};
