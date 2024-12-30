import React from "react";
import NextLink from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";

import { CustomCssProps } from "@maverick/types";
import { Box } from "@maverick/ui";

export interface LinkProps
  extends Pick<MuiLinkProps, "color" | "variant" | "underline"> {
  href: string;
  stretch?: boolean;
  endIcon?: React.ReactNode;
  linkComponent?: React.ElementType;
  style?: CustomCssProps;
  children: React.ReactNode;
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
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span style={{ position: "absolute", inset: "0", zIndex: 1 }} />
          {children}
          {endIcon && (
            <Box
              style={(theme) => ({
                display: "inline-flex",
                alignItems: "center",
                transform: isHovered ? "translateX(0.25rem)" : "translateX(0)",
                transition: theme.transitions.create("transform", {
                  duration: theme.transitions.duration.standard,
                }),
              })}
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
