import React from "react";
import NextLink from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";

import { CustomCssProps } from "@maverick/types";
import { Box } from "@maverick/ui";

export interface LinkProps
  extends Pick<MuiLinkProps, "color" | "variant" | "underline"> {
  href: string;
  passHref?: boolean;
  stretch?: boolean;
  endIcon?: React.ReactNode;
  linkComponent?: React.ElementType;
  style?: CustomCssProps;
  children: React.ReactNode;
  onMouseEnter?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
  onMouseLeave?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      stretch,
      color = "inherit",
      variant = "body1",
      underline = "none",
      linkComponent = MuiLink,
      endIcon,
      style,
      children,
      onMouseEnter,
      onMouseLeave,
    },
    ref,
  ) => {
    const LinkComponent = linkComponent;

    return (
      <NextLink href={href} passHref={true} legacyBehavior={true}>
        <LinkComponent
          ref={ref}
          href={href}
          color={color}
          variant={variant}
          underline={underline}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            position: stretch ? "initial" : "relative",
            textDecoration: underline,
            ...style,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <span style={{ position: "absolute", inset: "0", zIndex: 1 }} />
          {children}
          {endIcon && (
            <Box
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {endIcon}
            </Box>
          )}
        </LinkComponent>
      </NextLink>
    );
  },
);
Link.displayName = "Link";

export const LinkWrapper = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, passHref, children }, ref) => {
    return (
      <NextLink href={href} passHref={passHref} legacyBehavior={true} ref={ref}>
        {children}
      </NextLink>
    );
  },
);
LinkWrapper.displayName = "LinkWrapper";
