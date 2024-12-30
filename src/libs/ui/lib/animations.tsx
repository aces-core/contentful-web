import React from "react";
import MuiCollapse, {
  CollapseProps as MuiCollapseProps,
} from "@mui/material/Collapse";
import MuiFade, { FadeProps as MuiFadeProps } from "@mui/material/Fade";
import MuiGrow, { GrowProps as MuiGrowProps } from "@mui/material/Grow";
import MuiSlide, { SlideProps as MuiSlideProps } from "@mui/material/Slide";
import MuiZoom, { ZoomProps as MuiZoomProps } from "@mui/material/Zoom";

import { CustomCssProps } from "@maverick/types";

interface CollapseProps
  extends Pick<MuiCollapseProps, "in" | "unmountOnExit" | "children"> {
  style?: CustomCssProps;
  children?: React.ReactNode;
}

export const Collapse = ({
  in: collapseIn,
  unmountOnExit,
  style,
  children,
  ...rest
}: CollapseProps) => {
  return (
    <MuiCollapse
      in={collapseIn}
      unmountOnExit={unmountOnExit}
      sx={style}
      {...rest}
    >
      <div>{children}</div>
    </MuiCollapse>
  );
};

export const Fade = ({
  in: fadeIn,
  unmountOnExit,
  children,
  style,
  ...rest
}: MuiFadeProps) => {
  return (
    <MuiFade in={fadeIn} unmountOnExit={unmountOnExit} style={style} {...rest}>
      <div>{children}</div>
    </MuiFade>
  );
};

export const Grow = ({
  in: growIn,
  unmountOnExit,
  children,
  style,
  ...rest
}: MuiGrowProps) => {
  return (
    <MuiGrow in={growIn} unmountOnExit={unmountOnExit} style={style} {...rest}>
      <div>{children}</div>
    </MuiGrow>
  );
};

export const Slide = ({
  in: slideIn,
  unmountOnExit,
  children,
  direction = "up",
  style,
  ...rest
}: MuiSlideProps) => {
  return (
    <MuiSlide
      in={slideIn}
      unmountOnExit={unmountOnExit}
      direction={direction}
      style={style}
      {...rest}
    >
      <div>{children}</div>
    </MuiSlide>
  );
};

export const Zoom = ({
  in: zoomIn,
  unmountOnExit,
  children,
  style,
  ...rest
}: MuiZoomProps) => {
  return (
    <MuiZoom in={zoomIn} unmountOnExit={unmountOnExit} style={style} {...rest}>
      <div>{children}</div>
    </MuiZoom>
  );
};
