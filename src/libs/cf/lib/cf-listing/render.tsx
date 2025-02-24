import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Col, Container, Row } from "@maverick/ui";

import { CfCardProps } from "../cf-card/render";
import { CfRichTextSectionProps } from "../cf-rich-text-section/render";
import { CfCardServer } from "../cf-card";
import { CfRichTextSectionServer } from "../cf-rich-text-section";
import { CfImageServer } from "../cf-image";

export interface CfListingProps extends CfBaseComponent {
  listingType: "Grid" | "Listing";
  gridColumnCount: number;
  listItems: (CfCardProps | CfImageProps | CfRichTextSectionProps)[];
}

export const CfListing = ({
  internalTitle,
  listingType,
  gridColumnCount,
  listItems,
  __typename,
  id,
  lang,
  preview,
}: CfListingProps) => {
  const colSize =
    listingType === "Grid"
      ? {
          xs: 12,
          sm: gridColumnCount <= 2 ? 6 : 12,
          md: 12 / gridColumnCount,
        }
      : { xs: 12, sm: 12, md: 10 };

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "listItems",
        locale: lang,
      })}
    >
      <Container>
        <Row spacing={6}>
          {listItems.map((item, index) => {
            const typename = item.__typename;

            switch (typename) {
              case "Card":
                return (
                  <Col key={`${id}-${index}`} size={colSize}>
                    <CfCardServer
                      id={item?.sys?.id || ""}
                      preview={preview}
                      lang={lang}
                      key={index}
                      fullHeight={true}
                    />
                  </Col>
                );
              case "RichTextSection":
                return (
                  <Col key={`${id}-${index}`} size={colSize}>
                    <CfRichTextSectionServer
                      id={item?.sys?.id || ""}
                      preview={preview}
                      lang={lang}
                      key={index}
                    />
                  </Col>
                );
              case "Image":
                return (
                  <Col key={`${id}-${index}`} size={colSize}>
                    <CfImageServer
                      id={item?.sys?.id || ""}
                      preview={preview}
                      lang={lang}
                      key={index}
                      nested={true}
                    />
                  </Col>
                );
              default:
                return null;
            }
          })}
        </Row>
      </Container>
    </Box>
  );
};
