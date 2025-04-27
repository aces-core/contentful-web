import React, { forwardRef } from "react";
import MuiBox, { BoxProps as MuiBoxProps } from "@mui/material/Box";

import { CustomCssProps } from "@aces/types";

export interface BoxProps
  extends Pick<
    MuiBoxProps,
    | "id"
    | "role"
    | "hidden"
    | "display"
    | "position"
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "color"
    | "textAlign"
    | "width"
    | "height"
    | "minWidth"
    | "minHeight"
    | "maxWidth"
    | "maxHeight"
    | "overflow"
    | "border"
    | "borderColor"
    | "borderRadius"
    | "bgcolor"
    | "boxShadow"
    | "padding"
    | "paddingTop"
    | "paddingRight"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingX"
    | "paddingY"
    | "margin"
    | "marginTop"
    | "marginRight"
    | "marginBottom"
    | "marginLeft"
    | "marginX"
    | "marginY"
    | "flex"
    | "flexDirection"
    | "flexGrow"
    | "flexShrink"
    | "flexBasis"
    | "flexWrap"
    | "justifyContent"
    | "alignItems"
    | "alignContent"
    | "gap"
    | "className"
    | "onClick"
    | "onMouseEnter"
    | "onMouseLeave"
    | "children"
  > {
  component?: React.ElementType;
  style?: CustomCssProps;
  src?: string;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = "div", style, ...props }, ref) => {
    return <MuiBox ref={ref} sx={style} component={component} {...props} />;
  },
);

Box.displayName = "Box";

export const FlexBox = forwardRef<HTMLElement, BoxProps>(
  (
    {
      component = "div",
      flexDirection,
      alignItems,
      justifyContent,
      flexWrap,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <MuiBox
        ref={ref}
        display="flex"
        sx={{
          alignItems: alignItems,
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          flexWrap: flexWrap,
          ...style,
        }}
        component={component}
        {...props}
      />
    );
  },
);

FlexBox.displayName = "FlexBox";

export const InlineBox = forwardRef<HTMLElement, BoxProps>(
  ({ style, component = "span", children, ...props }, ref) => {
    return (
      <MuiBox
        ref={ref}
        display="inline-block"
        sx={style}
        component={component}
        {...props}
      >
        {children}
      </MuiBox>
    );
  },
);

InlineBox.displayName = "InlineBox";

export const ScrollBox = forwardRef<HTMLElement, BoxProps>(
  ({ component = "div", alignItems = "center", style, ...props }, ref) => {
    return (
      <MuiBox
        ref={ref}
        display="flex"
        sx={{
          alignItems: alignItems,
          position: "relative",
          overflowX: "auto",
          scrollbarWidth: "none",
          width: "100%",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          WebkitOverflowScrolling: "touch",
          ...style,
        }}
        component={component}
        {...props}
      />
    );
  },
);

ScrollBox.displayName = "ScrollBox";
