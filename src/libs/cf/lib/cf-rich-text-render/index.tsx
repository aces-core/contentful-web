import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES, Node } from "@contentful/rich-text-types";

import { CfAlignment, CfBaseComponent } from "@aces/types";
import { Box, FlexBox, H1, H2, H3, H4, H5, H6, Text } from "@aces/ui";
import {
  CfAccordionsServer,
  CfButtonServer,
  CfCodeEmbedServer,
  CfHeaderServer,
  CfImageServer,
  CfLinkTextServer,
  CfGridServer,
  CfLockupServer,
  CfVideoEmbedServer,
} from "@aces/cf";

import { fetchRichTextEmbedEntry } from "./services";
import style from "./style.module.css";
import { maxTextWidth, palette, typography } from "@aces/theme";

export interface CfRichTextRenderProps
  extends Pick<CfBaseComponent, "lang" | "preview"> {
  richTextDocument: Document;
  color?: string;
  alignment?: CfAlignment;
  baseFontSize?: string;
  enableMaxTextWidth?: boolean;
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

const flexMapAlignment = (alignment: CfAlignment) => {
  switch (alignment) {
    case "Center":
      return "center";
    case "Right":
      return "flex-end";
    default:
      return "flex-start";
  }
};

export const CfRichTextRender = ({
  richTextDocument,
  color = palette.text.primary,
  alignment = "Left",
  baseFontSize = typography.body1.fontSize,
  enableMaxTextWidth = false,
  lang,
  preview,
  ...rest
}: CfRichTextRenderProps) => {
  const processChildrenWithLineBreaks = (
    children: React.ReactNode,
  ): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (typeof child === "string") {
        return child.split("\n").map((line, index, array) => (
          <React.Fragment key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ));
      }

      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          //@ts-expect-error: children is not a prop of ReactElement
          children: processChildrenWithLineBreaks(child.props?.children),
        });
      }

      return child;
    });
  };

  const CfText = ({ children }: { children: React.ReactNode }) => {
    return (
      <Text
        align={mapAlignment(alignment)}
        style={{
          fontSize: "inherit",
          lineHeight: "inherit",
          paddingBottom: "1rem",
          maxWidth: enableMaxTextWidth ? maxTextWidth : "none",
          marginX:
            enableMaxTextWidth && alignment === "Center" ? "auto" : "inherit",
          "&:last-child": { paddingBottom: 0 },
        }}
      >
        {processChildrenWithLineBreaks(children)}
      </Text>
    );
  };

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <CfText>{children}</CfText>
      ),
      [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
        <H1
          align={mapAlignment(alignment)}
          style={{
            marginBottom: "1rem",
            maxWidth: enableMaxTextWidth ? maxTextWidth : "none",
            marginX:
              enableMaxTextWidth && alignment === "Center" ? "auto" : "inherit",
          }}
        >
          {children}
        </H1>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
        <H2
          align={mapAlignment(alignment)}
          style={{
            marginBottom: "1rem",
            maxWidth: enableMaxTextWidth ? maxTextWidth : "none",
            marginX:
              enableMaxTextWidth && alignment === "Center" ? "auto" : "inherit",
          }}
        >
          {children}
        </H2>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
        <H3
          align={mapAlignment(alignment)}
          style={{
            marginBottom: "1rem",
            maxWidth: enableMaxTextWidth ? maxTextWidth : "none",
            marginX:
              enableMaxTextWidth && alignment === "Center" ? "auto" : "inherit",
          }}
        >
          {children}
        </H3>
      ),
      [BLOCKS.HEADING_4]: (node: Node, children: React.ReactNode) => (
        <H4
          align={mapAlignment(alignment)}
          style={{
            marginBottom: ".75rem",
            maxWidth: enableMaxTextWidth ? maxTextWidth : "none",
            marginX:
              enableMaxTextWidth && alignment === "Center" ? "auto" : "inherit",
          }}
        >
          {children}
        </H4>
      ),
      [BLOCKS.HEADING_5]: (node: Node, children: React.ReactNode) => (
        <H5
          align={mapAlignment(alignment)}
          style={{
            marginBottom: ".5rem",
            maxWidth: enableMaxTextWidth ? maxTextWidth : "none",
            marginX:
              enableMaxTextWidth && alignment === "Center" ? "auto" : "inherit",
          }}
        >
          {children}
        </H5>
      ),
      [BLOCKS.HEADING_6]: (node: Node, children: React.ReactNode) => (
        <H6
          align={mapAlignment(alignment)}
          style={{
            marginBottom: ".5rem",
            maxWidth: enableMaxTextWidth ? maxTextWidth : "none",
            marginX:
              enableMaxTextWidth && alignment === "Center" ? "auto" : "inherit",
          }}
        >
          {children}
        </H6>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: async (node: Node) => {
        const id = node.data.target.sys.id;

        const entry = await fetchRichTextEmbedEntry(id);
        const typename = entry.__typename;

        switch (typename) {
          case "Accordions":
            return (
              <CfAccordionsServer
                id={id}
                preview={preview}
                lang={lang}
                nested
              />
            );
          case "CodeEmbed":
            return (
              <CfCodeEmbedServer id={id} preview={preview} lang={lang} nested />
            );
          case "Header":
            return (
              <CfHeaderServer
                id={id}
                preview={preview}
                lang={lang}
                nested
                alignment={alignment}
              />
            );
          case "Image":
            return (
              <FlexBox marginY={2} justifyContent={flexMapAlignment(alignment)}>
                <CfImageServer id={id} preview={preview} lang={lang} nested />
              </FlexBox>
            );
          case "GridUpdated":
            return (
              <CfGridServer id={id} preview={preview} lang={lang} nested />
            );
          case "Lockup":
            return (
              <CfLockupServer id={id} preview={preview} lang={lang} nested />
            );
          case "VideoEmbed":
            return (
              <CfVideoEmbedServer
                id={id}
                preview={preview}
                lang={lang}
                nested
              />
            );
          default:
            return null;
        }
      },
      [INLINES.EMBEDDED_ENTRY]: async (node: Node) => {
        const id = node.data.target.sys.id;

        const entry = await fetchRichTextEmbedEntry(id);
        const typename = entry.__typename;

        switch (typename) {
          case "Button":
            return <CfButtonServer id={id} preview={preview} lang={lang} />;
          case "LinkText":
            return (
              <CfLinkTextServer
                id={id}
                preview={preview}
                lang={lang}
                alignment={mapAlignment(alignment)}
              />
            );
          default:
            return null;
        }
      },
    },
  };

  return (
    <Box
      className={style.richText}
      style={{
        color: color,
        fontSize: baseFontSize,
        lineHeight: 1.75,
      }}
      {...rest}
    >
      {documentToReactComponents(richTextDocument, options)}
    </Box>
  );
};
