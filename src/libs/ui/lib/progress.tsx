import MuiLinearProgress, {
  LinearProgressProps as MuiLinearProgressProps,
} from "@mui/material/LinearProgress";

import { CustomCssProps, ResponsiveSpacing } from "@aces/types";

interface LinearProgressProps
  extends Pick<MuiLinearProgressProps, "variant" | "value" | "color"> {
  borderRadius?: ResponsiveSpacing;
  margin?: ResponsiveSpacing;
  marginY?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  height?: ResponsiveSpacing;
  maxWidth?: ResponsiveSpacing;
  style?: CustomCssProps;
}

export const LinearProgress = ({
  variant = "determinate",
  value = 0,
  color = "primary",
  borderRadius = "999px",
  margin,
  marginX,
  marginY,
  height = "10px",
  maxWidth,
  style,
  ...props
}: LinearProgressProps) => {
  return (
    <MuiLinearProgress
      variant={variant}
      value={value}
      color={color}
      sx={{
        borderRadius: borderRadius,
        margin: margin,
        marginY: marginY,
        marginX: marginX,
        height: height,
        width: "100%",
        maxWidth: maxWidth,
        ...style,
      }}
      {...props}
    />
  );
};
