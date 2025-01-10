import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfAlignment,
  CfBaseComponent,
  CfBorderSelector,
  CfContainerWidth,
  CfRichText,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { Box, Container } from "@maverick/ui";
import { CfRichTextRender } from "@maverick/cf";

export interface CfRichTextSectionProps extends CfBaseComponent {
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
  id,
  lang,
  preview,
}: CfRichTextSectionProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      border={border}
      bgcolor={grayBackground ? "grey.100" : undefined}
    >
      <Container maxWidth={containerWidth === "Narrow" ? "md" : "xl"}>
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
