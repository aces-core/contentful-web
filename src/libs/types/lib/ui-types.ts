import {
  PaletteMode as MuiPaletteMode,
  SxProps as MuiSxProps,
} from "@mui/material";
import { GridSpacing } from "@mui/material/Grid";
import { ResponsiveStyleValue } from "@mui/system";

import { theme } from "@aces/theme";

export type CustomCssProps = MuiSxProps<typeof theme>;

export type PaletteMode = MuiPaletteMode;

export type Size = "small" | "medium" | "large";

export type Orientation = "horizontal" | "vertical";

export type Shape = "circular" | "rounded" | "square";

export type ImageSize = "fill" | "native";

export type SelectOption = {
  value: string;
  label: string;
};

export type ResponsiveSpacing = ResponsiveStyleValue<string | number>;

export type Spacing = number | ResponsiveStyleValue<GridSpacing>;

export type ResponsiveBoolean =
  | boolean
  | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", boolean>>;
