import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

import { CustomCssProps } from "@maverick/types";
import { Box } from "@maverick/ui";

export type ButtonColor = MuiButtonProps["color"];
export type ButtonVariant = MuiButtonProps["variant"];

export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    | "id"
    | "color"
    | "variant"
    | "size"
    | "shape"
    | "fullWidth"
    | "startIcon"
    | "endIcon"
    | "aria-label"
    | "children"
    | "onClick"
  > {
  fullWidthMobile?: boolean;
  style?: CustomCssProps;
}

export const Button = ({
  variant,
  color,
  size = "medium",
  shape = "circular",
  startIcon,
  endIcon,
  fullWidth,
  fullWidthMobile,
  "aria-label": ariaLabel,
  style,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      color={color}
      variant={variant}
      size={size}
      shape={shape}
      aria-label={ariaLabel}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        width: fullWidth
          ? { xs: "100%" }
          : fullWidthMobile
            ? { xs: "100%", md: "auto" }
            : { xs: "auto" },
        ...style,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

interface TextButtonProps extends ButtonProps {
  stretch?: boolean;
}

export const TextButton = ({
  stretch,
  style,
  children,
  ...rest
}: TextButtonProps) => {
  return (
    <Button
      color="inherit"
      variant="text"
      style={{
        position: "relative",
        minWidth: 0,
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
        ...style,
      }}
      {...rest}
    >
      {stretch && (
        <Box
          component="span"
          style={{ position: "absolute", inset: "0", zIndex: 1 }}
        />
      )}
      {children}
    </Button>
  );
};

export const LinkButton = (props: ButtonProps) => {
  return (
    <Button
      color="inherit"
      variant="text"
      style={{
        color: "primary.main",
        minWidth: 0,
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
          color: "primary.dark",
          textDecoration: "underline",
        },
      }}
      {...props}
    />
  );
};
