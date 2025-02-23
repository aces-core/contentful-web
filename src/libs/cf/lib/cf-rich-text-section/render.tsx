import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfAlignment,
  CfBaseComponent,
  CfBorderSelector,
  CfContainerWidth,
  CfRichText,
  Nested,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing, palette } from "@maverick/theme";
import { Box, Container } from "@maverick/ui";
import { CfRichTextRender } from "@maverick/cf";

export interface CfRichTextSectionProps extends CfBaseComponent, Nested {
  alignment: CfAlignment;
  containerWidth: CfContainerWidth;
  grayBackground: boolean;
  bodyCopy: CfRichText;
  border: CfBorderSelector;
  preview: boolean;
}

export const CfRichTextSection = ({
  internalTitle,
  alignment,
  containerWidth,
  grayBackground,
  bodyCopy,
  border,
  __typename,
  nested,
  id,
  lang,
  preview,
}: CfRichTextSectionProps) => {
  const isNarrow = containerWidth === "Narrow";
  const hasTopBorder = border === "Top" || border === "Top & Bottom";
  const hasBottomBorder = border === "Bottom" || border === "Top & Bottom";

  const borderStyles = `1px solid ${palette.grey[300]}`;

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      bgcolor={grayBackground ? "grey.200" : undefined}
      paddingY={{
        xs: nested
          ? 0
          : grayBackground
            ? componentSpacing.md
            : componentSpacing.xs,
        md: nested
          ? 0
          : grayBackground
            ? componentSpacing.lg
            : componentSpacing.md,
      }}
      style={{
        borderTop: hasTopBorder ? borderStyles : "none",
        borderBottom: hasBottomBorder ? borderStyles : "none",
      }}
    >
      <Container maxWidth={isNarrow ? "md" : "xl"} nested={nested}>
        <CfRichTextRender
          richTextDocument={bodyCopy.json}
          alignment={alignment}
          lang={lang}
          preview={preview}
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "bodyCopy",
            locale: lang,
          })}
        />
      </Container>
    </Box>
  );
};
