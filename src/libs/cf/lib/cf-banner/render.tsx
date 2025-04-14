import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  CfColorPicker,
  CfColorPickerPalette,
} from "@aces/types";
import { isLight, generateId } from "@aces/utils";
import { componentSpacing, palette } from "@aces/theme";
import { Box, Container, H2, Text } from "@aces/ui";

import { CfButton, CfButtonProps } from "../cf-button/render";

export interface CfBannerProps extends CfBaseComponent {
  headline?: string;
  subhead?: string;
  button?: CfButtonProps;
  backgroundColor: CfColorPicker;
}

export const CfBanner = ({
  internalTitle,
  headline,
  subhead,
  button,
  backgroundColor,
  __typename,
  id,
  lang,
  preview,
}: CfBannerProps) => {
  const color = isLight(backgroundColor.value)
    ? "primary.contrastText"
    : "text.primary";

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
    >
      <Container>
        <Box
          style={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: "1.5rem",
            background:
              backgroundColor.name === CfColorPickerPalette.Secondary
                ? palette.gradient.secondary
                : palette.gradient.primary,
            padding: { xs: "1.5rem", md: "3rem" },
          }}
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "backgroundColor",
            locale: lang,
          })}
        >
          {(headline || subhead) && (
            <Box style={{ maxWidth: "524px" }}>
              {headline && (
                <H2
                  color={color}
                  marginBottom={2}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "headline",
                    locale: lang,
                  })}
                >
                  {headline}
                </H2>
              )}
              {subhead && (
                <Text
                  color={color}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "subhead",
                    locale: lang,
                  })}
                >
                  {subhead}
                </Text>
              )}
            </Box>
          )}
          {button && (
            <Box style={{ width: { xs: "100%", sm: "auto" } }}>
              <CfButton
                internalTitle={button.internalTitle}
                title={button.title}
                link={button.link}
                buttonStyle={button.buttonStyle}
                __typename={button.__typename}
                id={button?.sys?.id || ""}
                preview={preview}
                lang={lang}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
