import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from "@mui/material/Container";

import { containerPadding } from "@aces/theme";

interface ContainerProps extends Omit<MuiContainerProps, "sx"> {
  noPadding?: boolean;
  smallPadding?: boolean;
  nested?: boolean;
  style?: object;
}

export const Container = ({
  nested = false,
  disableGutters = nested,
  noPadding = nested,
  maxWidth = nested ? false : "xl",
  smallPadding = false,
  style,
  children,
  ...props
}: ContainerProps) => {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        ...(!noPadding && {
          paddingLeft: smallPadding
            ? { xs: containerPadding.sm }
            : containerPadding,
          paddingRight: smallPadding
            ? { xs: containerPadding.sm }
            : containerPadding,
        }),
        flexDirection: "column",
        ...style,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};
