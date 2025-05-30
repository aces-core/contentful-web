import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  CfGridItemsStyleTypes,
  CfImageProps,
  Nested,
} from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing, maxTextWidth, palette, shape } from "@aces/theme";
import { Box, Col, Container, Row } from "@aces/ui";

import { CfCardProps } from "../cf-card/render";
import { CfRichTextSectionProps } from "../cf-rich-text-section/render";
import { CfRichTextSectionServer } from "../cf-rich-text-section";
import { CfImageServer } from "../cf-image";
import { CfServicesServer } from "../cf-services";

export interface CfGridProps extends CfBaseComponent, Nested {
  showDividers: boolean;
  gridColumnCount: number;
  gridItemsStyle: CfGridItemsStyleTypes;
  listItems: (CfCardProps | CfImageProps | CfRichTextSectionProps)[];
}

export const CfGrid = ({
  internalTitle,
  showDividers,
  gridColumnCount,
  gridItemsStyle,
  listItems,
  __typename,
  nested = false,
  id,
  lang,
  preview,
}: CfGridProps) => {
  const dividerStyle = {
    borderRight: { xs: "none", md: `1px solid ${palette.grey[300]}` },
    borderBottom: { xs: `1px solid ${palette.grey[300]}`, sm: "none" },
    paddingLeft: { xs: 0, sm: 2, md: 6 },
    paddingRight: { xs: 0, sm: 8, md: 24 },
    paddingBottom: { xs: 12, sm: 0, md: 0 },
    marginBottom: { xs: 8, sm: 8, md: 0 },
    "&:first-child": { paddingLeft: 0 },
    "&:nth-child(even)": {
      borderRight: { sm: "none", md: `1px solid ${palette.grey[300]}` },
    },
    "&:nth-child(odd):not(:first-child)": {
      paddingLeft: { sm: 0, md: 6 },
    },
    "&:last-child": {
      borderRight: "none",
      borderBottom: "none",
      paddingBottom: 0,
      marginBottom: 0,
    },
  };
  const colSize = {
    xs: 12,
    sm: gridColumnCount >= 3 ? 6 : 12,
    md: 12 / gridColumnCount,
  };

  const isCards = gridItemsStyle === "Cards";

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
      <Container nested={nested}>
        <Row
          columnSpacing={!showDividers ? 10 : 6}
          rowSpacing={5}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          {listItems.map((item, index) => {
            const typename = item.__typename;

            const isCfRichText = (
              item: any,
            ): item is CfRichTextSectionProps => {
              return "grayBackground" in item;
            };

            switch (typename) {
              case "RichTextSection":
                if (isCfRichText(item)) {
                  return (
                    <Col
                      key={`${id}-${index}`}
                      size={colSize}
                      style={
                        showDividers
                          ? { maxWidth: maxTextWidth, ...dividerStyle }
                          : { maxWidth: maxTextWidth }
                      }
                    >
                      <Box
                        position={"relative"}
                        style={
                          isCards
                            ? {
                                background: palette.common.white,
                                boxShadow: "0 0 4px rgba(0,0,0,.08)",
                                padding: 8,
                                height: "100%",
                              }
                            : {
                                borderRadius: item.grayBackground
                                  ? shape.borderRadius
                                  : 0,
                                overflow: "hidden",
                              }
                        }
                      >
                        <CfRichTextSectionServer
                          id={item?.sys?.id || ""}
                          preview={preview}
                          lang={lang}
                          key={index}
                          nested={item.grayBackground ? false : true}
                          smallPadding={true}
                        />
                      </Box>
                    </Col>
                  );
                }
              case "Image":
                return (
                  <Col
                    key={`${id}-${index}`}
                    size={colSize}
                    style={showDividers ? dividerStyle : {}}
                  >
                    <CfImageServer
                      id={item?.sys?.id || ""}
                      preview={preview}
                      lang={lang}
                      key={index}
                      nested={true}
                    />
                  </Col>
                );
              case "Services":
                return (
                  <Col
                    key={`${id}-${index}`}
                    size={colSize}
                    style={showDividers ? dividerStyle : {}}
                  >
                    <CfServicesServer
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
