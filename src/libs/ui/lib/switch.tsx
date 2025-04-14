import React from "react";
import MuiSwitch, { SwitchProps as MuiSwitchProps } from "@mui/material/Switch";

import { CustomCssProps } from "@aces/types";

interface SwitchProps
  extends Pick<
    MuiSwitchProps,
    "color" | "checked" | "defaultChecked" | "onChange" | "size"
  > {
  style?: CustomCssProps;
}

export const Switch = ({
  color,
  checked,
  defaultChecked,
  onChange,
  size,
  style,
  ...rest
}: SwitchProps) => {
  return (
    <MuiSwitch
      color={color}
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={onChange}
      size={size}
      sx={style}
      {...rest}
    />
  );
};
