import MuiPaper, { PaperProps as MuiPaperProps } from "@mui/material/Paper";

import { CustomCssProps } from "@maverick/types";

interface PaperProps extends Pick<MuiPaperProps, "elevation" | "children"> {
  style?: CustomCssProps;
}

export function Paper({ elevation = 1, style, children }: PaperProps) {
  return (
    <MuiPaper elevation={elevation} sx={style}>
      {children}
    </MuiPaper>
  );
}
