import { PaletteMode, Shape, Size } from "@aces/types";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

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

declare module "@mui/material/styles" {
  interface TypographyVariants {
    textTransform?: string;
  }

  interface TypographyVariantsOptions {
    textTransform?: string;
  }
}
