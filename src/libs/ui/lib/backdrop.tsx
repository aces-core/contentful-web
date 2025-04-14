import MuiBackdrop, {
  BackdropProps as MuiBackdropProps,
} from "@mui/material/Backdrop";

import { CustomCssProps } from "@aces/types";

interface BackdropProps
  extends Pick<
    MuiBackdropProps,
    "mode" | "component" | "open" | "children" | "onClick"
  > {
  style?: CustomCssProps;
}

export const Backdrop = ({
  mode = "dark",
  component = "div",
  children,
  open,
  onClick,
  style,
}: BackdropProps) => {
  return (
    <MuiBackdrop
      mode={mode}
      component={component}
      open={open}
      sx={style}
      onClick={onClick}
    >
      {children}
    </MuiBackdrop>
  );
};
