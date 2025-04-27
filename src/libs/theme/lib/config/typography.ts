import { Open_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import { breakpoints } from "./spacing";
import { palette } from "./palette";

const defaultTheme = createTheme();

export const headerFont = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const primaryFont = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const typography = {
  fontFamily: primaryFont.style.fontFamily,
  h1: {
    fontFamily: headerFont.style.fontFamily,
    fontSize: defaultTheme.typography.pxToRem(60),
    lineHeight: defaultTheme.typography.pxToRem(64),
    fontWeight: 400,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(48),
      lineHeight: defaultTheme.typography.pxToRem(52),
    },
  },
  h2: {
    fontFamily: headerFont.style.fontFamily,
    fontSize: defaultTheme.typography.pxToRem(48),
    lineHeight: defaultTheme.typography.pxToRem(52),
    fontWeight: 400,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(36),
      lineHeight: defaultTheme.typography.pxToRem(40),
    },
  },
  h3: {
    fontFamily: headerFont.style.fontFamily,
    fontSize: defaultTheme.typography.pxToRem(36),
    lineHeight: defaultTheme.typography.pxToRem(40),
    fontWeight: 400,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(32),
      lineHeight: defaultTheme.typography.pxToRem(36),
    },
  },
  h4: {
    fontFamily: headerFont.style.fontFamily,
    fontSize: defaultTheme.typography.pxToRem(28),
    lineHeight: defaultTheme.typography.pxToRem(36),
    fontWeight: 400,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(28),
      lineHeight: defaultTheme.typography.pxToRem(36),
    },
  },
  h5: {
    fontFamily: headerFont.style.fontFamily,
    fontSize: defaultTheme.typography.pxToRem(24),
    lineHeight: defaultTheme.typography.pxToRem(32),
    fontWeight: 400,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(24),
      lineHeight: defaultTheme.typography.pxToRem(32),
    },
  },
  h6: {
    fontFamily: primaryFont.style.fontFamily,
    fontSize: defaultTheme.typography.pxToRem(18),
    lineHeight: defaultTheme.typography.pxToRem(24),
    fontWeight: 400,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(18),
      lineHeight: defaultTheme.typography.pxToRem(24),
    },
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18),
    lineHeight: defaultTheme.typography.pxToRem(24),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    lineHeight: defaultTheme.typography.pxToRem(24),
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(16),
    lineHeight: defaultTheme.typography.pxToRem(21),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(18),
    lineHeight: defaultTheme.typography.pxToRem(24),
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    lineHeight: defaultTheme.typography.pxToRem(14),
  },
  link: {
    color: palette.primary.main,
    "&:hover": {
      color: palette.primary.light,
    },
  },
};
