"use client";

import { useTheme as useMuiTheme } from "@mui/material/styles";

import { ThemeType } from "@aces/theme";

export const useTheme = <T extends ThemeType>(): T => {
  const theme = useMuiTheme();
  return theme as T;
};
