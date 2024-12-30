import MuiChip, { ChipProps as MuiChipProps } from "@mui/material/Chip";

import { CustomCssProps } from "@maverick/types";

interface ChipProps
  extends Pick<MuiChipProps, "label" | "color" | "variant" | "size" | "shape"> {
  uppercase?: boolean;
  style?: CustomCssProps;
}

export const Chip = ({
  label,
  color,
  variant,
  size,
  shape = "circular",
  uppercase = true,
  style,
  ...props
}: ChipProps) => {
  return (
    <MuiChip
      label={label}
      color={color}
      variant={variant}
      size={size}
      shape={shape}
      sx={{
        textTransform: uppercase ? "uppercase" : "none",
        ...style,
      }}
      {...props}
    />
  );
};
