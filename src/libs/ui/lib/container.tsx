import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from "@mui/material/Container";

interface ContainerProps
  extends Pick<MuiContainerProps, "maxWidth" | "disableGutters" | "children"> {
  noPadding?: boolean;
  nested?: boolean;
  style?: object;
}

export const Container = ({
  nested = false,
  disableGutters = nested,
  noPadding = nested,
  maxWidth = nested ? false : "xl",
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
        flexDirection: "column",
        ...style,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};
