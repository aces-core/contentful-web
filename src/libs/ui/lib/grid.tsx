import MuiGrid2, { Grid2Props as MuiGrid2Props } from "@mui/material/Grid2";

import { CustomCssProps } from "@maverick/types";

interface RowProps
  extends Pick<
    MuiGrid2Props,
    | "spacing"
    | "marginY"
    | "marginX"
    | "marginTop"
    | "marginBottom"
    | "flexDirection"
    | "alignItems"
    | "rowSpacing"
    | "columnSpacing"
    | "children"
  > {
  style?: CustomCssProps;
}

export const Row = ({
  spacing = 0,
  marginY,
  marginX,
  marginTop,
  marginBottom,
  flexDirection = {
    xs: "column",
    md: "row",
  },
  alignItems,
  rowSpacing,
  columnSpacing,
  style,
  children,
}: RowProps) => {
  return (
    <MuiGrid2
      container={true}
      spacing={spacing}
      marginY={marginY}
      marginX={marginX}
      marginTop={marginTop}
      marginBottom={marginBottom}
      flexDirection={flexDirection}
      alignItems={alignItems}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      sx={{
        ...style,
      }}
    >
      {children}
    </MuiGrid2>
  );
};

interface ColProps
  extends Pick<MuiGrid2Props, "size" | "offset" | "flexGrow" | "children"> {
  style?: CustomCssProps;
}

export const Col = ({ size, offset, flexGrow, style, children }: ColProps) => {
  return (
    <MuiGrid2 size={size} offset={offset} flexGrow={flexGrow} sx={style}>
      {children}
    </MuiGrid2>
  );
};
