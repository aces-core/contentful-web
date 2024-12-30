"use client";

import type { PaletteOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { buttonsCustomizations } from "./components/buttons";
import { dataDisplayCustomizations } from "./components/data-display";
import { feedbackCustomizations } from "./components/feedback";
import { inputsCustomizations } from "./components/inputs";
import { surfacesCustomizations } from "./components/surfaces";

import { breakpoints, palette, shape, spacing, typography } from "./config";

export const theme = createTheme({
  palette: palette as PaletteOptions,
  breakpoints,
  shape,
  typography,
  spacing,
  components: {
    ...buttonsCustomizations,
    ...inputsCustomizations,
    ...dataDisplayCustomizations,
    ...feedbackCustomizations,
    ...surfacesCustomizations,
  },
});
