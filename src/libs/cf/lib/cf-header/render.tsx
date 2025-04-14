import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfAlignment,
  CfBaseComponent,
  CfContainerWidth,
  CfHeaderType,
  Nested,
} from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing } from "@aces/theme";
import { Box, Container, H1, H2, H3, H4, H5, H6 } from "@aces/ui";

export interface CfHeaderProps extends CfBaseComponent, Nested {
  headline: string;
  headerType?: CfHeaderType;
  alignment?: CfAlignment;
  containerWidth?: CfContainerWidth;
  marginBottom?: {
    xs?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
  };
}

export const CfHeader = ({
  internalTitle,
  headline,
  headerType = "H2",
  alignment = "Left",
  containerWidth = "Default",
  marginBottom = { xs: componentSpacing.xs },
  nested,
  __typename,
  id,
  lang,
}: CfHeaderProps) => {
  const RenderHeader = ({
    headerType,
    headline,
  }: {
    headerType: CfHeaderType;
    headline: string;
  }) => {
    switch (headerType) {
      case "H1":
        return <H1>{headline}</H1>;
      case "H2":
        return <H2>{headline}</H2>;
      case "H3":
        return <H3>{headline}</H3>;
      case "H4":
        return <H4>{headline}</H4>;
      case "H5":
        return <H5>{headline}</H5>;
      case "H6":
        return <H6>{headline}</H6>;
      default:
        return <H2>{headline}</H2>;
    }
  };

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginBottom={marginBottom}
    >
      <Container
        disableGutters={nested}
        noPadding={nested}
        maxWidth={!nested && containerWidth === "Narrow" ? "md" : "xl"}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems:
              alignment === "Center"
                ? "center"
                : alignment === "Right"
                  ? "flex-end"
                  : "flex-start",
            textAlign: alignment.toLowerCase(),
          }}
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "headline",
            locale: lang,
          })}
        >
          {RenderHeader({ headerType, headline })}
        </Box>
      </Container>
    </Box>
  );
};
