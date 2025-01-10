import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from "@mui/material/Container";

interface ContainerProps
  extends Pick<MuiContainerProps, "maxWidth" | "disableGutters" | "children"> {
  noPadding?: boolean;
  style?: object;
}

export const Container = ({
  noPadding,
  maxWidth = "xl",
  disableGutters,
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
          paddingLeft: { xs: "1.5rem", sm: "2rem" },
          paddingRight: { xs: "1.5rem", sm: "2rem" },
        }),
        ...style,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};
