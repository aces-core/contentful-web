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
          paddingLeft: { xs: "1rem", sm: "1.5rem" },
          paddingRight: { xs: "1rem", sm: "1.5rem" },
        }),
        ...style,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};
