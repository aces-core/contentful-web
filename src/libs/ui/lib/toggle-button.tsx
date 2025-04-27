import MuiToggleButton, {
  ToggleButtonProps as MuiToggleButtonProps,
} from "@mui/material/ToggleButton";
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";

import { CustomCssProps, ResponsiveSpacing } from "@aces/types";

interface ToggleButtonProps
  extends Pick<
    MuiToggleButtonProps,
    | "value"
    | "children"
    | "color"
    | "disabled"
    | "disableFocusRipple"
    | "disableRipple"
    | "fullWidth"
    | "selected"
    | "size"
    | "onChange"
    | "onClick"
  > {
  style?: CustomCssProps;
}

export const ToggleButton = ({
  value,
  children,
  color,
  disabled,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  selected,
  size,
  onChange,
  onClick,
  style,
  ...rest
}: ToggleButtonProps) => {
  return (
    <MuiToggleButton
      value={value}
      color={color}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      selected={selected}
      size={size}
      onChange={onChange}
      onClick={onClick}
      sx={style}
      {...rest}
    >
      {children}
    </MuiToggleButton>
  );
};

interface ToggleButtonGroupProps
  extends Pick<
    MuiToggleButtonGroupProps,
    | "children"
    | "color"
    | "disabled"
    | "exclusive"
    | "fullWidth"
    | "orientation"
    | "size"
    | "onChange"
    | "onClick"
    | "value"
  > {
  style?: CustomCssProps;
  marginY?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  marginTop?: ResponsiveSpacing;
  marginBottom?: ResponsiveSpacing;
  marginLeft?: ResponsiveSpacing;
  marginRight?: ResponsiveSpacing;
}

export const ToggleButtonGroup = ({
  children,
  color,
  disabled,
  exclusive,
  fullWidth,
  orientation,
  size,
  onChange,
  onClick,
  value,
  marginY,
  marginX,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  style,
  ...rest
}: ToggleButtonGroupProps) => {
  return (
    <MuiToggleButtonGroup
      color={color}
      disabled={disabled}
      exclusive={exclusive}
      fullWidth={fullWidth}
      orientation={orientation}
      size={size}
      onChange={onChange}
      onClick={onClick}
      value={value}
      sx={{
        marginY: marginY,
        marginX: marginX,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        ...style,
      }}
      {...rest}
    >
      {children}
    </MuiToggleButtonGroup>
  );
};
