import MuiPagination, {
  PaginationProps as MuiPaginationProps,
} from "@mui/material/Pagination";

import { CustomCssProps, ResponsiveSpacing } from "@aces/types";

export interface PaginationProps
  extends Pick<MuiPaginationProps, "color" | "count" | "page" | "onChange"> {
  marginY?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  marginTop?: ResponsiveSpacing;
  marginBottom?: ResponsiveSpacing;
  marginRight?: ResponsiveSpacing;
  marginLeft?: ResponsiveSpacing;
  style?: CustomCssProps;
}

export function Pagination({
  color = "primary",
  count,
  page,
  onChange,
  marginY,
  marginX,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  style,
}: PaginationProps) {
  return (
    <MuiPagination
      color={color}
      count={count}
      page={page}
      onChange={onChange}
      sx={{
        marginX: marginX,
        marginY: marginY,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginRight: marginRight,
        marginLeft: marginLeft,
        ...style,
      }}
    />
  );
}
