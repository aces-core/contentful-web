import MuiSkeleton, {
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material/Skeleton";

import { CustomCssProps } from "@maverick/types";

interface SkeletonProps
  extends Pick<MuiSkeletonProps, "variant" | "animation" | "children"> {
  width?: string | number;
  height?: string | number;
  style?: CustomCssProps;
}

export const Skeleton = ({
  variant = "rectangular",
  animation = "wave",
  width,
  height,
  style,
  children,
}: SkeletonProps) => {
  return (
    <MuiSkeleton
      variant={variant}
      component="div"
      animation={animation}
      width={width}
      height={height}
      sx={style}
    >
      {children}
    </MuiSkeleton>
  );
};
