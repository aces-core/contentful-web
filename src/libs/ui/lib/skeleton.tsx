import MuiSkeleton, {
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material/Skeleton";

import { CustomCssProps } from "@aces/types";

interface SkeletonProps
  extends Pick<
    MuiSkeletonProps,
    "variant" | "animation" | "children" | "component"
  > {
  width?: string | number;
  height?: string | number;
  style?: CustomCssProps;
}

export const Skeleton = ({
  variant = "rectangular",
  animation = "wave",
  component = "div",
  width,
  height,
  style,
  children,
}: SkeletonProps) => {
  return (
    <MuiSkeleton
      variant={variant}
      component={component}
      animation={animation}
      width={width}
      height={height}
      sx={style}
    >
      {children}
    </MuiSkeleton>
  );
};
