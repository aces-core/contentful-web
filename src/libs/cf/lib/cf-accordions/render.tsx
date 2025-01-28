import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfRichText } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing, palette } from "@maverick/theme";
import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  Box,
  Container,
  H2,
} from "@maverick/ui";

import { CfRichTextRender } from "../cf-rich-text-render";

export interface CfAccordionsProps extends CfBaseComponent {
  headline?: string;
  bodyCopy?: CfRichText;
  accordionsCollection: {
    items: {
      internalTitle: string;
      headline: string;
      bodyCopy: any;
    }[];
  };
}

export const CfAccordions = ({
  internalTitle,
  headline,
  bodyCopy,
  accordionsCollection,
  __typename,
  id,
  preview,
  lang,
}: CfAccordionsProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.md, md: componentSpacing.lg }}
    >
      <Container>
        {headline && (
          <H2 marginBottom={2} style={{ maxWidth: 1000 }}>
            {headline}
          </H2>
        )}
        {bodyCopy && (
          <Box marginBottom={2} style={{ maxWidth: 1000 }}>
            <CfRichTextRender
              richTextDocument={bodyCopy.json}
              lang={lang}
              preview={preview}
            />
          </Box>
        )}
        <Accordion>
          {accordionsCollection.items.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemTrigger
                expandIconPosition="end"
                disableGutters={true}
                style={{
                  borderTop: `1px solid ${palette.border.light}`,
                  borderLeft: `1px solid ${palette.border.light}`,
                  borderRight: `1px solid ${palette.border.light}`,
                  borderBottom: `1px solid ${palette.border.default}`,
                  padding: 4,
                }}
              >
                {item.headline}
              </AccordionItemTrigger>
              <AccordionItemContent
                style={{
                  background: palette.grey[200],
                  paddingY: 6,
                  paddingX: 4,
                }}
              >
                <CfRichTextRender
                  richTextDocument={item.bodyCopy.json}
                  lang={lang}
                  preview={preview}
                />
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};
