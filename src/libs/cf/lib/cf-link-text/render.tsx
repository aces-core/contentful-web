"use client";

import { useState } from "react";
import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfLinkProps } from "@aces/types";
import { palette, typography } from "@aces/theme";
import { FlexBox, Icon, InlineBox } from "@aces/ui";

import { CfLink } from "../cf-link/render";

export interface CfLinkTextProps extends CfBaseComponent {
  link: CfLinkProps;
  title: string;
  externalLinkIcon: boolean;
  alignment?: string;
}

export const CfTextLink = ({
  link,
  title,
  externalLinkIcon,
  alignment,
  id,
  lang,
}: CfLinkTextProps) => {
  const [hover, setHover] = useState(false);
  const flexAlignment =
    alignment === "center"
      ? "center"
      : alignment === "right"
        ? "flex-end"
        : "flex-start";

  const handleHover = (hover: boolean) => {
    setHover(hover);
  };

  return (
    <CfLink
      linkType={link.linkType}
      pageLink={link.pageLink}
      customLink={link.customLink}
      target={link.target}
      lang={lang}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{ display: "inline-block" }}
    >
      <FlexBox
        alignItems="center"
        justifyContent={flexAlignment}
        component="span"
        style={typography.link}
        {...ContentfulLivePreview.getProps({
          entryId: id,
          fieldId: "title",
          locale: lang,
        })}
      >
        <InlineBox
          style={{
            color: hover ? typography.link.color : palette.text.primary,
            textDecoration: "underline",
          }}
        >
          {title}
        </InlineBox>
        {externalLinkIcon && (
          <Icon
            icon="OpenInNew"
            size={16}
            marginLeft={2}
            color={hover ? typography.link.color : "inherit"}
          />
        )}
      </FlexBox>
    </CfLink>
  );
};
