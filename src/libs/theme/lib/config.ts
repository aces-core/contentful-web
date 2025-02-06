import { Open_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import { PaletteMode, Shape, Size } from "@maverick/types";

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }

  interface Palette {
    gradient: {
      light: string;
      primary: string;
      dark: string;
      secondary: string;
      accent: string;
    };
    foreground: {
      default: string;
    };
    border: {
      light: string;
      default: string;
      input: string;
    };
  }

  interface PaletteOptions {
    gradient?: {
      light: string;
      primary: string;
      dark: string;
    };
    foreground?: {
      default: string;
    };
    border?: {
      default: string;
      input: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    light: true;
    gradient: true;
  }

  interface ButtonOwnProps {
    shape?: Shape;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    light: true;
  }

  interface IconButtonOwnProps {
    variant?: "standard" | "contained" | "outlined";
    shape?: Shape;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    light: true;
  }

  interface ChipOwnProps {
    shape?: Shape;
  }
}

declare module "@mui/material/Backdrop" {
  interface BackdropOwnProps {
    mode: PaletteMode;
  }
}

declare module "@mui/material/FormControlLabel" {
  interface FormControlLabelProps {
    size?: Size;
  }
}

const defaultTheme = createTheme();

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

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 980,
    lg: 1200,
    xl: 1460,
    xxl: 1920,
  },
};

export const componentSpacing = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 24,
};

export const typography = {
  fontFamily: primaryFont.style.fontFamily,
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    lineHeight: defaultTheme.typography.pxToRem(56),
    fontWeight: 600,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(36),
      lineHeight: defaultTheme.typography.pxToRem(44),
    },
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(40),
    lineHeight: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(32),
      lineHeight: defaultTheme.typography.pxToRem(40),
    },
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(32),
    lineHeight: defaultTheme.typography.pxToRem(40),
    fontWeight: 600,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(28),
      lineHeight: defaultTheme.typography.pxToRem(36),
    },
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    lineHeight: defaultTheme.typography.pxToRem(32),
    fontWeight: 600,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(20),
      lineHeight: defaultTheme.typography.pxToRem(28),
    },
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    lineHeight: defaultTheme.typography.pxToRem(28),
    fontWeight: 600,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(18),
      lineHeight: defaultTheme.typography.pxToRem(24),
    },
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    lineHeight: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    [`@media (max-width:${breakpoints.values.md}px)`]: {
      fontSize: defaultTheme.typography.pxToRem(16),
      lineHeight: defaultTheme.typography.pxToRem(20),
    },
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(24),
    lineHeight: defaultTheme.typography.pxToRem(32),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(20),
    lineHeight: defaultTheme.typography.pxToRem(28),
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(16),
    lineHeight: defaultTheme.typography.pxToRem(24),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    lineHeight: defaultTheme.typography.pxToRem(20),
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    lineHeight: defaultTheme.typography.pxToRem(16),
  },
  link: {
    color: "#1f7ef6",
    textDecoration: "none",
    "&:hover": {
      color: "#5b9ff8",
    },
  },
};

export const spacing = 4;

export const common = {
  white: "#ffffff",
  black: "#000000",
};

export const primary = {
  light: "#5AA9FF",
  main: "#0066CC",
  dark: "#003366",
};

export const secondary = {
  light: "#F4D200",
  main: "#FF9800",
  dark: "#B47C00",
};

export const red = {
  light: "#fee4e2",
  main: "#cc2b21e6",
  dark: "#991e14",
};

export const green = {
  light: "#dcfce7",
  main: "#0fd417",
  dark: "#009929",
};

export const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#f0f0f0",
  300: "#d4d4d4",
  400: "#a3a3a3",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717",
  950: "#0a0a0a",
};

export const gradient = {
  light: `linear-gradient(32.57deg, ${common.white} -0.11%, ${primary.light} 100%)`,
  primary: `linear-gradient(267.29deg, ${primary.light} 0%, ${primary.dark} 100%)`,
  dark: `linear-gradient(267.29deg, ${primary.main} 0%, ${primary.dark} 100%)`,
  secondary: `linear-gradient(32.57deg, ${secondary.light} 0%, ${secondary.dark} 100%)`,
  accent: `linear-gradient(45deg, ${primary.main} 0%, ${secondary.main} 100%)`,
};

export const palette = {
  mode: "light",
  common: {
    white: common.white,
    black: common.black,
  },
  primary: {
    light: primary.light,
    main: primary.main,
    dark: primary.dark,
    contrastText: common.white,
  },
  secondary: {
    main: secondary.main,
    light: secondary.light,
    dark: secondary.dark,
    contrastText: common.white,
  },
  error: {
    light: red.light,
    main: red.main,
    dark: red.dark,
    contrastText: common.white,
  },
  success: {
    light: green.light,
    main: green.main,
    dark: green.dark,
    contrastText: common.white,
  },
  grey: {
    ...grey,
  },
  gradient: {
    light: gradient.light,
    primary: gradient.primary,
    dark: gradient.dark,
    secondary: gradient.secondary,
    accent: gradient.accent,
  },
  divider: grey[300],
  text: {
    primary: common.black,
    secondary: grey[600],
  },
  background: {
    default: grey[100],
    paper: common.white,
  },
  foreground: {
    default: grey[200],
  },
  border: {
    light: grey[200],
    default: grey[300],
    input: grey[400],
  },
};

export const shape = {
  borderRadius: 0,
};
