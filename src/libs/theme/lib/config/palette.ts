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

export const tertiary = {
  grayblue: "#EAEEF3",
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
  tertiary: {
    grayblue: tertiary.grayblue,
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
