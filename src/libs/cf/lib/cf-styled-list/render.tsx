import React from "react";
import { ContentfulLivePreview } from "@contentful/live-preview";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, Node } from "@contentful/rich-text-types";

import { CfAlignment, CfBaseComponent, CfRichText } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { Box, FlexBox, Icon, Text } from "@maverick/ui";

type BulletStyles = "CheckCircle";

export interface CfStyledListProps extends CfBaseComponent {
  bulletIcon: BulletStyles;
  list: CfRichText;
  preview: boolean;
}

export interface ListRichTextRendererProps {
  richTextDocument: Document;
  bulletIcon: BulletStyles;
  alignment?: CfAlignment;
  lang: string;
  preview: boolean;
}

const mapAlignment = (
  alignment: CfAlignment,
): "center" | "inherit" | "justify" | "left" | "right" | undefined => {
  const lowerCaseAlignment = alignment.toLowerCase();
  switch (lowerCaseAlignment) {
    case "center":
    case "inherit":
    case "justify":
    case "left":
    case "right":
      return lowerCaseAlignment as
        | "center"
        | "inherit"
        | "justify"
        | "left"
        | "right";
    default:
      return undefined;
  }
};

const ListRichTextRenderer = ({
  richTextDocument,
  alignment = "Left",
  bulletIcon,
  lang,
  preview,
  ...rest
}: ListRichTextRendererProps) => {
  const CfText = ({ children }: { children: React.ReactNode }) => (
    <Text
      align={mapAlignment(alignment)}
      style={{
        fontSize: "inherit",
        lineHeight: "inherit",
        marginBottom: "1rem",
        "&:last-child": { marginBottom: 0 },
      }}
    >
      {children}
    </Text>
  );

  const CfUlList = ({ children }: { children: React.ReactNode }) => (
    <Box
      component="ul"
      marginBottom={8}
      className="CfStyledList-ul"
      style={{
        "& .CfStyledList-li": {
          color: "common.black",
          paddingLeft: 0,
          marginLeft: 0,
        },
        "& .CfStyledList-li::before": {
          content: "none",
        },
      }}
    >
      {React.Children.map(children, (child: React.ReactNode, index: number) => {
        if (!React.isValidElement(child)) return null;

        return (
          <FlexBox
            component="li"
            alignItems="center"
            key={index}
            className="CfStyledList-li"
            gap={2}
            marginBottom={3}
          >
            <Icon icon={bulletIcon} size={20} style={{ flexShrink: 0 }} />
            {child.props.children}
          </FlexBox>
        );
      })}
    </Box>
  );

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <CfText>{children}</CfText>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
        <CfUlList>{children}</CfUlList>
      ),
    },
  };

  return (
    <div {...rest}>{documentToReactComponents(richTextDocument, options)}</div>
  );
};

export const CfStyledList = ({
  internalTitle,
  bulletIcon,
  list,
  __typename,
  id,
  lang,
  preview,
}: CfStyledListProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "list",
        locale: lang,
      })}
    >
      <ListRichTextRenderer
        bulletIcon={bulletIcon}
        richTextDocument={list.json}
        lang={lang}
        preview={preview}
      />
    </Box>
  );
};
