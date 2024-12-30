"use client";

import {
  useTheme as useMuiTheme,
  Theme as MuiTheme,
} from "@mui/material/styles";

export const useTheme = <T extends MuiTheme>(): T => {
  const theme = useMuiTheme();
  return theme as T;
};
